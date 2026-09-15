//to run code on client side: 
'use client'
//it uses dynamic server
import Image from "next/image";




export default function Home() {
  console.log("running next.js")
  return (
    <div>
      <h1 onClick={() => console.log("clicked")}>I am batman</h1>
    </div>
  );
}
