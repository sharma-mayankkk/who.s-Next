//creating global layout
export default function RootLayout({ children }) {
  return (
      <>
        <header style={{background:"red"}}>Header: Application</header>
        {children}
        <footer style={{background:"green"}}>Footer: Application</footer>
      </>
  );
}
