import { DM_Mono } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./context/DataContext";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import Head from "next/head";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "landinglist.xyz",
  description: "Find awesome landing page templates for your next projects.",
};

export default function RootLayout({ children }) {
  return (
    <DataProvider>
      <html lang="en">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@indieninad" />
          <meta name="twitter:creator" content="@indieninad" />
          <meta
            name="twitter:title"
            content="Find awesome landing page templates"
          />
          <meta
            name="twitter:description"
            content="Find awesome landing page templates for your next projects."
          />
          <meta
            name="twitter:image"
            content="https://landinglist.xyz/nebula.png"
          />
          <meta name="twitter:image:alt" content="Landing page templates" />
        </Head>
        <body className={`${dmMono.className} relative`}>
          <div className="w-full min-h-screen p-5 md:p-10">
            <NavBar />
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </DataProvider>
  );
}
