import Link from "next/link";

const Home = () => {
  return(
    <div>
      <h2 className="mt-4 ml-4">
        <a className="btn rounded-md bg-teal-600 text-white" href="/products/">Products</a>
      </h2>
    </div>
  );

};

export default Home;
