import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
  const { blogID } = await params
  return {
    title: `Blog ${blogID}`
  }
}

//dynamic routing
async function blog1({ params }) {
  const { blogID } = await params
  if (!/^\d+$/.test(blogID)){
    notFound();
  }
  return (
    <div>Blog {blogID}</div>
  )
}

export default blog1