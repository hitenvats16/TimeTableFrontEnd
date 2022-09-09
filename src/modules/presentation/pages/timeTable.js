import { useLocation } from 'react-router-dom';

function BuildTimeTable(slots) {
    let arr = [];
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        arr.push(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>{`Day ${counter++}`}</td>
                {slots.map((elem, index) => {
                    if (elem != null) {
                        return (
                            <td key={index} className="py-4 px-6">
                                <div>
                                    <h1 className='font-bold text-black'>{elem.Subject.Name}</h1>
                                    <h1 className='font-semibold text-gray-600'>{elem.Teacher.label}</h1>
                                </div>
                            </td>
                        );
                    } else {
                        return (<td className="py-4 px-6"></td>);
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
        <div className='w-full flex justify-center'>
            <div className='w-3/4 flex flex-col'>
            {
                tt.map((slots, index) => {
                    return (
                        <div key={index} className="mt-5 overflow-x-auto relative shadow-md sm:rounded-lg">
                            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{`Section ${index+1}`}</h1>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="py-3 px-6"></th>
                                        {
                                            slots.map((obj, index) => {
                                                return (<th className="py-3 px-6" key={index}>{`Slot ${index + 1}`}</th>)
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
            </div>
        </div>
    )
}

export default TT;