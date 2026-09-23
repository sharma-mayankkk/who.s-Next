import Link from "next/link";

export const metadata = {
  title: "About" 
}

export default function about() {
    return (
        <>
            <h1>About page</h1>
            <Link href={"/"}>home</Link>
        </>

    )
}

