export const offer = {
  brand: "Chaveiros Amigurumi Pro",
  guaranteeDays: 7,
  starter: {
    name: "Starter",
    price: 10,
    checkout: "",
    recipes: 30,
  },
  premium: {
    name: "Premium Completo",
    price: 29.9,
    checkout: "https://pay.cakto.com.br/5nhuoku_931053",
    recipes: 160,
  },
};

export const money = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function checkoutUrl(base: string) {
  if (!base) return "#planos";
  if (typeof window === "undefined") return base;
  const url = new URL(base);
  const params = new URLSearchParams(window.location.search);
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid"].forEach((key) => {
    const value = params.get(key);
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}
