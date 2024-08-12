import { Button } from "@/components/ui/button";
import hero from "../img/hero.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 place-items-center md:gap-8 lg:grid-cols-2">
      <div className=" text-center order-2 lg:text-left md:px-10 lg:px-0">
        <h1 className="text-4xl py-5 font-header md:text-4xl lg:text-5xl lg:py-10">
          Seamless Key Generation for a New{" "}
          <span className="inline-block">Era !</span>
        </h1>
        <h3 className="text-l md:text-2xl pt-5 pb-10 text-gray-400 tracking-widest">
          Simplifying Your Journey into{" "}
          <span className="text-secondary"> Web3</span> with Effortless Key
          Management.
        </h3>
        <Link to="/generate">
          <Button
            variant="secondary"
            className="text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200 ease-in-out md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
          >
            Generate Wallet
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center lg:order-2">
        <img
          className="w-[60%] md:w-[50%] lg:w-[70%]"
          src={hero}
          alt="Hero image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
