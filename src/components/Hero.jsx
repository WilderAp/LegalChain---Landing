import logo from "../../public/legalLogo.png";
import backgroundImage from "../../public/Rectangle.png";

function Hero() {
  return (
    <div
      className="grid grid-cols-3 px-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "700px",
      }}
    >
      <div className="flex flex-col col-span-2 items-start justify-center">
        <h1 className="text-3xl text-white font-bold">Welcome to</h1>
        <img src={logo} alt="logo" />
        <span className="text-white w-90 text-start pr-20">
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

      <div className="flex flex-col text-start items-center justify-center gap-4 text-white">
        <span className="">
          <h2 className="font-bold text-xl  mr-28">Get started</h2>
        </span>

        <span>
          <p>Email</p>
          <input
            type="email"
            placeholder="email@email.com"
            className="bg-white input w-full max-w-xs"
          />
        </span>
        <span>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            className="bg-white input w-full max-w-xs"
          />
        </span>
        <span>
          <p>Phone</p>
          <input
            type="text"
            placeholder="+11 11 111 111 111"
            className="bg-white input w-full max-w-xs"
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
