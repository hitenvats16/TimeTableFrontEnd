import { useEffect, useState } from "react";
import { API_CLIENT } from "../../../shared/services/api-client";
import Select from 'react-select'

const DisplaySubjects = ({fn}) => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const promise = API_CLIENT.get("http://65.2.140.173:5000/subjects");
        promise.then(result => {
            setSubjects(result.data.Data)
        }).catch(err => console.log('Network Err ', err));
    }, []);

    return (
        <div className="w-72 m-2">
            <Select onChange={(obj)=>{
                fn(obj.value);
            }} options={
                subjects.map((subject) => {
                    return ({
                        label: subject.Name,
                        value: subject,
                    })
                })
            } />
        </div>
    )
}
export default DisplaySubjects;