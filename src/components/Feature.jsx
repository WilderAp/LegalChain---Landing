import phone from "../../public/phone.png";

function Feature() {
  return (
    <div className="grid py-20 md:grid-cols-2 mx-10 md:mx-0 md:py-0">
      <section className="">
        <img src={phone} alt="logo" />
      </section>

      <section className="flex flex-col justify-center text-[#7E0F84] text-center md:text-start pt-8 md:pt-0">
        <h1 className="text-3xl font-bold pb-8 ">
          Record your videos and convert them to nft!
        </h1>
        <ul className="flex flex-col gap-8 ml-14 md:ml-0">
          <li className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <title>check</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p>Upload to the blockchain</p>
          </li>
          <li className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <title>check</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p>Save your video</p>
          </li>
          <li className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <title>check</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p>Record a video</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Feature;
