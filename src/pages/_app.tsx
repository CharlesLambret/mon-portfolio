import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer/footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col md:flex-row  bg-radial-[at_25%_25%] from-blue-800 to-blue-950 to-75% ">
          <Sidebar />
        <div className="flex-1 w-full md:w-5/6 px-5 flex flex-col text-white">
          <div className="md:hidden my-5 py-5"></div>
            <Component {...pageProps} />
        </div>
      </div>
  );
}
