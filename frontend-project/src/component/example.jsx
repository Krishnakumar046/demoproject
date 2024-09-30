import React from 'react'

export default function example() {
    return (
        <div>
            <label for="exampleFormControlInput1" class="form-label"><h2>Todo list</h2></label>
            <div class='d-flex flex-row'>
                <input type="text" class="form-control border-black text-start" id="exampleFormControlInput1" placeholder='Enter the content' value={userData} onChange={(e) => setUserData(e.target.value)} />
                <button type="button" class="btn btn-primary" onClick={handleClick}>Add</button>
            </div>
            <div class='container border-black mt-3'>
                {
                    outputData.map((item, index) => (
                        <div class='container d-flex flex-row flex-wrap justify-content-between design mb-2 align-item-center' key={index}>
                            {item}
                            <button class='btn btn-primary' key={index} data-index={index} onClick={(e) => handleClicked(index, e)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
