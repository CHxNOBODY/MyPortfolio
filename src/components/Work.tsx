import Image from "next/image";
import { caption, photos, type Photo } from "@/lib/photos";

function Figure({
  photo,
  sizes,
  className = "",
}: {
  photo: Photo;
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="relative w-full overflow-hidden bg-raised"
        style={{ aspectRatio: photo.ratio }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          style={photo.position ? { objectPosition: photo.position } : undefined}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 font-mono text-meta text-ink-3 uppercase">
        {caption(photo)}
      </figcaption>
    </figure>
  );
}

export default function Work() {
  const [flamingo, parrot, town, siam, light, sea] = photos;
  const half = "(min-width: 768px) 45vw, 100vw";
  const full = "(min-width: 1440px) 1328px, 100vw";
  const third = "(min-width: 768px) 34vw, 100vw";

  return (
    <section id="work" className="shell pt-[88px] md:pt-[152px]">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-10">
        <h2 className="font-serif text-display-m text-ink">Selected frames.</h2>
        <p className="font-mono text-meta font-medium text-ink-3 uppercase md:text-right">
          Shot on a phone, mostly walking
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8 md:mt-16 md:gap-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <Figure photo={flamingo} sizes={half} />
          <Figure photo={parrot} sizes={half} />
        </div>

        <Figure photo={town} sizes={full} />

        <div className="grid gap-8 md:grid-cols-[812fr_476fr] md:gap-10">
          <Figure photo={siam} sizes="(min-width: 768px) 56vw, 100vw" />
          <div className="flex flex-col gap-8 md:gap-10">
            <Figure photo={light} sizes={third} />
            <Figure photo={sea} sizes={third} />
          </div>
        </div>
      </div>
    </section>
  );
}
