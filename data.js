export const projects = [
  {
    id: "p1",
    title: "Project One",
    date: "2024",
    type: "Web Design",
    client: "Client A",
    coverMedia: "https://picsum.photos/seed/p1/1200/800",
    galleryMedia: [
      { kind: "image", src: "https://picsum.photos/seed/p1a/1400/900" },
      { kind: "image", src: "https://picsum.photos/seed/p1b/1400/900" }
    ],
    description: "Short description of the project. Concept, execution and outcome.",
    details: ["Responsive system", "Design system", "Performance focused"]
  },
  {
    id: "p2",
    title: "Project Two",
    date: "2023",
    type: "Branding",
    client: "Client B",
    coverMedia: "https://picsum.photos/seed/p2/1200/800",
    galleryMedia: [
      { kind: "image", src: "https://picsum.photos/seed/p2a/1400/900" },
      {
        kind: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "https://picsum.photos/seed/p2poster/1400/900"
      }
    ],
    description: "Brand identity system and brand strategy.",
    details: ["Logo system", "Typography guidelines"]
  },
  {
    id: "p3",
    title: "Project Three",
    date: "2023",
    type: "UI/UX",
    client: "Client C",
    coverMedia: "https://picsum.photos/seed/p3/1200/800",
    galleryMedia: [
      { kind: "image", src: "https://picsum.photos/seed/p3a/1400/900" }
    ],
    description: "UX research and product redesign.",
    details: []
  },
  {
    id: "p4",
    title: "Project Four",
    date: "2022",
    type: "Motion",
    client: "Client D",
    coverMedia: "https://picsum.photos/seed/p4/1200/800",
    galleryMedia: [
      {
        kind: "video",
        src: "https://www.w3schools.com/html/movie.mp4",
        poster: "https://picsum.photos/seed/p4poster/1400/900"
      }
    ],
    description: "Motion design campaign.",
    details: ["After Effects", "Social cutdowns"]
  },
  {
    id: "p5",
    title: "Project Five",
    date: "2022",
    type: "Visual Identity",
    client: "Client E",
    coverMedia: "https://picsum.photos/seed/p5/1200/800",
    galleryMedia: [
      { kind: "image", src: "https://picsum.photos/seed/p5a/1400/900" }
    ],
    description: "Visual identity and brand toolkit.",
    details: []
  },
  {
    id: "p6",
    title: "Project Six",
    date: "2021",
    type: "Creative Coding",
    client: "Client F",
    coverMedia: "https://picsum.photos/seed/p6/1200/800",
    galleryMedia: [
      { kind: "image", src: "https://picsum.photos/seed/p6a/1400/900" }
    ],
    description: "Interactive creative coding installation.",
    details: ["WebGL", "Generative visuals"]
  }
];
