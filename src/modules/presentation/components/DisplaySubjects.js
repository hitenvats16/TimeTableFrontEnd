import { useEffect, useState } from "react";
import { API_CLIENT } from "../../../shared/services/api-client";
import Select from 'react-select'

const DisplaySubjects = () => {

    
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const promise = API_CLIENT.get(process.env.REACT_APP_SUBJECT_URL);
        promise.then(result => {
            console.log(result);
            setSubjects(result.data.Data)
        }).catch(err => console.log('Network Err ', err));
    }, []);

    return (
        <div className="w-72 m-2">
            <Select onChange={(obj)=>{
                console.log(obj.value)
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