import logo from "../../public/legalLogo.png";

function Header() {
  return (
    <div className="bg-white w-100 flex justify-center py-5">
      <img src={logo} alt="logo" />
    </div>
  );
}
export default Header;
