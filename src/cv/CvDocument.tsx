import path from "node:path";
import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { contacts, social } from "@/shared/data/contact";
import { education } from "@/shared/data/education";
import { experiences, type Experience } from "@/shared/data/experience";
import { languages } from "@/shared/data/languages";
import { site } from "@/shared/data/site";
import { skills } from "@/shared/data/skills";
import { RichText } from "./richText";

const fontFile = (weight: number) =>
  path.join(
    process.cwd(),
    "node_modules/@fontsource/inter/files",
    `inter-latin-${weight}-normal.woff`,
  );

Font.register({
  family: "Inter",
  fonts: [400, 500, 600, 700].map((fontWeight) => ({
    src: fontFile(fontWeight),
    fontWeight,
  })),
});
// Never split words with hyphens.
Font.registerHyphenationCallback((word) => [word]);

const INK = "#1f1f1f";
const MUTED = "#555555";
const RULE = "#d4d4d4";
const LINK = "#1a5fb4";

const s = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    color: INK,
    paddingTop: 32,
    paddingBottom: 28,
    paddingHorizontal: 48,
    lineHeight: 1.25,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  qr: { width: 64, height: 64, marginRight: 28 },
  identity: { flexGrow: 1 },
  name: { fontSize: 26, fontWeight: 600, lineHeight: 1.2 },
  title: { fontSize: 16, lineHeight: 1.2, marginTop: 2 },
  contact: { fontSize: 8, lineHeight: 1.45 },
  contactLabel: { fontWeight: 600 },
  contactLink: { color: INK, textDecoration: "none" },
  section: { marginBottom: 10 },
  rule: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  ruleAccent: { width: 18, height: 2.5, backgroundColor: INK },
  ruleLine: { flexGrow: 1, height: 0.75, backgroundColor: RULE },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: 5,
  },
  bulletRow: { flexDirection: "row" },
  bullet: { width: 18, paddingLeft: 2 },
  bulletText: { flex: 1 },
  link: { color: LINK, textDecoration: "underline" },
  job: { marginBottom: 8 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  jobTitle: { fontSize: 11, fontWeight: 600 },
  meta: { fontSize: 8, color: MUTED, marginBottom: 3 },
  subhead: { fontSize: 8, color: MUTED, marginTop: 2 },
  stack: { fontSize: 9, color: MUTED, marginTop: 3 },
  stackLabel: { fontWeight: 600 },
  eduItem: { marginBottom: 4 },
});

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const displayPhone = (phone: string) => phone.replace(/^00/, "+");

function Bullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={s.bulletRow} wrap={false}>
          <Text style={s.bullet}>•</Text>
          <View style={s.bulletText}>
            <RichText html={item} linkStyle={s.link} />
          </View>
        </View>
      ))}
    </View>
  );
}

function Section({
  title,
  children,
  short,
}: {
  title: string;
  children: React.ReactNode;
  short?: boolean;
}) {
  return (
    <View style={s.section}>
      {/* Keeps the heading on the same page as the start of its content. */}
      <View wrap={false} minPresenceAhead={60}>
        <View style={short ? [s.rule, { width: "60%" }] : s.rule}>
          <View style={s.ruleAccent} />
          <View style={s.ruleLine} />
        </View>
        <Text style={s.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function Header({ qr }: { qr: string }) {
  const contactRows: [label: string, value: string, href?: string][] = [
    ["Email", contacts.email, `mailto:${contacts.email}`],
    ["Phone", displayPhone(contacts.phone)],
    ["LinkedIn", displayUrl(social.linkedIn.url), social.linkedIn.url],
    ["Github", displayUrl(social.github.url), social.github.url],
    ["Website", displayUrl(site.url), site.url],
  ];
  return (
    <View style={s.header} fixed>
      {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf Image has no alt prop */}
      <Image src={qr} style={s.qr} />
      <View style={s.identity}>
        <Text style={s.name}>{site.name}</Text>
        <Text style={s.title}>{site.jobTitle}</Text>
      </View>
      <View>
        {contactRows.map(([label, value, href]) => (
          <Text key={label} style={s.contact}>
            <Text style={s.contactLabel}>{label}: </Text>
            {href ? (
              <Link src={href} style={s.contactLink}>
                {value}
              </Link>
            ) : (
              value
            )}
          </Text>
        ))}
      </View>
    </View>
  );
}

function Job({ job }: { job: Experience }) {
  const bullets = job.highlights ?? [
    ...job.description,
    ...job.responsibilities,
  ];
  const achievements =
    job.achievements ?? (job.highlights ? job.description : []);
  const company = job.client
    ? `@${job.company.name} (@${job.client.name})`
    : `@${job.company.name}`;
  return (
    <View style={s.job}>
      {/* A job may continue on the next page, but its heading never sits alone. */}
      <View wrap={false} minPresenceAhead={40}>
        <View style={s.row}>
          <Text style={s.jobTitle}>{job.occupation}</Text>
          <Text>
            {job.startDate} - {job.endDate}
          </Text>
        </View>
        <View style={s.row}>
          <Text style={s.meta}>{company}</Text>
          <Text style={s.meta}>{job.location ?? job.remote}</Text>
        </View>
      </View>
      <Bullets items={bullets} />
      {achievements.length > 0 && (
        <>
          <Text style={s.subhead} minPresenceAhead={30}>
            Key Achievements
          </Text>
          <Bullets items={achievements} />
        </>
      )}
      {job.stack.length > 0 && (
        <Text style={s.stack}>
          <Text style={s.stackLabel}>Stack: </Text>
          {job.stack.join(", ")}
        </Text>
      )}
    </View>
  );
}

/** The downloadable CV, built from the same data as the website. */
export function CvDocument({ qr }: { qr: string }) {
  return (
    <Document
      title={`${site.name} - CV`}
      author={site.name}
      subject={site.title}
      language="en"
    >
      <Page size="A4" style={s.page}>
        <Header qr={qr} />

        <Section title="Summary">
          <Text>{site.description}</Text>
        </Section>

        <Section title="Skills" short>
          <Bullets items={skills} />
        </Section>

        <Section title="Experience">
          {experiences.map((job) => (
            <Job key={`${job.company.name}-${job.startDate}`} job={job} />
          ))}
        </Section>

        <Section title="Education & Certifications">
          {education.map((item) => (
            <View key={item.title} style={s.eduItem} wrap={false}>
              <Text style={s.jobTitle}>{item.title}</Text>
              <Text style={s.meta}>
                {item.date} @{item.institution}, {item.location}
              </Text>
            </View>
          ))}
        </Section>

        <Section title="Languages">
          <View wrap={false}>
            <Bullets items={languages.map((l) => `${l.name}: ${l.level}`)} />
          </View>
        </Section>
      </Page>
    </Document>
  );
}
