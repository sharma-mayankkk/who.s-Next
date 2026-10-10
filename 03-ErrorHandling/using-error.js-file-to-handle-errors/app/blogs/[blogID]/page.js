const Blog = async ({ params }) => {
  const { blogID } = await params;
  //adding error manually
  // if (blogID % 2 === 0) {
  //   return 'Blog ID can only be a odd number'
  // }

  const randomNumber = Math.random()
  console.log(randomNumber)

  if (randomNumber > 0.5) throw new Error("Error Occurred")
  return (
    <>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
