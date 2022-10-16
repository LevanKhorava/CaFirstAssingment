import React from 'react'
import { useState } from 'react'

import { Tab } from './styles/Tab.styled'

export default function () {
    
    
    const array=["first text", "second text", "third text", "fourth text"]
    const [index, setIndex] = useState(0)
    return (
        <Tab>
            <div classname='tablist' style={{display:"flex", width:"500px", justifyContent:"space-between", borderBottom:"solid black 3px"}}>
                <div style={{cursor:'pointer'}} onClick={()=>{setIndex(0)}}>
                    home
                </div>

                <div style={{ cursor: 'pointer' }} onClick={() => { setIndex(1) }} >
                    product
                </div>

                <div style={{ cursor: 'pointer' }} onClick={() => { setIndex(2) }}>
                    massage
                </div>

                <div style={{ cursor: 'pointer' }} onClick={() => { setIndex(3) }}>
                    setting
                </div>

            </div>
            {/* <div classname="homeTab" hidden={index!=0}>{array[index]}</div>
            <div classname="productTab" hidden={index != 1}> {array[index]}</div>
            <div classname="MassageTab" hidden={index != 2}>{array[index]}</div>
            <div classname="settingTab" hidden={index !=3}>{array[index]}</div> */}

            <div style={{marginTop:"40px"}} >
                {array[index]}
            </div>

        </Tab>
    )
}
