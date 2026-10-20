import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PCzão · Painel da loja",
  description: "Vendas, pedidos e estoque da loja PCzão",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${plex.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
