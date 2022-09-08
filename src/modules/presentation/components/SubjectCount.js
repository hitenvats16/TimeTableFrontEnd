import { useState } from "react";
import Dropdown from "../../../shared/widgets/Dropdown"
import SubjectDetails from "./SubjectDetails";

const SubjectCount = () => {
    const [array, setArray] = useState([]);
    const getInputFields = (val) => {
        const arr = [];
        for (let i = 0; i < val; i++) {
            arr.push(
                <>
                    <p>Subject {i + 1}</p>
                    <SubjectDetails index={i}/>
                </>
            )
        }
        setArray(arr);
    }

    return (
        <>
            <Dropdown fn={getInputFields} fields={['1', '2', '3', '4']} label='No. of Subjects' />
            {array}
        </>
    )
}
export default SubjectCount