import Link from "next/link";

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
                <p>This is blog {blogID} page.</p>
            </div>
        </>
    );
};

export default Blogs;