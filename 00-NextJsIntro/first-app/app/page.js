//to run code on client side: 
'use client'

import Link from "next/link";

//it uses dynamic server




export default function Home() {
  console.log("running next.js")
  return (
    <div>
      <h1 onClick={() => console.log("clicked")}>I am batman</h1>

      <Link href={"/about"}>About</Link> {" "} {/* client side routing*/}
      <Link href={"/services"}>services</Link>
    </div>
  );
}
