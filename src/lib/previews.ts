/**
 * A small "here is what it actually looks like" sample for each project.
 *
 * The two web projects use real screenshots of their live sites. The CLI and the
 * two bots have nothing to link to, so they show the real commands and the real
 * card from their own READMEs instead — nothing here is invented.
 */
export type Preview =
  | { kind: "shot"; label: string; src: string; alt: string }
  | {
      kind: "terminal";
      label: string;
      hint?: string;
      lines: { kind: "cmd" | "out" | "hi"; text: string }[];
    }
  | {
      kind: "commands";
      label: string;
      hint?: string;
      items: { cmd: string; note: string }[];
    }
  | {
      kind: "bill";
      label: string;
      hint?: string;
      bill: {
        title: string;
        number: number;
        paidBy: string;
        total: number;
        collected: number;
        shares: { name: string; amount: number; paid: boolean }[];
      };
    };

export const previews: Record<string, Preview> = {
  "KU-Acoustic-Website": {
    kind: "shot",
    label: "ku-acoustic-website.vercel.app",
    src: "/previews/ku-acoustic.jpg",
    alt: "The KU Acoustic homepage: the club name set large in a serif face on cream, with a waveform mark to the right",
  },

  "CS-01418351-Project": {
    kind: "terminal",
    label: "kuft.py — powershell",
    hint: "TLS 1.3",
    lines: [
      { kind: "cmd", text: "python kuft.py serve" },
      { kind: "out", text: "  sharing    ...\\CS-01418351\\share" },
      { kind: "out", text: "  listening  0.0.0.0:5150   TLS 1.3" },
      { kind: "hi", text: "  Pairing code   6D66-63UE-L7M6" },
      { kind: "out", text: "" },
      { kind: "cmd", text: "python kuft.py connect 192.168.1.114" },
      { kind: "out", text: "  KUFT/2.0 200 OK — paired" },
      { kind: "out", text: "" },
      { kind: "cmd", text: "kuft /> ls" },
      { kind: "cmd", text: "kuft /> get big.bin" },
      { kind: "cmd", text: "kuft /> put outbox/report.md" },
      { kind: "cmd", text: "kuft /> quit" },
    ],
  },

  "My-Discord-Bot": {
    kind: "commands",
    label: "discord — slash commands",
    hint: "discord.py",
    items: [
      { cmd: "/role", note: "Hand out roles, or mass-assign them" },
      { cmd: "/rolemenu", note: "A dropdown members pick their own roles from" },
      { cmd: "/autorole", note: "Give everyone a role the moment they join" },
      { cmd: "/snipe", note: "Bring back the message someone just deleted" },
      { cmd: "/play", note: "Open a song from a link or a search" },
    ],
  },

  LineBot: {
    kind: "bill",
    label: "LINE · หารบิล",
    hint: "Flex card",
    bill: {
      title: "🧾 ข้าวเย็นหมูกระทะ",
      number: 1,
      paidBy: "25 Aug · 💸 chxnobody จ่ายไปก่อน",
      total: 1200,
      collected: 400,
      shares: [
        { name: "chxnobody", amount: 400, paid: true },
        { name: "Mint", amount: 400, paid: false },
        { name: "Ploy", amount: 400, paid: false },
      ],
    },
  },

  "Anniversary-4-years": {
    kind: "shot",
    label: "chxnobody.github.io/Anniversary-4-years",
    src: "/previews/anniversary.jpg",
    alt: "The anniversary site's opening screen: a pale pink envelope with a red wax seal numbered four, above the line 'four years, sealed with this'",
  },
};
