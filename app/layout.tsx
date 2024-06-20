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
  title: "Su Movies",
  description: "",
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
          <body className="min-h-screen bg-background text-foreground flex flex-col justify-between  ">
            <main className="min-h-screen flex items-center justify-center">
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
