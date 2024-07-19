import rectangle from "../../public/Rectangle2.png";
import square1 from "../../public/square1.png";
import square2 from "../../public/square2.png";
import square3 from "../../public/square3.png";

function About() {
  return (
    <div
      className="flex justify-center flex-col"
      style={{ backgroundImage: `url(${rectangle})` }}
    >
      <span className="text-3xl font-semibold text-white flex py-20">
        <h1 className="mx-auto">Welcome to LEGALCHAIN</h1>
      </span>
      <section className="grid grid-cols-3">
        <div className="flex flex-col text-white w-[340px] gap-4 mx-auto">
          <img src={square1} alt="house" width={"340px"} />
          <h1 className="font-bold text-xl">Recording the sales contract</h1>
          <p>
            The buyer, seller and real estate agent can record a video detailing
            the terms of the contract, including the sales price, method of
            payment, delivery date and conditions of the property.
          </p>
        </div>
        <div className="flex flex-col text-white w-[340px] gap-4 mx-auto">
          <img src={square2} alt="business" width={"340px"} />
          <h1 className="font-bold text-xl">Contract negotiation</h1>
          <p>
            Parties involved in negotiating a contract can record a video to
            document the terms agreed upon, including the price of products or
            services, payment terms, delivery dates, and warranty clauses.
          </p>
        </div>
        <div className="flex flex-col text-white w-[340px] gap-4 mx-auto">
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
    </div>
  );
}
export default About;
