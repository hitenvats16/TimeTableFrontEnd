import { Link } from "react-router-dom";
import ButtonV2 from "../../../shared/widgets/ButtonV2";

const LandingPage = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <p className="text-5xl font-semibold custom-font ">Automatic Time-Table Generator</p>
            <p className="text-xl m-1 custom-font"> This Time-table generator creates time-table with the help of given data and contraints. </p>
            <div className="flex items-center justify-center m-2">
                <Link to='/add'>
                    <ButtonV2 label='Add Data' />
                </Link>
                &nbsp;
                <Link to='/generate'>
                    <ButtonV2 label='Create Time-Table' />
                </Link>
            </div>
        </div>
    )
}
export default LandingPage;