import InputBox from "../../../shared/widgets/InputBox"
import DisplaySubjects from "../components/DisplaySubjects";
import DisplayTeachers from "./DisplayTeachers";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const SubjectDetails = ({ fn }) => {
    const [rank, SetRank] = useState(0);
    const [Teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState([]);

    const getPriority = (val) => {
        SetRank(parseInt(val));
    }

    function getTeachersArray(arr) {
        setTeachers(arr);
    }

    function getSubject(val) {
        setSubject(val);
    }

    return (
        <div className="bg-gray-300 p-4 my-1 flex flex-col">
            <DisplaySubjects fn={getSubject} />
            <InputBox fn={getPriority} label='Subject Priority' />
            <DisplayTeachers fn={getTeachersArray} />
            <Button onClick={()=>{
                fn(subject,Teachers,rank);
            }} className="self-center">Add Combination</Button>
        </div>
    )
}
export default SubjectDetails