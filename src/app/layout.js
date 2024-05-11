import "./globals.css";



export const metadata = {
  title: "U2 FoodGram",
  description: "U2 FoodGram Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
