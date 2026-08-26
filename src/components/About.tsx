import Image from "next/image";
import { portrait } from "@/lib/photos";

const facts = [
  ["University", "Kasetsart University, Bangkok"],
  ["Studying", "Faculty of Science — Computer Science"],
  ["Camera", "Samsung Galaxy S23 FE"],
  ["Also", "Keys with KU Acoustic"],
];

export default function About() {
  return (
    <section id="about" className="shell pt-[88px] md:pt-[152px]">
      <div className="grid gap-6 md:grid-cols-[520fr_824fr] md:items-start md:gap-24">
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-raised">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(min-width: 768px) 37vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-mono text-eyebrow font-medium text-accent uppercase">
            About
          </p>

          <h2 className="mt-4 font-serif text-display-m text-ink md:mt-7">
            The academic half.
          </h2>

          <p className="mt-4 max-w-[62ch] font-sans text-body-l text-ink-2 text-pretty md:mt-7">
            I study Computer Science in the Faculty of Science at Kasetsart
            University in Bangkok. Photography started as something to do between
            classes and turned into the way I pay attention to a place. Most of
            what I build ends up on GitHub — bots, class projects, and the site
            for KU Acoustic.
          </p>

          <dl className="mt-8 md:mt-10">
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col gap-1 border-t border-line-soft py-4 md:flex-row md:items-center md:gap-8"
              >
                <dt className="font-mono text-meta text-ink-3 uppercase md:w-40 md:shrink-0">
                  {label}
                </dt>
                <dd className="font-sans text-body-m text-ink">{value}</dd>
              </div>
            ))}
            <div className="border-t border-line-soft" />
          </dl>
        </div>
      </div>
    </section>
  );
}
