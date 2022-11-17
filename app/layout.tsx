import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
