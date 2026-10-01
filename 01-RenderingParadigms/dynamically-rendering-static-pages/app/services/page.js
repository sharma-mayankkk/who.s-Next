import { cookies } from "next/headers";
import Link from "next/link";

//forcefully rendering dynamically a static page
// export const dynamic = 'force-dynamic' //method -1
// export const dynamic = 'auto';// Next.js decides automatically: static or dynamic

// export const dynamic = 'force-static'; // Force this page to be static

// export const dynamic = 'error';// Keep it static; give an error if dynamic features are used

const Services = async ({ searchParams }) => {
    // const search = await searchParams; //method 2
    // console.log(search)

    const myCookies = await cookies()
    console.log(myCookies)
    console.log('Running Services Components')
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
                        <Link href="/services" className="nav-link active">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="nav-link">
                            Blogs
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1>Our Services</h1>
                <ul className="services-list">
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Consulting Services</li>
                    <li>Digital Marketing</li>
                </ul>
            </div>
        </>
    );
};

export default Services;