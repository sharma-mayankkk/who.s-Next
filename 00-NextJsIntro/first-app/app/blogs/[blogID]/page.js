//dynamic routing
async function blog1({ params }) {
  const { blogID } = await params
  return (
    <div>Blog {blogID}</div>
  )
}

export default blog1