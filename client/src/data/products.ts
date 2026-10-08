export type CatalogProduct = {
  id: string;
  name: string;
  reference: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  models: string[];
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

export const catalogModels = ["Corolla", "Corolla Cross", "Hilux", "RAV4"];

// Itens, referências e aplicações abaixo são exemplos demonstrativos, não estoque ativo nem peças verificadas.
// As imagens principais são ilustrativas; SVGs locais próprios servem de fallback fora do armazenamento gerenciado.
export const products: CatalogProduct[] = [
  {
    id: "bagageiro-teto",
    name: "Bagageiro de teto",
    reference: "RP-001",
    category: "Acessórios",
    shortDescription: "Mais espaço para levar o que importa.",
    description: "Acessório de teto apresentado como referência visual. Confirme compatibilidade, tipo de fixação, modelo e ano do veículo antes da compra.",
    image: "/images/fallback-bagageiro.svg",
    fallbackImage: "/images/fallback-bagageiro.svg",
    imageAlt: "Bagageiro de teto ilustrativo; a aplicação requer confirmação",
    models: ["Corolla Cross", "Hilux", "RAV4"],
  },
  {
    id: "roda-liga-leve",
    name: "Roda de liga leve",
    reference: "RP-002",
    category: "Rodas e pneus",
    shortDescription: "Consulte medidas e acabamento para seu veículo.",
    description: "Imagem ilustrativa de uma roda de liga leve. Furação, largura, offset, diâmetro e aplicação variam conforme modelo e versão; a equipe deve confirmar todos os dados antes do pedido.",
    image: "/images/fallback-roda.svg",
    fallbackImage: "/images/fallback-roda.svg",
    imageAlt: "Roda automotiva de liga leve ilustrativa",
    models: ["Corolla", "Corolla Cross", "RAV4"],
  },
  {
    id: "tapete-porta-malas",
    name: "Tapete de porta-malas",
    reference: "RP-003",
    category: "Interior e proteção",
    shortDescription: "Proteção prática para a área de carga.",
    description: "Tapete de porta-malas apresentado como referência. O formato e os pontos de encaixe dependem do ano, versão e configuração do veículo; confirme a aplicação antes da compra.",
    image: "/images/fallback-tapete.svg",
    fallbackImage: "/images/fallback-tapete.svg",
    imageAlt: "Tapete de porta-malas ilustrativo",
    models: ["Corolla Cross", "Hilux", "RAV4"],
  },
];
