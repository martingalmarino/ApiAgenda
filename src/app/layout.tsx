import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ApiAgenda - Calendario y Alertas para Apicultores Argentinos",
  description: "Organiza tu temporada apícola con alertas personalizadas. Recibe recordatorios para tratamientos, floraciones y eventos climáticos específicos de tu provincia en Argentina.",
  keywords: [
    "apicultura",
    "abejas",
    "calendario apícola",
    "Argentina",
    "alertas",
    "tratamientos",
    "floración",
    "clima",
    "apicultores",
    "colmenas"
  ],
  authors: [{ name: "ApiAgenda" }],
  creator: "ApiAgenda",
  publisher: "ApiAgenda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://apiagenda.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ApiAgenda - Calendario y Alertas para Apicultores Argentinos",
    description: "Organiza tu temporada apícola con alertas personalizadas. Recibe recordatorios para tratamientos, floraciones y eventos climáticos específicos de tu provincia en Argentina.",
    url: "https://apiagenda.com",
    siteName: "ApiAgenda",
    images: [
      {
        url: "/og-image.jpg", // TODO: Add actual OG image
        width: 1200,
        height: 630,
        alt: "ApiAgenda - Calendario y Alertas para Apicultores Argentinos",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApiAgenda - Calendario y Alertas para Apicultores Argentinos",
    description: "Organiza tu temporada apícola con alertas personalizadas. Recibe recordatorios para tratamientos, floraciones y eventos climáticos específicos de tu provincia en Argentina.",
    images: ["/og-image.jpg"], // TODO: Add actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Add Google Search Console verification
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
