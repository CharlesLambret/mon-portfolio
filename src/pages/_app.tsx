import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/sidebar/sidebar";
import { ThemeProvider, useTheme } from '../context/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col md:flex-row ${theme.bg}`}>
      <Sidebar />
      <div className={`flex-1 w-full md:w-5/6 px-5 flex flex-col text-${theme.main_color}`}>
        <div className="md:hidden my-5 py-5"></div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}