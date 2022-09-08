import InputBox from "../../../shared/widgets/InputBox"
import DisplaySubjects from "../components/DisplaySubjects";
import DisplayTeachers from "./DisplayTeachers";

const SubjectDetails = () => {
    
    const getPriority =(val)=>{
        console.log(val);
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