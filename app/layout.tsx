import Header from "./components/Header";
import Footer from "./components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, backgroundColor: "#101218", color: "#cdcdcd" }}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
