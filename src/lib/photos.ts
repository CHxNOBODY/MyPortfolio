export type Photo = {
  src: string;
  alt: string;
  index: string;
  title: string;
  /** TODO: `town` and `light` still need a location — Pun hasn't confirmed these two. */
  place?: string;
  /** Tailwind aspect ratio for the crop, matching the Figma frames. */
  ratio: string;
  /** Optional CSS object-position when a centred crop loses the subject. */
  position?: string;
};

export const photos: Photo[] = [
  {
    src: "/photos/flamingo.jpg",
    alt: "A flamingo standing in shallow pink-lit water against a hot pink wall",
    index: "01",
    title: "Flamingo, pink wall",
    place: "Hua Hin",
    ratio: "3 / 4",
  },
  {
    src: "/photos/parrot.jpg",
    alt: "A sun conure parrot perched on a branch behind aviary mesh",
    index: "02",
    title: "Parrot",
    place: "Zoo at Hua Hin",
    ratio: "3 / 4",
  },
  {
    src: "/photos/town.jpg",
    alt: "A white archway with stained glass against a pale blue sky, terracotta roofs below",
    index: "03",
    title: "Archway",
    ratio: "16 / 7",
  },
  {
    src: "/photos/siam.jpg",
    alt: "A pedestrian crossing at Siam Square, Bangkok, with shopfronts and cloudy sky",
    index: "04",
    title: "Siam Square",
    place: "Bangkok",
    ratio: "13 / 15",
  },
  {
    src: "/photos/light.jpg",
    alt: "Copper pendant lamps hanging in a bright minimal interior",
    index: "05",
    title: "Pendants",
    ratio: "17 / 20",
  },
  {
    src: "/photos/sea.jpg",
    alt: "A calm overcast sea meeting the sand at Hua Hin",
    index: "06",
    title: "The sea",
    place: "Hua Hin",
    ratio: "31 / 20",
    // A centred crop of this tall frame is pure sky — bias down to the waterline.
    position: "center 78%",
  },
];

export function caption(photo: Photo) {
  const name = photo.place ? `${photo.title} · ${photo.place}` : photo.title;
  return `${photo.index} — ${name}`;
}

export const heroPhoto = {
  src: "/photos/eveningsea.jpg",
  alt: "The sun setting low over the sea, gold light reflected on wet sand",
};

export const keysPhoto = {
  src: "/photos/keyboard-concert.jpg",
  alt: "Playing a Roland keyboard on stage under blue and cyan concert lighting",
};

export const portrait = {
  src: "/photos/me.jpg",
  alt: "Khaopun standing at a table with a keyboard in a bright studio space",
};
