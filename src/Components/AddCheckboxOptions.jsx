import { useRef } from 'react'

const Addoption = ({ option, setAttribute }) => {
    console.log(option)
    const label = "capitalize font-semibold"
    const li = 'mx-5 flex gap-2'
    const inputFieldClass = "border-[0.2rem] rounded-md border-sky-100 h-12 shadow-lg shadow-rose-200 px-2 w-[20rem] text-stone-600 focus:outline-none focus:border-yellow-400";
    const userInput = useRef()

    // const handleChange = (index) => {
    //     const enteredInput = userInput.current.value
    //     option[index] == null && option.length === 1 ? setAttribute(
    //         () => {
    //             return {
    //                 option: [enteredInput],
    //             }
    //         }
    //     )
    //         :
    //         option.some((value) => value === enteredInput) ?
    //             setAttribute(
    //                 prevState => {
    //                     return {
    //                         option: [enteredInput, undefined],
    //                     }
    //                 }
    //             )
    //             : setAttribute(
    //                 prevState => {
    //                     return {
    //                         option: [...prevState.option, enteredInput],
    //                     }
    //                 }
    //             )
    // }

    // const handleAddInput = () => {
    //     setAttribute(
    //         prevState => {
    //             return {
    //                 option: [...prevState.option, null]
    //             }
    //         }
    //     );
    // }

    // const handleDeleteInput = (index) => {
    //     const newArray = option;
    //     newArray.splice(index, 1);
    //     setAttribute(
    //         (prevState) => {
    //             return {
    //                 option: [...prevState.option],
    //             }
    //         }
    //     )
    // }

    const handleChange = () => {
        const enteredInput = String(userInput.current.value)
        // setAttribute(
        //     option.push(enteredInput)
        // )
        setAttribute(
            (prevState) => {
                return {
                    option: [...prevState.option, enteredInput]
                }
            }
        )
        // option.push(enteredInput)
    }

    return (
        <div>
            {/* <div>
                <ul className="flex flex-col gap-4" >
                    <li className={li}>
                        <label className={label}>
                            value:
                        </label>
                        <input
                            ref={userInput}
                            className={inputFieldClass}
                            name="value"
                            type="text"
                        // value={item.value}
                        />
                        <button onClick={() => handleChange()}>Save Option</button>
                    </li>
                    <li className={li}>
                            {option.length > 1 && (
                                <button type='primary' onClick={() => handleDeleteInput(index)}>Delete</button>
                            )}
                        </li>
                    <li className={li}>
                        <button type='primary' onClick={() => handleChange()}>Add</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        {option}<br />
                    </li>
                    
                </ul>
            </div> */}
            {option == "" ? <ul className="flex flex-col gap-4" >
                <li className={li}>
                    <label className={label}>
                        value:
                    </label>
                    <input
                        ref={userInput}
                        className={inputFieldClass}
                        name="value"
                        type="text"
                    // value={item.value}
                    />
                    <button onClick={() => handleChange()}>Save Option</button>
                </li>
            </ul>
                : option.map((item, index) => (
                    <div key={index}>
                        <ul className="flex flex-col gap-4" >
                            <li className={li}>
                                <label className={label}>
                                    value:
                                </label>
                                <input
                                    ref={userInput}
                                    className={inputFieldClass}
                                    name="value"
                                    type="text"
                                    value={item.value}
                                />
                                <button onClick={(event) => handleChange(event, index)}>Save Option</button>
                            </li>
                            <li className={li}>
                                {option.length > 1 && (
                                    <button type='primary' onClick={() => handleDeleteInput(index)}>Delete</button>
                                )}
                            </li>
                            <li className={li}>
                                {index === option.length - 1 && (
                                    <button type='primary' onClick={() => handleChange(index)}>Add</button>
                                )}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {option}
                                <br />
                            </li>
                        </ul>
                    </div>

                ))}
        </div>
    )
}

export default Addoption