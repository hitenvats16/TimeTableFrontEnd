import { useLocation } from 'react-router-dom';

function BuildTimeTable(slots) {
    let arr = [];
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        arr.push(
            <tr>
                <td>{`Day ${counter++}`}</td>
                {slots.map((elem, index) => {
                    if (elem != null) {
                        return (
                            <td key={index}>
                                <div>
                                    <h1 className='font-bold text-black'>{elem.Subject.Name}</h1>
                                    <h1 className='font-semibold text-gray-600'>{elem.Teacher.label}</h1>
                                </div>
                            </td>
                        );
                    } else {
                        return (<td></td>);
                    }
                })}
            </tr>
        )
    }
    return arr;
}

function TT() {
    const tt = useLocation().state.data;
    return (
        <>
            {
                tt.map((slots, index) => {
                    return (
                        <div key={index}>
                            <h1 className='text-2xl mt-2'>{`Section ${index}`}</h1>
                            <table className='table-fixed'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        {
                                            slots.map((obj, index) => {
                                                return (<th key={index}>{`Slot ${index + 1}`}</th>)
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        BuildTimeTable(slots)
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TT;