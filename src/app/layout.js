import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Construction Company",
  description: "Best construction company in Bangalore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

 
