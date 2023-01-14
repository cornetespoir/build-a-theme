import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";

/*
* TO DO: put extra / for fun theme features here
*/
const ExtraOptions = () => {
    /* add to context */ 
    const {} = useContext(ThemeContext)
    const [active, setActive] = useState('')

    function updateTabs(event: { currentTarget: HTMLInputElement; }) {
        const element = event.currentTarget as HTMLInputElement
        const value = element.value
        // updateTabSpot(value)
    }

    function sideImageLocation(location: string) {
        if (location === 'right') {
            // setSideImage('right')
            setActive(location)
        }

        else {
            // setSideImage('left')
            setActive(location)
        }
    }
    return (
        <div className='forms'>
            <h3>Extra theme features</h3>
            <h4>Updates tab</h4>
            <div className={`select-sidebar select-size posts`}>
                    {/* <input id="updateTopLeft" type="radio" value="default" name="updateTab" checked={updateTabSpot === "default"} onChange={updateTabs} /> <label htmlFor='defaultSidebar'><i></i> <span>Default</span></label>
                    <input id="updateTopRight" type="radio" value="dash" name="updateTab" checked={updateTabSpot === "dash"} onChange={updateTabs} /> <label htmlFor="dashboardSidebar"><i></i> <span>Dashboard</span></label>
                    <input id="updateBottomLeft" type="radio" value="bubble" name="updateTab" checked={updateTabSpot === "bubble"} onChange={updateTabs} />  <label htmlFor="chatBubbleSidebar"><i></i><span>Chat Bubble</span></label>
                    <input id="updateBottomRight" type="radio" value="bubble" name="updateTab" checked={updateTabSpot === "bubble"} onChange={updateTabs} />  <label htmlFor="chatBubbleSidebar"><i></i><span>Chat Bubble</span></label> */}
            </div>

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