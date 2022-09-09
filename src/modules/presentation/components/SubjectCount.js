import { useState } from "react";
import { API_CLIENT } from "../../../shared/services/api-client";
import ButtonV1 from "../../../shared/widgets/ButtonV1";
import Dropdown from "../../../shared/widgets/Dropdown"
import SubjectDetails from "./SubjectDetails";
import { useNavigate } from 'react-router-dom'

function ShowDetails(props) {
    const { subject, teachers } = props;
    return (
        <div className="w-full flex flex-col py-5 px-7 my-1 rounded-md bg-blue-gray-100">
            <h1 className="text-2xl font-semibold">{subject.Name}</h1>
            <ol className="list-disc">
                {
                    teachers.map((teacher, index) => {
                        return (
                            <li key={index}>{teacher.value.Name}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

const SubjectCount = () => {
    const [load, setLoad] = useState([]);
    const navigate = useNavigate();
    function getInput(subject, teachers, rank) {
        let temp = [...load];
        temp.push({
            Subject: subject,
            Teachers: teachers,
            Rank: rank,
        });
        setLoad(temp);
    }

    function sendDataToServer() {
        let packet = {
            load,
            no_of_slots: 6,
            no_of_tt: 5,
        }
        API_CLIENT.post(process.env.REACT_APP_LOGIC_URL, packet).then((data) => {
            console.log(data.data.result);
            navigate('/time-table',{
                state:{
                    data:data.data.result,
                }
            })
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <div>
            <ButtonV1 fn={sendDataToServer} label='Create Time Table' />
            <SubjectDetails fn={getInput} />
            {
                load.map(({ Subject, Teachers }, index) => {
                    return (
                        <ShowDetails key={index} teachers={Teachers} subject={Subject} />
                    )
                })
            }
        </div>
    )
}
export default SubjectCount