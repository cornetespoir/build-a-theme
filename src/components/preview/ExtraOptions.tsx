import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";

/*
* TO DO: put extra / for fun theme features here
*/
const ExtraOptions = () => {
    /* add to context */ 
    const {setSideImage} = useContext(ThemeContext)
    const [active, setActive] = useState('')
    function sideImageLocation(location: string) {
        if (location === 'right') {
            setSideImage('right')
            setActive(location)
        }

        else {
            setSideImage('left')
            setActive(location)
        }
    }
    return (
        <div className='forms'>
            <h3>Extra theme features</h3>
            <div className='flex'>
                <label className='half' htmlFor='sideImage'>Side Image</label>
                <div className={`info-switch sidebar-info-switch ${active}-active`}>
                    <button className={active === 'left' ? 'active-button' : 'inactive-button'} name="sideImage" id="sideImageLeft" onClick={() => sideImageLocation('left')}>
                        Left
                    </button>
                    <button className={active !== 'left' ? 'active-button' : 'inactive-button'} name="sideImage" id="sideImageRight" onClick={() => sideImageLocation('right')}>
                        Right
                    </button>
                </div>
            </div>
        </div>
    )
}

export { ExtraOptions }