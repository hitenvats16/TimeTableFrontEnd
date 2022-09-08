import { useState } from "react"
import InputBox from "../../../shared/widgets/InputBox";
import { Input } from "@material-tailwind/react";

const BranchCount = () => {
    const [count, setCount] = useState(0);
    const [totalcount, setTotalCount] = useState();

    const getTotalCount = (val) => {
        setTotalCount(parseInt(val));
    }

   const getClassCount = async (val) => {
        setCount(totalcount / val);
    }

    const lbl = `Required Time Tables : ${count}`

    return (
        <>
            <InputBox fn={getTotalCount} label='Total Students' />
            <InputBox fn={getClassCount} label='Class Capacity' />
                <div className="w-72 m-2">
                <Input label={lbl} disabled />
            </div>
        </>
    )
}
export default BranchCount