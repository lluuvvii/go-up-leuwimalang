"use client"

import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from "react-query";
import Provider from "./(DashboardLayout)/components/Provider";

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={baselightTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
