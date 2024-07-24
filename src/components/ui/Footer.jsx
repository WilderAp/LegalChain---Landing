import rectangle from "../../../public/Rectangle4.png";
import logo from "../../../public/legalLogo.png";
import SocialButtons from "./Socials";

function Footer() {
  return (
    <div
      className="flex flex-col justify-center items-center text-center py-20 gap-5 text-white"
      style={{
        backgroundImage: `url(${rectangle})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img src={logo} alt="logo" />
      <SocialButtons />
      <p>2023 © Legalchain. All Rights Reserved.</p>
    </div>
  );
}
export default Footer;
