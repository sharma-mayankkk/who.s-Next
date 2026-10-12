import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";
export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {

//if we produce same error in layout it will not get handled by the gloabal error.js page  
  const randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber > 0.5) {
    throw new Error("Error occurred");
  }
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
