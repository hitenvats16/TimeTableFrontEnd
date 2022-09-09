// import { useEffect, useState } from 'react';
import Select from 'react-select'


const Dropdown = (props) => {
    const { fields, label } = props;
    return (
        <div className=" flex items-center w-72 m-2">
            <p className='pr-2'>{label}:</p>
            <Select options={
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