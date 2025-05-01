import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Roboto_Slab, Lemonada } from 'next/font/google'
import I18nProvider from "./components/I18nProvider/I18nProvider";
import LanguageLoader from "./components/LanguageLoader/LanguageLoader";
import WhatsappButtonFloat from "./components/WhatsappButtonFloat/WhatsappButtonFloat";

export const metadata: Metadata = {
	title:'iWeb | Diseño y desarrollo de web y software a medida',
	description: 'Creamos sitios web, sistemas de gestión y soluciones digitales adaptadas a cada negocio.',
	keywords:'diseño web, desarrollo web, sistemas de gestión, ecommerce, landing page, SEO',
}

const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const lemonada = Lemonada({
  subsets: ['latin'],
  variable: '--font-lemonada'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${roboto.variable} ${lemonada.variable} antialiased`}>
        <I18nProvider>
          <LanguageLoader> 
            <NavBar />
            {children}
            <WhatsappButtonFloat />
            <Footer />
          </LanguageLoader>
        </I18nProvider>
      </body>
    </html>
  );
}


