import { LOGO } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className=" absolute bg-gradient-to-b from-black z-10 w-full">
      <div className="mx-20">
        <div className="px-10 py-3">
          <img className="w-48" src={LOGO} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
