import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "#3333",
          }}
        >
          Header
        </header>
        {children}
        <footer
          style={{
            background: "#7777",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
