import logo from "../../public/legalLogo.png";
import backgroundImage from "../../public/Rectangle.png";

function Hero() {
  return (
    <div
      className=" justify-center px-10 md:grid md:grid-cols-3 md:px-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "700px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col col-span-2 items-start justify-center py-10">
        <figure className="mx-auto md:mx-0">
          <h1 className="text-3xl text-white font-bold">Welcome to</h1>
          <img src={logo} alt="logo" />
        </figure>
        <span className="text-white w-90 text-center md:text-start md:pr-20">
          <p className="py-4">
            We are an innovative platform that allows you to record videos with
            legal value, giving you the security and peace of mind of having
            irrefutable evidence in case of any dispute or disagreement.
          </p>
          <p>
            You can formalize agreements, contracts and other important
            documents quickly, easily and securely from anywhere and at any
            time.
          </p>
        </span>
      </div>

      <div className="flex flex-col text-start items-center justify-center gap-4 text-black py-10 border-2 border-black-200  bg-white rounded-lg md:rounded-0 md:bg-transparent md:text-white md:py-0 md:border-0">
        <span className="">
          <h2 className="font-bold text-xl  md:mr-28">Get started</h2>
        </span>

        <span>
          <p>Email</p>
          <input
            type="email"
            placeholder="email@email.com"
            className="md:bg-white input w-full max-w-xs bg-gray-100"
          />
        </span>
        <span>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            className="md:bg-white input w-full max-w-xs bg-gray-100"
          />
        </span>
        <span>
          <p>Phone</p>
          <input
            type="text"
            placeholder="+11 11 111 111 111"
            className="md:bg-white input w-full max-w-xs bg-gray-100"
          />
        </span>

        <button
          type="button"
          className="bg-[#101828] rounded-lg btn text-white border-none w-[220px]"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
export default Hero;
