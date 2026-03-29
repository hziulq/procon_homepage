import Header from "../ui/Header";
import Footer from "../ui/Footer";
import NavigationBar from "../ui/NavigationBar";

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
