import { Link, Text } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/stylesheet";

const ANCHOR = /<a\s[^>]*href=['"]([^'"]+)['"][^>]*>([\s\S]*?)<\/a>/g;
const stripTags = (html: string) => html.replace(/<[^>]+>/g, "");

/**
 * Renders the small HTML subset used in `src/shared/data` (anchors, <u>)
 * as react-pdf text with clickable links. Other tags are dropped.
 */
export function RichText({
  html,
  linkStyle,
}: {
  html: string;
  linkStyle: Style;
}) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of html.matchAll(ANCHOR)) {
    parts.push(stripTags(html.slice(last, match.index)));
    parts.push(
      <Link key={match.index} src={match[1]} style={linkStyle}>
        {stripTags(match[2]).trim()}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  parts.push(stripTags(html.slice(last)));
  return <Text>{parts}</Text>;
}
