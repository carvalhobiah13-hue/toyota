export type PhotoCredit = {
  title: string;
  author: string;
  authorUrl: string;
  sourceUrl: string;
  licenseLabel: string;
  licenseUrl: string;
  additionalLicenseLabel?: string;
  additionalLicenseUrl?: string;
};

export const photoCredits: { hero: PhotoCredit; roofAccessory: PhotoCredit; priusWheel: PhotoCredit } = {
  hero: {
    title: "Toyota Hilux D-4D com tendas no teto — Hardap, Namíbia (2007)",
    author: "Hans Hillewaert",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Biopics",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Toyota_hilux_with_roof_tents.jpg",
    licenseLabel: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    additionalLicenseLabel: "CC BY-SA 4.0 (linha de atribuição da página Commons)",
    additionalLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  roofAccessory: {
    title: "Toyota Land Cruiser J60 com tenda no teto",
    author: "Pittigrilli",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Pittigrilli",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Side_view_of_Toyota_Land_Cruiser_J60_with_roof_tent.jpg",
    licenseLabel: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  priusWheel: {
    title: "Roda do Toyota Prius 2004 — versão dos Estados Unidos",
    author: "Kowloonese",
    authorUrl: "https://en.wikipedia.org/wiki/User:Kowloonese",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Prius2004Wheel.JPG",
    licenseLabel: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
};
