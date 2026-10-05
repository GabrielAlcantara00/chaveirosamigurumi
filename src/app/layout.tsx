import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaveiros Amigurumi Pro | Receitas + Curso + Ferramentas",
  description: "Receitas organizadas de chaveiros amigurumi, curso para iniciantes e ferramentas para criar, precificar e vender.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
