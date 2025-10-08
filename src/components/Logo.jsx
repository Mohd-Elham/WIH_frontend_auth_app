
import logo from "../assets/logo.png"

function Logo() {
  return (
    <img
      src={logo}
      alt="WorkInHarmony Logo"
      className="absolute top-6 left-6 w-32 md:top-8 md:left-8 md:w-40"
    />
  );
}

export default Logo;
