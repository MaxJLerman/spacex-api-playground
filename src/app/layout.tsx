import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/styles/ThemeProvider";
import { Nabvar } from "@/components/Navbar/Nabvar";
import StoreProvider from "@/redux/provider/StoreProvider";
import { fetchAllCrewData, fetchCompanyInfo } from "@/api/api";
import { GridBackground } from "@/elements/GridBackground/GridBackground";

const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SpaceX API",
  description: "Playground area featuring SpaceX API calls",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const crewDataResponse = await fetchAllCrewData();
  const companyInfoResponse = await fetchCompanyInfo();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"dark"}
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider
            crewData={crewDataResponse.data}
            companyInfo={companyInfoResponse.data}
          >
            <Nabvar />
            <main>
              <section
                className={
                  "flex flex-1 min-h-screen flex-col items-center px-6"
                }
              >
                <GridBackground>{children}</GridBackground>
              </section>
            </main>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
