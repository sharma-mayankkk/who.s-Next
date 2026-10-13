import './blogId.css' //now it will override the whole website css and apply on everything

const Blog = async ({ params }) => {
  const { blogID } = await params;

  const randomNumber = Math.random();
  console.log(randomNumber);
  
  if (randomNumber > 0.5) {
    throw new Error("Error occurred");
  }

  return (
    <>
      <div className='blogId'>
        <h1 className='title'>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
