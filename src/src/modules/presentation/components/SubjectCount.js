import { useState } from "react";
import { API_CLIENT } from "../../../shared/services/api-client";
import ButtonV1 from "../../../shared/widgets/ButtonV1";
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

const SubjectCount = (props) => {
    const {slotCount}=props;
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
        load.sort((o1,o2)=>{
            if(o1.Rank<o2.Rank) return 1;
            if(o1.Rank>o2.Rank) return -1;
            return 0;
        })
        console.dir(load);
        let packet = {
            load,
            no_of_slots: 6,
            no_of_tt: slotCount(),
        }
        API_CLIENT.post("http://65.2.140.173:5000/generate", packet).then((data) => {
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