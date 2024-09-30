import React, { useState } from 'react'
import data from '../data.json'
import CardItems from './CardItems';


export default function Card() {

    const [userdata, setUserData] = useState(data);
    return (
        <div class='container d-flex flex-row flex-wrap  justify-content-center'>{

            userdata.map((item, key) =>
                < CardItems product={item} key={key} />
            )
        }


        </div>
    )
}
