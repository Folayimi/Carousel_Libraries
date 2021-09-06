import React from 'react';
import {data} from './data';
import Carousel from './Carousel'

const SetUp = () =>{
    return(
        <>
        <div className="arc">
            <Carousel 
            data={data}              
            baseColor="red"
            buttonColor="green"
            background="black"
            color="white"                        
            />
        </div>
        </>
    )
}

export default SetUp;