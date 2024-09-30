import React from 'react'
import { Link } from 'react-router-dom'
import Calculator from './Calculator'
import { useNavigate } from 'react-router-dom'

export default function CardItems({ product }) {

    const navigate = useNavigate();

    const handleClick = (id) => {
        if (product.id == 1) {
            navigate('/Calculator');
        } else if (product.id == 2) {
            navigate('/Todolist');
        } else if (product.id == 3) {
            navigate('/RockPaperScissor');
        } else if (product.id == 4) {
            navigate('/LoanCalculator');
        } else {
            navigate('/Weather');
        }

    }
    return (
        <div class='container row col-12 col-sm-6 col-md-6 col-lg-4 mt-5'>
            <div class="card " style={{ width: "25rem" }} >
                <img src={product.images} class="card-img-top " alt="Images" />
                <div class="card-body">
                    <h5 class="card-title mt-2">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <button class="btn btn-primary" onClick={handleClick}>{product.button}</button>
                </div>
            </div>
        </div>
    )
}
