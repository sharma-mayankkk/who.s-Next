//adding metadata
export const metadata = {
  title: {
    template: "%s | Technical agency",
    default: "Technical agency"
  },

  description: 'I am vengence'
}

//creating global layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{background:"teal"}}>Header</header>
        {children}
        <footer style={{background:"yellow"}}>Footer</footer>
      </body>
    </html>
  );
}
