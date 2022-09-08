import { AppConstant } from "../../../config/constants/app-constants";
import ButtonV1 from "../../../shared/widgets/ButtonV1";
const Navbar = () => {
    return (
        <div className="w-full h-full grid grid-rows-1 grid-cols-8 mt-28">
            <div className="col-span-1"/>
            <div className="col-span-6 flex justify-center sm:justify-between items-center flex-wrap">
                <span className="font-bold text-[36px] text-white custom-font text-[#111527]">{AppConstant.Title}</span>
                <ButtonV1 label='Create Time Table' />
            </div>
            <div className="col-span-2"/>
        </div>
    )
}
export default Navbar;
