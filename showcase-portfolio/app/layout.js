import Header from "./Components/Header/Header";
import "./globals.css";


export const metadata = {
  title: "Ouassila's Portfolio",
  description: "Showcase webdesign portfolio van Ouassila",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
