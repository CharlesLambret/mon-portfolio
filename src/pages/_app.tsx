import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer/footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex bg-radial-[at_25%_25%] from-blue-800 to-blue-950 to-75% ">
          <Sidebar />
        <div className="flex-1 w-5/6 px-5 flex flex-col text-white">
            <Component {...pageProps} />
        </div>
      </div>
  );
}
