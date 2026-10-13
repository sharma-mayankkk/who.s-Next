export const dynamic = 'force-dynamic'
import './home.css' //it will apply on home page and other pages too but will remove pages other than home after hard relaod

const Home = () => {
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
