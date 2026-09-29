//creating global layout
export default function RootLayout({ children }) {
  return (
      <>
        <header style={{background:"green"}}>Header: Application</header>
        {children}
        <footer style={{background:"orange"}}>Footer: Application</footer>
      </>
  );
}
