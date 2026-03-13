import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Open_Sans, Roboto_Mono, Anek_Latin, Playfair_Display, Montserrat, Lato, Poppins, Raleway, Merriweather, Nunito, Source_Sans_3, Oswald, Quicksand, Dancing_Script, Pacifico, Comfortaa, Ubuntu, Fira_Code, Inconsolata, Lora, Bitter, Libre_Baskerville, Cabin, Exo_2, Oxygen, Roboto_Slab, Tangerine, Tinos, Volkhov } from 'next/font/google'
import localFont from 'next/font/local'
import {NextIntlClientProvider, useMessages} from 'next-intl';

// Local font files
const dingTalkFont = localFont({
  src: 'fonts/DingTalk JinBuTi.ttf',
  display: 'swap',
  variable: '--font-dingtalk',
})

const kingsoftFont = localFont({
  src: 'fonts/Kingsoft_Cloud_Font.ttf',
  display: 'swap',
  variable: '--font-kingsoft',
})

const xinYiGuanHeiFont = localFont({
  src: 'fonts/ZiTiQuanXinYiGuanHeiTi.ttf',
  display: 'swap',
  variable: '--font-xinyiguanhei',
})

const alibabaFont = localFont({
  src: 'fonts/AlibabaPuHuiTi-3-55-Regular.ttf',
  display: 'swap',
  variable: '--font-alibaba',
})

// Google Fonts - with weight parameter
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
  weight: ['400', '700'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
})

const ankeLatin = Anek_Latin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anke',
  weight: ['400', '700'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '700'],
})

const latto = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '700'],
})

const raleyway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '700'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
  weight: ['400', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['400', '700'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sourcesans',
  weight: ['400', '700'],
})

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['400', '700'],
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
  weight: ['400', '700'],
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',
  weight: ['400'],
})

const pacifico = Pacifico({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
  weight: ['400'],
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
  weight: ['400', '700'],
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: ['400', '700'],
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira',
  weight: ['400', '700'],
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
  weight: ['400', '700'],
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '700'],
})

const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter',
  weight: ['400', '700'],
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre',
  weight: ['400', '700'],
})

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
  weight: ['400', '700'],
})

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
  weight: ['400', '700'],
})

const oxygen = Oxygen({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oxygen',
  weight: ['400', '700'],
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-robotoslab',
  weight: ['400', '700'],
})

const tangerine = Tangerine({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tangerine',
  weight: ['400'],
})

const tinos = Tinos({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tinos',
  weight: ['400', '700'],
})

const volkhov = Volkhov({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-volkhov',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: " PicProse - Better Cover Image Generator Tools",
  description: "PicProse is a better cover image generator tool for Medium, YouTube, BiliBili, Blog and more.",
};

export default function RootLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {

  const messages = useMessages();
  return (
    <html lang="en" className={`${openSans.variable} ${robotoMono.variable} ${ankeLatin.variable} ${dingTalkFont.variable} ${kingsoftFont.variable} ${xinYiGuanHeiFont.variable} ${alibabaFont.variable} ${playfairDisplay.variable} ${montserrat.variable} ${latto.variable} ${poppins.variable} ${raleyway.variable} ${merriweather.variable} ${nunito.variable} ${sourceSans.variable} ${oswald.variable} ${quicksand.variable} ${dancingScript.variable} ${pacifico.variable} ${comfortaa.variable} ${ubuntu.variable} ${firaCode.variable} ${inconsolata.variable} ${lora.variable} ${bitter.variable} ${libreBaskerville.variable} ${cabin.variable} ${exo2.variable} ${oxygen.variable} ${robotoSlab.variable} ${tangerine.variable} ${tinos.variable} ${volkhov.variable} font-sans light`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body>
      <NextIntlClientProvider messages={messages}>
        <Providers>
          {children}
        </Providers>
      </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      <Script defer src="https://us.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID!}></Script>
      
    </html>
  );
}
