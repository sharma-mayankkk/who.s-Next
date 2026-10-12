export const dynamic = 'force-dynamic'

const Home = () => {
  //In build time there is only 50% chances that this page will get build due to this error

  // this is an statically genrated page that means it will either cause or not error while building. after getting build successfully it will not throw any error 
  // const randomNumber = Math.random();
  // console.log(randomNumber);

  // if (randomNumber > 0.5) {
  //   throw new Error("Error occurred");
  // }
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </>
  );
};

export default Home;
