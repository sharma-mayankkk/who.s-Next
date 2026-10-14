import styles from './blogId.module.css' //now it will override the whole website css and apply on everything

const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log(styles)
  return (
    <>
      <div>
        <h1 className={styles.titlee}>Welcome to Our Blog {blogID}</h1>
        <p className={styles.titlee}>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
