import rectangle from "../../public/Rectangle2.png";
import square1 from "../../public/square1.png";
import square2 from "../../public/square2.png";
import square3 from "../../public/square3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tiempo en milisegundos entre cada transición
  };
  return (
    <div
      className="flex justify-center flex-col py-20 mb-0"
      style={{
        backgroundImage: `url(${rectangle})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <span className="text-3xl font-semibold text-white flex">
        <h1 className="mx-auto pb-14">Welcome to LEGALCHAIN</h1>
      </span>
      <section className="md:grid text-center sm:grid-cols-1 md:grid-cols-3 md:text-start hidden">
        <div className="flex flex-col text-white w-[340px] h-[540px] gap-4 mx-auto">
          <img src={square1} alt="house" width={"340px"} />
          <h1 className="font-bold text-xl">Recording the sales contract</h1>
          <p>
            The buyer, seller and real estate agent can record a video detailing
            the terms of the contract, including the sales price, method of
            payment, delivery date and conditions of the property.
          </p>
        </div>
        <div className="flex flex-col text-white w-[340px] h-[540px] gap-4 mx-auto">
          <img src={square2} alt="business" width={"340px"} />
          <h1 className="font-bold text-xl">Contract negotiation</h1>
          <p>
            Parties involved in negotiating a contract can record a video to
            document the terms agreed upon, including the price of products or
            services, payment terms, delivery dates, and warranty clauses.
          </p>
        </div>
        <div className="flex flex-col text-white w-[340px] h-[540px] gap-4 mx-auto">
          <img src={square3} alt="handshake" width={"340px"} />
          <h1 className="font-bold text-xl">Partners agreement</h1>
          <p>
            A legal contract between two or more parties that agree to
            collaborate for mutual benefit. It defines the terms and conditions
            of the partnership, including roles, responsibilities and
            distribution of profits and losses.
          </p>
        </div>
      </section>
      <div className="block sm:hidden px-10">
        <Slider {...settings} className="">
          <div className="flex  text-white text-center  p-5 rounded">
            <img src={square1} alt="house" width={"340px"} />
            <h1 className="font-bold text-xl py-4">
              Recording the sales contract
            </h1>
            <p>
              The buyer, seller and real estate agent can record a video
              detailing the terms of the contract, including the sales price,
              method of payment, delivery date and conditions of the property.
            </p>
          </div>
          <div className="flex  text-white text-center  p-5 rounded">
            <img src={square2} alt="business" width={"340px"} />
            <h1 className="font-bold text-xl py-4">Contract negotiation</h1>
            <p>
              Parties involved in negotiating a contract can record a video to
              document the terms agreed upon, including the price of products or
              services, payment terms, delivery dates, and warranty clauses.
            </p>
          </div>
          <div className="flex  text-white text-center  p-5 rounded">
            <img src={square3} alt="handshake" width={"340px"} />
            <h1 className="font-bold text-xl py-4">Partners agreement</h1>
            <p>
              A legal contract between two or more parties that agree to
              collaborate for mutual benefit. It defines the terms and
              conditions of the partnership, including roles, responsibilities
              and distribution of profits and losses.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default About;
