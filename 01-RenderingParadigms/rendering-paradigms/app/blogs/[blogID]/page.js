import next from "next";
import Link from "next/link";


//incremental site generation: // Pages are generated beforehand and updated in the background when needed after the mentioned time period at the time refreshing the page: 
// export const revalidate = 5; //value in seconds

//dynamicParams = false: It tells Next.js to only allow the dynamic routes returned by generateStaticParams(); any other dynamic route returns a 404.
export const dynamicParams = false;


//static site generation: “Pre-building pages at build time, including pages generated from dynamic data.”
export async function generateStaticParams() {
    //hardcoded method to do that 
    // return [
    //     { blogID: '1' },
    //     { blogID: '2' },
    //     { blogID: '3' },
    //     { blogID: '4' },
    //     { blogID: '5' },
    // ]

    //dynamic method by fetching api
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    return data.map(({ id }) => ({ blogID: id.toString() }))
}

const Blogs = async ({ params }) => {
    const { blogID } = await params;
    console.log(blogID);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {next: {revalidate: 5}}) //it is doing the same thing that revalidate variable was doing up there (ISR)
    const data = await response.json();
    
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="nav-link active">
                            Blogs
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1>Welcome to Our Blog {blogID}</h1>
                <h2>Date: {new Date().toLocaleString()}</h2>
                <p>This is blog {blogID} page.</p>
            </div>
        </>
    );
};

export default Blogs;