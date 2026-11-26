// Visitor consent for analytics cookies, kept in localStorage (strictly necessary storage, exempt from consent).
// Per CNIL guidance the choice expires after 6 months and the banner asks again.

export type ConsentStatus = "granted" | "denied";
/** "unknown": no valid choice stored, so the banner should show. "pending": server render or storage not read yet. */
export type ConsentState = ConsentStatus | "unknown" | "pending";

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";
const OPEN_SETTINGS_EVENT = "cookie-consent-open";
export const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182; // ~6 months

type Stored = { status: ConsentStatus; at: number };

export function readConsent(): ConsentState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return "unknown";
    const stored = JSON.parse(raw) as Stored;
    if (
      (stored.status !== "granted" && stored.status !== "denied") ||
      typeof stored.at !== "number" ||
      Date.now() - stored.at > CONSENT_MAX_AGE_MS
    ) {
      return "unknown";
    }
    return stored.status;
  } catch {
    return "unknown";
  }
}

export function writeConsent(status: ConsentStatus) {
  try {
    const stored: Stored = { status, at: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Storage unavailable (private mode, blocked): the choice holds for this page view only.
  }
  memoryFallback = status;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

let memoryFallback: ConsentStatus | null = null;

export function getConsentSnapshot(): ConsentState {
  const stored = readConsent();
  return stored === "unknown" && memoryFallback ? memoryFallback : stored;
}

export function getServerConsentSnapshot(): ConsentState {
  return "pending";
}

export function subscribeConsent(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function subscribeOpenSettings(onOpen: () => void) {
  window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
}
