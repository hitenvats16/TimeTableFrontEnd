// import { API_CLIENT } from "../../../shared/services/api-client";
// import { useEffect, useState } from "react";
// import Select from 'react-select'
// const DisplayTeachers = () => {

//     const [teachers, setTeachers] = useState([]);
//     useEffect(() => {
//         const promise = API_CLIENT.get(process.env.REACT_APP_SUBJECT_URL);
//         promise.then(result => {
//             console.log(result);
//             setTeachers(result.data.Data)
//         }).catch(err => console.log('Network Err ', err));
//     }, []);
//     return (
//         <div className="w-72 m-2">

//             <Select onChange={(obj) => {
//                 console.log(obj.value)
//             }} options={
//                 teachers.map((teacher) => {
//                     return ({
//                         label: teacher.Name,
//                         value: teacher,
//                     })
//                 })
//             } />
//         </div>
//     )
// }

// export default DisplayTeachers;
import { API_CLIENT } from "../../../shared/services/api-client";
import { useEffect, useState } from "react";
import CreatableSelect from 'react-select/creatable';

const DisplayTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const promise = API_CLIENT.get(process.env.REACT_APP_SUBJECT_URL);
        promise.then(result => {
            console.log(result);
            setTeachers(result.data.Data)
        }).catch(err => console.log('Network Err ', err));
    }, []);


    const handleChange = (
        newValue,
        actionMeta
    ) => {
        console.log(newValue);
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