import Image from "next/image";
import { keysPhoto } from "@/lib/photos";

export default function Keys() {
  return (
    <section id="keys" className="mt-[88px] bg-ink md:mt-[152px]">
      <div className="md:grid md:grid-cols-[760fr_680fr]">
        <div className="relative aspect-[39/34] md:aspect-auto md:min-h-[640px]">
          <Image
            src={keysPhoto.src}
            alt={keysPhoto.alt}
            fill
            sizes="(min-width: 768px) 53vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-10 md:px-20 md:py-[72px]">
          <p className="font-mono text-eyebrow font-medium text-accent-bright uppercase">
            The other half
          </p>

          <h2 className="mt-4 font-serif text-display-m text-on-dark md:mt-7">
            I play keys, too.
          </h2>

          <p className="mt-4 max-w-[46ch] font-sans text-body-l text-on-dark/72 text-pretty md:mt-7">
            Same instinct as the camera: you get one take, and you spend the whole
            of it listening for the moment it lands. Photography is the quiet
            version of it.
          </p>

          <p className="mt-4 font-mono text-meta font-medium text-on-dark uppercase md:mt-7">
            KU Acoustic · Kasetsart University
          </p>

          <a
            href="https://ku-acoustic-website.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="mt-3 font-mono text-meta text-accent-bright uppercase underline underline-offset-4"
          >
            I built the club&rsquo;s site too ↗
          </a>
        </div>
      </div>
    </section>
  );
}
