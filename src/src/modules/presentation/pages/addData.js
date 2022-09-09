import { Alert } from "@material-tailwind/react";
import { useState } from "react";
import { API_CLIENT } from "../../../shared/services/api-client";
import ButtonV1 from "../../../shared/widgets/ButtonV1";
import ButtonV2 from "../../../shared/widgets/ButtonV2";
import InputBox from "../../../shared/widgets/InputBox";

const ADD_TEACHERS_LINK = "http://65.2.140.173:5000/add_teachers";
const ADD_SUBJECTS_LINK = "http://65.2.140.173:5000/add_subjects";

const NavBar = ({title}) => {
    return (
        <div className="w-full h-full grid grid-rows-1 grid-cols-8 mt-28">
            <div className="col-span-1" />
            <div className="col-span-6 flex justify-center items-center flex-wrap">
                <span className="font-bold text-[36px] custom-font text-[#111527]">{title}</span>
            </div>
        </div>
    )
}

function Card({ title }) {
    return (
        <div className="p-3 bg-blue-gray-100 rounded-md m-1 w-full flex justify-center">
            {title}
        </div>
    )
}

function AddData() {
    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [showTeach, setShowTeach] = useState(false);
    const [showSub, setShowSub] = useState(false);
    function teacherHandler() {
        setTeachers([...teachers, teacher]);
        setTeacher('');
    }
    function subjectHandler() {
        setSubjects([...subjects, subject]);
        setSubject('');
    }
    function inputHandlerTeacher(val) {
        setTeacher(val);
    }
    function inputHandlerSubject(val) {
        setSubject(val);
    }
    async function sendDataToServerTeacher(){
        const res = await API_CLIENT.post(ADD_TEACHERS_LINK,teachers);
        if(res.data.status === 200)
            setShowTeach(true);
        setTeachers([]);
    }
    async function sendDataToServerSubject(){
        const res = await API_CLIENT.post(ADD_SUBJECTS_LINK,subjects);
        if(res.data.status === 200)
            setShowSub(true);
        setSubjects([]);
    }
    return (
        <>
            <div className="w-full h-max flex">
            <div className="w-full h-max flex items-center flex-col">
            <NavBar title="Add Teachers"/>
                <div className="flex flex-col items-center w-max">
                    <Alert
                        show={showTeach}
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 100 },
                        }}
                        color="green"
                        dismissible={{
                            onClose: () => setShowTeach(false),
                        }}
                    >
                        Data Successfully added.
                    </Alert>
                    <div className="w-max flex flex-col items-center p-5 bg-gray-200 rounded shadow">
                        <InputBox fn={inputHandlerTeacher} val={teacher} label="Teacher's name" />
                        <ButtonV2 disabled={teacher === '' ? true : false} fn={teacherHandler} label="Add Teacher" />
                    </div>
                    {
                        teachers.map((elem, index) => {
                            return (
                                <Card title={elem} key={index} />
                            )
                        })
                    }
                    <ButtonV1 fn = {sendDataToServerTeacher} label={'Send Data To Server'} />
                </div>
            </div>
            <div className="w-full h-max flex items-center flex-col">
            <NavBar title="Add Subjects"/>
                <div className="flex flex-col items-center w-max">
                    <Alert
                        show={showSub}
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 100 },
                        }}
                        color="green"
                        dismissible={{
                            onClose: () => setShowSub(false),
                        }}
                    >
                        Data Successfully added.
                    </Alert>
                    <div className="w-max flex flex-col items-center p-5 bg-gray-200 rounded shadow">
                        <InputBox fn={inputHandlerSubject} val={subject} label="Subject's name" />
                        <ButtonV2 disabled={subject === '' ? true : false} fn={subjectHandler} label="Add Teacher" />
                    </div>
                    {
                        subjects.map((elem, index) => {
                            return (
                                <Card title={elem} key={index} />
                            )
                        })
                    }
                    <ButtonV1 fn = {sendDataToServerSubject} label={'Send Data To Server'} />
                </div>
            </div>
            </div>
        </>
    );
}

export default AddData;