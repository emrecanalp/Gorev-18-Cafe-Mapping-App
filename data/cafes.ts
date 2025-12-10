export interface Cafe {
  id: string;
  name: string;
  description: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  image: string;
}

export const cafes: Cafe[] = [
  {
    id: "1",
    name: "Kronotrop Coffee",
    description: "Specialty coffee ve modern atmosfer ile İstanbul'un en iyi kahvecilerinden.",
    coordinate: {
      latitude: 41.0082,
      longitude: 28.9784,
    },
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
  },
  {
    id: "2",
    name: "Petra Roasting Co.",
    description: "Kendi kavurduğu kahveler ve minimalist tasarımıyla öne çıkan mekan.",
    coordinate: {
      latitude: 41.0122,
      longitude: 28.9760,
    },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
  },
  {
    id: "3",
    name: "Coffee Department",
    description: "Geniş menüsü ve rahat ortamıyla çalışmak için ideal bir cafe.",
    coordinate: {
      latitude: 41.0052,
      longitude: 28.9744,
    },
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400",
  },
  {
    id: "4",
    name: "Montag Coffee",
    description: "Sakin atmosferi ve kaliteli kahvesiyle haftanın her günü uğranılacak yer.",
    coordinate: {
      latitude: 41.0102,
      longitude: 28.9820,
    },
    image: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=400",
  },
  {
    id: "5",
    name: "Cup of Joy",
    description: "Tatlıları ve sıcak ortamıyla misafirperverliğin adresi.",
    coordinate: {
      latitude: 41.0070,
      longitude: 28.9700,
    },
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400",
  },
];