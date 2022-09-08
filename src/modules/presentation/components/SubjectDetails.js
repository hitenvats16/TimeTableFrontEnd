import InputBox from "../../../shared/widgets/InputBox"
import DisplaySubjects from "../components/DisplaySubjects";
import DisplayTeachers from "./DisplayTeachers";
import { useState } from "react";

const SubjectDetails = () => {
    const [rank,SetRank]=useState(0);
    const getPriority =(val)=>{
        SetRank(val);
    }

    return (
        <div className="bg-gray-300 p-4 my-1">
            <DisplaySubjects/>
            <InputBox fn={getPriority} label='Subject Priority' />
            <DisplayTeachers/>
        </div>
    )
}
export default SubjectDetails