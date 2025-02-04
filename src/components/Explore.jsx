import rectangle from "../../public/Rectangle3.png";

const features = [
  {
    title: "Legal validity:",
    paragraph:
      "Videos recorded in Evidencia Legal have the same legal value as a document signed on paper.",
  },
  {
    title: "Time and money saving:",
    paragraph: "Avoid unnecessary travel, appointments and paperwork.",
  },
  {
    title: "Security and protection:",
    paragraph:
      "Your videos are stored in our secure cloud and protected by state-of-the-art encryption.",
  },
  {
    title: "Accessibility:",
    paragraph: "Access your videos from anywhere and at any time.",
  },
  {
    title: "Ease of use: ",
    paragraph:
      "Our platform is intuitive and easy to use, no technical knowledge is required.",
  },
];

function Explore() {
  return (
    <div
      className="flex flex-col justify-center items-center text-center py-20 gap-10 mt-0"
      style={{
        backgroundImage: `url(${rectangle})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-white font-bold text-4xl">Explore LEGALCHAIN</h1>

      <span className="">
        {features.map((feature, index) => (
          <span
            key={index}
            className="text-white flex justify-center gap-2 flex flex-col md:flex-row text-start px-16 md:px-0"
          >
            <p>
              <b>{feature.title}</b> {feature.paragraph}
            </p>
          </span>
        ))}
      </span>

      <button
        type="button"
        className="btn w-100 max-w-xs bg-[#101828] text-white border-none w-[200px]"
      >
        Get started
      </button>
    </div>
  );
}
export default Explore;
