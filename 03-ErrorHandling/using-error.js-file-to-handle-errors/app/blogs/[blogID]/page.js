const Blog = async ({ params }) => {
  const { blogID } = await params;
  //adding error manually
  // if (blogID % 2 === 0) {
  //   return 'Blog ID can only be a odd number'
  // }

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
