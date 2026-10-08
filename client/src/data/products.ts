import { photoCredits, type PhotoCredit } from "./photoCredits";

export type CatalogProduct = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  photoCredit: PhotoCredit;
};

export const catalogCategories = [
  "Todos",
  "Acessórios",
  "Carroceria",
  "Elétrica e ignição",
  "Filtros",
  "Freios",
  "Interior e proteção",
  "Lubrificantes",
  "Motor e manutenção",
  "Rodas e pneus",
  "Suspensão e direção",
  "Transmissão",
];

export const partFamilies = [
  { name: "Motor e manutenção", detail: "Componentes e itens de revisão" },
  { name: "Filtros", detail: "Óleo, ar, combustível e cabine" },
  { name: "Freios", detail: "Pastilhas, discos e componentes" },
  { name: "Suspensão e direção", detail: "Amortecedores, braços e direção" },
  { name: "Transmissão", detail: "Câmbio, embreagem e transmissão" },
  { name: "Elétrica e ignição", detail: "Baterias, sensores e iluminação" },
  { name: "Carroceria", detail: "Acabamentos e peças externas" },
  { name: "Interior e proteção", detail: "Tapetes, revestimentos e proteção" },
  { name: "Rodas e pneus", detail: "Rodas, fixadores e acessórios" },
  { name: "Acessórios", detail: "Itens internos e externos" },
  { name: "Lubrificantes", detail: "Óleos e fluidos sob consulta" },
];

// Fotos de referência licenciadas, não anúncios de estoque ou declarações de compatibilidade.
// Cada fotografia está identificada e creditada em photoCredits.ts e no rodapé do site.
export const products: CatalogProduct[] = [
  {
    id: "acessorio-teto-land-cruiser-j60",
    name: "Acessório de teto — Land Cruiser J60",
    category: "Acessórios",
    shortDescription: "Foto real do veículo com uma tenda instalada no teto.",
    description: "A fotografia mostra um Toyota Land Cruiser J60 com uma tenda de teto de terceiro. É uma referência visual da família de acessórios, não um anúncio do item fotografado nem confirmação de estoque, origem Toyota ou compatibilidade. Consulte aplicação, marca, código, valor e disponibilidade antes da compra.",
    image: "/images/toyota-land-cruiser-j60-roof-tent.jpg",
    imageAlt: "Toyota Land Cruiser J60 fotografado de lado, com uma tenda montada no teto.",
    photoCredit: photoCredits.roofAccessory,
  },
  {
    id: "roda-toyota-prius-2004-eua",
    name: "Conjunto de roda — Prius 2004 (EUA)",
    category: "Rodas e pneus",
    shortDescription: "Foto real da roda de um Prius 2004 na versão dos Estados Unidos.",
    description: "A foto registra o conjunto de roda do Toyota Prius 2004 da versão dos Estados Unidos. A descrição original informa que os anéis externos e a calota central são plásticos. A imagem serve apenas como referência: estoque, código e aplicação no Brasil não estão confirmados. Consulte a equipe antes do pedido.",
    image: "/images/toyota-prius-2004-wheel.jpg",
    imageAlt: "Roda montada em um Toyota Prius 2004 da versão dos Estados Unidos.",
    photoCredit: photoCredits.priusWheel,
  },
];
