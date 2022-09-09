import { AppConstant } from "../../../config/constants/app-constants";
const Navbar = (props) => {

    return (
        <div className="w-full h-full flex justify-center items-center mt-28">
            <div className="col-span-6 flex justify-center sm:justify-between items-center flex-wrap">
                <span className="font-bold text-[36px] custom-font text-[#111527]">{AppConstant.Title}</span>
            </div>
            <div className="col-span-2" />
        </div>
    )
}
export default Navbar;
