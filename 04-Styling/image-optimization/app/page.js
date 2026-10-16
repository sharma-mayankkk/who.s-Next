'use client'
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>
        {/* <img
          src="/the-batman.jpg"
          alt="Batman"
          style={{ width: "400px", height: "300px" }}
        /> */}

        <Image src="/the-batman.jpg"
          width={400}
          height={300}
          alt="bat-gone"
        // quality={75}
        // unoptimized //it will make the picture normal
        />

        <Image src="https://wallpapercave.com/wp/wp7379373.jpg"
          // loader={(props)=>{

          // }}
          width={400}
          height={300}
          alt="bat-gone"
          quality={75}
        />
      </div>

    </>
  );
};

export default Home;
