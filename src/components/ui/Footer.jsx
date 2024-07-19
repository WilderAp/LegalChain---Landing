import rectangle from "../../../public/Rectangle4.png";
import logo from "../../../public/legalLogo.png";

function Footer() {
  return (
    <div
      className="flex flex-col justify-center items-center text-center py-20 gap-5 text-white"
      style={{ backgroundImage: `url(${rectangle})` }}
    >
      <img src={logo} alt="logo" />
      <p>2023 © Legalchain. All Rights Reserved.</p>
    </div>
  );
}
export default Footer;
