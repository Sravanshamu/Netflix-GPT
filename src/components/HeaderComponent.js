import { LOGO } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className=" absolute mx-10 bg-gradient-to-b from-black z-10">
      <img className="w-48" src={LOGO} alt="Logo" />
    </div>
  );
};

export default HeaderComponent;
