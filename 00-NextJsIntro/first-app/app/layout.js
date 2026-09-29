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
        {children}
      </body>
    </html>
  );
}
