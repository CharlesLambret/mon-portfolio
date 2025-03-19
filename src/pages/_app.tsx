import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/sidebar/sidebar";
import { ThemeProvider, useTheme } from "../context/theme";
import {Nunito, PT_Sans} from 'next/font/google';


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'], // Ajoutez les poids nécessaires
  variable: '--font-nunito',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Ajoutez les poids nécessaires
  variable: '--font-pt-sans',
});
function MyApp({ Component, pageProps, router }: AppProps) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col md:flex-row ${theme.bg} ${nunito.variable} ${ptSans.variable} font-sans`}>
      <Sidebar />
      <div className={`flex-1 w-full md:w-5/6 px-5 flex flex-col ${theme.main_color === 'black' ? 'text-black' : `text-${theme.main_color}`}`}>        <div className="md:hidden my-5 py-5"></div>
        <Component {...pageProps} router={router} />
      </div>
    </div>
  );
}

export default function App(appProps: AppProps) {
  return (
    <ThemeProvider>
      <MyApp {...appProps} />
    </ThemeProvider>
  );
}