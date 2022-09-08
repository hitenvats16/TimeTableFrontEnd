// import { useEffect, useState } from 'react';
import Select from 'react-select'


const Dropdown = (props) => {
    const { fields,fn } = props;
    // const [array, setArray] = useState([])
    // useEffect(() => {
    //     const arr = fields.map((field) => {
    //         return ({
    //             label: field,
    //             value: field,
    //         })
    //     })
    //     setArray([
    //         <option value="default" disabled hidden>
    //             {label}
    //         </option>
    //     ])
    // }, [])
    return (
        <div className="w-72 m-2">
            <Select onChange={(obj) => {
                fn(obj.value)
            }} options={
                fields.map((field) => {
                    return ({
                        label: field,
                        value: field,
                    })
                })
            } >
            </Select>
        </div>
    )
}
export default Dropdown;