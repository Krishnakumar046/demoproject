import React, { useState } from 'react'

export default function Calculator() {

    const [number, setNumber] = useState('');

    const handleClear = () => {
        setNumber((prev) => prev.slice(0, -1));
    }

    const handleDelete = () => {
        setNumber('');
    }

    const handleEqual = () => {

        try {
            setNumber((prev) => String(eval(prev)));
        } catch (err) {
            setNumber('');
        }

    }






    return (
        <div class='container-fluid '>
            <div class=''>
                <h1>Calculator</h1>
                <p class='container lh-lg'>In this calculator i have create this layout through the bootstrap method.I have use the UseState method and provide the initial value as empty string.I have create the Input field through Input tag and create some buttons while clicking the button it display's the buttons value through setValue and input tag gets the Button value through the Value and Onchange method in the React  </p>
                <div class='container w-100 h-100'>
                    <div class=' d-flex flex-row justify-content-center'>
                        <div class='col-md-4 design colour'>
                            <label for="exampleFormControlInput1" class="form-label text-white"><h2>Calculator</h2></label>
                            <input type="text" class="form-control border-black text-end p-2 m-0 bg-secondary text-white" id="exampleFormControlInput1" value={number} onChange={setNumber} placeholder='0' />
                            <div class='mt-2'>
                                <button class="btn btn-primary border-black col-sm-3 mx-1 my-1" onClick={() => setNumber((prev) => prev + '1')} type="button" id="btn1">1</button>
                                <button class="btn btn-primary border-black col-sm-3 mx-1 my-1" onClick={() => setNumber((prev) => prev + '2')} type="button" id="btn2">2</button>
                                <button class="btn btn-primary border-black col-sm-3 mx-1 my-1" onClick={() => setNumber((prev) => prev + '3')} type="button" id="btn3">3</button>
                                <button class="btn btn-primary border-black col-sm-2 mx-1 my-1" onClick={() => setNumber((prev) => prev + '+')} type="button" id="btn+">+</button>
                                <button class="btn btn-primary border-black col-sm-3 mx-1 my-1" onClick={() => setNumber((prev) => prev + '4')} type="button" id="btn4">4</button>
                                <button class="btn btn-primary border-black col-sm-3 mx-1 my-1" onClick={() => setNumber((prev) => prev + '5')} type="button" id="btn5">5</button>
                                <button class="btn btn-primary border-black col-sm-3  mx-1 my-1" onClick={() => setNumber((prev) => prev + '6')} type="button" id="btn6">6</button>
                                <button class="btn btn-primary border-black col-sm-2  mx-1 my-1" onClick={() => setNumber((prev) => prev + '-')} type="button" id="btn-">-</button>
                                <button class="btn btn-primary border-black col-sm-3  mx-1 my-1" onClick={() => setNumber((prev) => prev + '7')} type="button" id="btn7">7</button>
                                <button class="btn btn-primary border-black col-sm-3  mx-1 my-1" onClick={() => setNumber((prev) => prev + '8')} type="button" id="btn8">8</button>
                                <button class="btn btn-primary border-black col-sm-3  mx-1 my-1" onClick={() => setNumber((prev) => prev + '9')} type="button" id="btn9">9</button>
                                <button class="btn btn-primary border-black col-sm-2  mx-1 my-1" onClick={() => setNumber((prev) => prev + '*')} type="button" id="btn*">*</button>
                                <button class="btn btn-primary border-black col-sm-3  mx-1 my-1" onClick={() => setNumber((prev) => prev + '00')} type="button" id="btn00">00</button>
                                <button class="btn btn-primary border-black col-sm-3  mx-1 my-1" onClick={() => setNumber((prev) => prev + '0')} type="button" id="btn0">0</button>
                                <button class="btn btn-primary border-black col-sm-3  mx-1 my-1" onClick={() => setNumber((prev) => prev + '.')} type="button" id="btnd">.</button>
                                <button class="btn btn-primary border-black col-sm-2  mx-1 my-1" onClick={() => setNumber((prev) => prev + '/')} type="button" id="btn/">/</button>
                                < button class="btn btn-primary border-black col-sm-3  mx-2 my-1" onClick={handleClear} type="button" id='btnc'>Clear</button>
                                <button class="btn btn-primary border-black col-sm-4  mx-1 my-1" onClick={handleDelete} type="button" id='btnd'>Delete</button>
                                <button class="btn btn-success border-black col-sm-4  mx-1 my-1" onClick={handleEqual} type="button" id='btne'>=</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
