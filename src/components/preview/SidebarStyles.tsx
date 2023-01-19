import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { setLocalStorage, useLocalStorage } from "../../hooks/useLocalStorage";

const SidebarStyles = () => {
    const {setSidebarLocation, setSidebarStyle, sidebarStyle} = useContext(ThemeContext)
    const [active, setActive] = useLocalStorage('active', '')

    function sidebarStyles(event: { currentTarget: HTMLInputElement; }) {
        const element = event.currentTarget as HTMLInputElement
        const value = element.value
            setSidebarStyle(value)
            setLocalStorage('sidebarStyle', 'default', value)
    }

    function changeSidebar(location: string) {
        if (location === 'right') {
            setSidebarLocation(true)
            setActive(location)
            setLocalStorage('sidebarLocation', setSidebarLocation, true)
            setLocalStorage('active', setActive, location)
        }

        else {
            setSidebarLocation(false)
            setActive(location)
            setLocalStorage('sidebarLocation', setSidebarLocation, false)
            setLocalStorage('active', setActive, '')
        }

        
    }
    return (
        <div className='forms'>
            <h3>Sidebar Options</h3>
            <h4>Sidebar style</h4>
            <div className={`select-sidebar select-size posts`}>
                    <input id="defaultSidebar" type="radio" value="default" name="sidebarStyle" checked={sidebarStyle === "default"} onChange={sidebarStyles} /> <label htmlFor='defaultSidebar'><i></i> <span>Default</span></label>
                    <input id="dashboardSidebar" type="radio" value="dash" name="sidebarStyle" checked={sidebarStyle === "dash"} onChange={sidebarStyles} /> <label htmlFor="dashboardSidebar"><i></i> <span>Dashboard</span></label>
                    <input id="chatBubbleSidebar" type="radio" value="bubble" name="sidebarStyle" checked={sidebarStyle === "bubble"} onChange={sidebarStyles} />  <label htmlFor="chatBubbleSidebar"><i></i><span>Chat Bubble</span></label>
            </div>

            <div className='flex'>
                <label className='half' htmlFor='sidebarSpot'>Sidebar location</label>
                <div className={`info-switch sidebar-info-switch ${active}-active`}>
                    <button className={active === 'left' ? 'active-button' : 'inactive-button'} name="sidebarSpot" id="sidebarSpotTop" onClick={() => changeSidebar('left')}>
                        Left
                    </button>
                    <button className={active !== 'left' ? 'active-button' : 'inactive-button'} name="sidebarSpot" id="sidebarSpotBottom" onClick={() => changeSidebar('right')}>
                        Right
                    </button>
                </div>
            </div>
        </div>
    )
}

export { SidebarStyles }