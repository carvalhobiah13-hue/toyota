import type { CatalogProduct } from "../data/products";

/** Número público da loja, configurado no ambiente de build (ex.: 55 + DDD + número, só dígitos). */
export const STORE_WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

export type ContactTopic = "produto" | "parcelas" | "quitacao" | "atendimento";

const topicText: Record<ContactTopic, string> = {
  produto: "consultar um produto",
  parcelas: "consultar opções de parcelas para uma compra",
  quitacao: "consultar valor e condições de quitação",
  atendimento: "falar com a equipe sobre peças e acessórios",
};

export function buildWhatsAppUrl(topic: ContactTopic, product?: CatalogProduct, category?: string): string | null {
  const number = STORE_WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(number)) return null;

  const lines = [
    "Olá! Vim pelo site de peças e acessórios para Toyota.",
    `Quero ${topicText[topic]}.`,
    ...(product ? [`Item/foto de referência: ${product.name}.`] : []),
    ...(category ? [`Família de peça: ${category}.`] : []),
    "Meu veículo é: modelo, ano e versão a confirmar.",
    "Por favor, orientem-me sobre aplicação, valor, disponibilidade e próximos passos.",
    "Não enviarei documentos ou dados de pagamento por este link.",
  ];
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
