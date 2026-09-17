import Link from "next/link";

export default function services() {
  return (
    <>
      <h1>All Services</h1>
      
      <p> 
        {/* Nested routing*/}
        <Link href={"/services/web-dev"}>Web development service</Link>
      </p>
      <p>
        <Link href={"/services/app-dev"}>App development</Link>
      </p>
      <p>
        <Link href={"ui-ux-development"}>Web development</Link>
      </p>
    
      <Link href={"/"}>home</Link>
    </>

  )
}

