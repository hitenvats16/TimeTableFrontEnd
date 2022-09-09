import { API_CLIENT } from "../../../shared/services/api-client";
import { useEffect, useState } from "react";
import CreatableSelect from 'react-select/creatable';

const DisplayTeachers = ({fn}) => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const promise = API_CLIENT.get("http://65.2.140.173:5000/teachers");
        promise.then(result => {
            console.log(result);
            setTeachers(result.data.Data)
        }).catch(err => console.log('Network Err ', err));
    }, []);

    const handleChange = (
        newValue
    ) => {
        fn(newValue);
    };
    
    return (
       <div className="w-72 m-2">
         <CreatableSelect
            isMulti
            onChange={handleChange}
            options={
                teachers.map((teacher) => {
                    return ({
                        label: teacher.Name,
                        value: teacher,
                    })
                })
            }
        />
       </div>
    );
}
export default DisplayTeachers