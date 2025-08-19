import Navbar from "@/components/Navbar/Navbar";
import "./global.scss";
import Footer from "@/components/Footer/Footer";
import ShopContextProvider from "@/context/ShopContext";

export const metadata = {
  title: "Ecommerce Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ShopContextProvider>
      </body>
    </html>
  );
}
