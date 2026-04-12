import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import NavigationBar from "../../components/ui/NavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header title={process.env.TITLE || ""} heroImage={process.env.HEROIMAGE || null} />
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
