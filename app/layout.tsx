import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CartProvider } from "@/context/cart/CartContext";
import { ContactsFooter } from "@/components/footer/contacts/ContactsFooter";
import { Header } from "@/components/header/Header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://youtube.com/";
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
        <CartProvider>
          <body className="bg-background text-foreground flex flex-col justify-center">
            <header>
              <Header />
            </header>
            <main className="min-h-screen flex flex-col items-center justify-center">
              {children}
            </main>
            <footer>
              <ContactsFooter />
            </footer>
          </body>
        </CartProvider>
        <GoogleAnalytics gaId="G-5ENK2VSP5J" />
      </head>
    </html>
  );
}
