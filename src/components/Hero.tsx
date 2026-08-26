import Image from "next/image";
import { heroPhoto } from "@/lib/photos";

export default function Hero() {
  return (
    <section id="top">
      <div className="shell pt-10 md:pt-[72px]">
        <p className="font-mono text-eyebrow font-medium text-accent uppercase">
          Photography · Keys · Bangkok
        </p>

        <h1 className="mt-6 max-w-[860px] font-serif text-display-xl text-ink md:mt-8">
          Between lectures, I go{" "}
          <em className="text-accent italic">looking for light.</em>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:mt-[72px] md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-[560px]">
            <p className="font-sans text-body-l text-ink-2 text-pretty">
              I&rsquo;m Pun — a Computer Science student at Kasetsart University.
              The rest of the time I&rsquo;m outside with a phone in my hand,
              photographing streets, coastlines and whatever holds still long
              enough. I also play keys.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#work"
                className="rounded-full bg-ink px-[30px] py-[17px] font-sans text-[15px] font-medium text-on-dark transition-opacity hover:opacity-90"
              >
                See the work
              </a>
              <a
                href="mailto:khaopan.nas@gmail.com"
                className="font-sans text-[15px] font-medium text-ink underline underline-offset-4 transition-colors hover:text-accent"
              >
                khaopan.nas@gmail.com
              </a>
            </div>
          </div>

          <p className="font-mono text-meta text-ink-3 uppercase md:text-right">
            Every frame on this site
            <span className="block text-ink">Samsung Galaxy S23 FE</span>
          </p>
        </div>
      </div>

      <div className="relative mt-10 aspect-[39/46] w-full md:mt-[72px] md:aspect-[24/11]">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
