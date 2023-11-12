import React from 'react'
import {ReactComponent as ImgAd} from "../image/AdImg.svg"

const Ad = ({state})=>{
    if(!state){
        return null;
    }
    else{
        return(
            <div>
                <ImgAd width="" height=""/>
            </div>
        )
    } 
}

export default Ad;