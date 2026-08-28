import Image from "next/image";
import type { Preview } from "@/lib/previews";

/**
 * Shared chrome for every preview, so a screenshot, a terminal and a chat card
 * all read as "a screen" in the same way down the list.
 */
function Frame({
  label,
  hint,
  bleed = false,
  children,
}: {
  label: string;
  hint?: string;
  /** Screenshots fill the frame edge to edge; text previews get padding. */
  bleed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden bg-ink">
      <div className="flex items-center justify-between gap-4 border-b border-on-dark/12 px-4 py-2.5">
        <span className="truncate font-mono text-meta text-on-dark/55 uppercase">
          {label}
        </span>
        {hint ? (
          <span className="shrink-0 font-mono text-meta text-on-dark/35 uppercase">
            {hint}
          </span>
        ) : null}
      </div>
      <div className={bleed ? "" : "p-4 md:p-5"}>{children}</div>
    </div>
  );
}

function Terminal({ lines }: { lines: { kind: string; text: string }[] }) {
  return (
    <pre className="overflow-x-auto font-mono text-[0.6875rem] leading-[1.75] text-on-dark/70">
      {lines.map((line, i) => (
        <span
          key={i}
          className={
            line.kind === "cmd"
              ? "block text-accent-bright"
              : line.kind === "hi"
                ? "block text-on-dark"
                : "block"
          }
        >
          {line.text || " "}
        </span>
      ))}
    </pre>
  );
}

function Commands({ items }: { items: { cmd: string; note: string }[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item.cmd} className="flex flex-col gap-0.5">
          <code className="font-mono text-[0.75rem] text-accent-bright">
            {item.cmd}
          </code>
          <span className="font-sans text-[0.75rem] leading-snug text-on-dark/55">
            {item.note}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** A plain-HTML stand-in for the LINE Flex card the bot actually posts. */
function Bill({ bill }: { bill: Extract<Preview, { kind: "bill" }>["bill"] }) {
  const pct = Math.round((bill.collected / bill.total) * 100);

  return (
    <div className="bg-on-dark p-4 font-sans">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[0.8125rem] font-medium text-ink">{bill.title}</span>
        <span className="font-mono text-meta text-ink-3">#{bill.number}</span>
      </div>
      <p className="mt-0.5 text-[0.6875rem] text-ink-3">{bill.paidBy}</p>

      <div className="mt-3 border-t border-line-soft pt-3 text-center">
        <p className="font-mono text-meta text-ink-3 uppercase">ยอดรวม / Total</p>
        <p className="mt-1 font-serif text-[1.5rem] leading-none text-ink">
          {bill.total.toLocaleString()} บาท
        </p>
        <div
          className="mt-2.5 h-1.5 w-full bg-line-soft"
          role="img"
          aria-label={`เก็บได้ ${bill.collected} จาก ${bill.total} บาท`}
        >
          <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-1.5 text-[0.6875rem] text-ink-2">
          เก็บได้ {bill.collected} · ค้างอีก {bill.total - bill.collected} บาท
        </p>
      </div>

      <ul className="mt-3 flex flex-col gap-1.5 border-t border-line-soft pt-3">
        {bill.shares.map((share, i) => (
          <li
            key={share.name}
            className="flex items-center justify-between gap-3 text-[0.75rem]"
          >
            <span className="text-ink-2">
              {i + 1}. {share.name}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-ink">
              {share.amount} บาท
              <span aria-label={share.paid ? "จ่ายแล้ว" : "ค้างอยู่"}>
                {share.paid ? "✅" : "🕐"}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 grid grid-cols-2 gap-2 border-t border-line-soft pt-3">
        <span className="bg-raised py-1.5 text-center font-mono text-meta text-ink-2 uppercase">
          จ่ายแล้ว 💗
        </span>
        <span className="bg-raised py-1.5 text-center font-mono text-meta text-ink-2 uppercase">
          ทวง 🔔
        </span>
      </div>
    </div>
  );
}

export default function ProjectPreview({ preview }: { preview: Preview }) {
  if (preview.kind === "shot") {
    return (
      <Frame label={preview.label} hint="Live" bleed>
        <div className="relative w-full" style={{ aspectRatio: "1280 / 607" }}>
          <Image
            src={preview.src}
            alt={preview.alt}
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
      </Frame>
    );
  }

  if (preview.kind === "terminal") {
    return (
      <Frame label={preview.label} hint={preview.hint}>
        <Terminal lines={preview.lines} />
      </Frame>
    );
  }

  if (preview.kind === "commands") {
    return (
      <Frame label={preview.label} hint={preview.hint}>
        <Commands items={preview.items} />
      </Frame>
    );
  }

  return (
    <Frame label={preview.label} hint={preview.hint}>
      <Bill bill={preview.bill} />
    </Frame>
  );
}
