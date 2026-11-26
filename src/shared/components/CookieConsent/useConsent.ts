"use client";

import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  subscribeConsent,
} from "@/shared/lib/consent";
import { useSyncExternalStore } from "react";

export function useConsent() {
  return useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
}
