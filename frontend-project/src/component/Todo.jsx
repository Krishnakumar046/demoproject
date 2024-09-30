import React, { useState } from 'react'

export default function Todo() {

    const [userData, setUserData] = useState('');
    const [outputData, setOutputData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleClick = () => {
        if (userData.trim() !== '') {
            setOutputData([...outputData, userData]);
            setUserData('');
        }
    }
    const handleClicked = (itemIndex, e) => {
        let buttonIndex = e.target.dataset.index;
        let productIndex = itemIndex;
        console.log('Button clicked index:', buttonIndex);
        console.log('Item index:', productIndex);

        if (buttonIndex == productIndex) {
            setOutputData(outputData.filter((item, index) => index !== productIndex));
        }
    }

    const handleEdit = (productEdit, e) => {
        console.log('Button clicked index:', e.target.dataset.index);
        console.log('Item index:', productEdit);
        setEditIndex(productEdit);
        setEditValue(outputData[productEdit]);
    }
    const handleSaveClick = () => {
        setOutputData(outputData.map((item, index) =>
            index === editIndex ? editValue : item
        ));
        setEditIndex(null);
        setEditValue('');
    }


    return (
        <>
            <div className="container-fluid">
                <h1>Todo List</h1>
                <p class='container lh-lg'>In this calculator i have create this layout through the bootstrap method.I have use the UseState method and provide the initial value as empty string.I have create the Input field through Input tag and create some buttons while clicking the button it display's the buttons value through setValue and input tag gets the Button value through the Value and Onchange method in the React</p>
                <div class='container col-md-4 design colour'>
                    <label for="exampleFormControlInput1 " class="form-label text-white"><h2>Todo list</h2></label>
                    <div class='d-flex flex-row'>
                        <input type="text" class="form-control border-black text-start " id="exampleFormControlInput1" placeholder='Enter the content' value={userData} onChange={(e) => setUserData(e.target.value)} />
                        <button type="button" class="btn btn-primary" onClick={handleClick}>Add</button>
                    </div>
                    <div class='border-black mt-3'>
                        {
                            outputData.map((item, index) => (
                                <div class='container col-md-12 d-flex flex-row flex-wrap justify-content-between design mb-2 align-item-center' key={index}>
                                    {
                                        editIndex === index ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={editValue}
                                                    onChange={(e) => setEditValue(e.target.value)}
                                                    className="form-control col-md-8"
                                                />
                                                <button className='btn btn-success col-md-2' onClick={handleSaveClick}>Save</button>

                                            </>
                                        ) : (
                                            <>

                                                <div class='d-flex flex-wrap align-items-center  text-break '>
                                                    {item}
                                                </div>
                                                <div>
                                                    <button class='btn btn-success ' key={index} data-index={index} onClick={(e) => handleEdit(index, e)}>Edit</button>
                                                    <button class='btn btn-warning ' key={index} data-index={index} onClick={(e) => handleClicked(index, e)}>Remove</button>

                                                </div>
                                            </>
                                        )
                                    }  </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
