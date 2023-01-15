import React, { ChangeEvent, useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { Disclaimer } from "../Disclaimer";

/*
* TO DO: put extra / for fun theme features here
*/


const ExtraOptions = () => {
    /* add to context */
    const { setSearchBar, sideImage, searchBar, header, footer, sidebar, setSideImage, setCustomCursor, customCursor } = useContext(ThemeContext)
    const [active, setActive] = useState('')
    function sideImageLocation(location: string) {
        if (location === 'right') {
            setSideImage('right')
            setActive(location)
            console.log(sideImage)
        }

        else {
            setSideImage('left')
            setActive(location)
            console.log(sideImage)
        }
    }

    function addCursor() {
        setCustomCursor(!customCursor)
    }

    function searchLocation(event: ChangeEvent<HTMLSelectElement>) {
        setSearchBar(event.target.value)
    }

    function sideImageToggle() {
        if (sideImage !== 'default') {
            setSideImage('default')
        }

        else {
            setSideImage('left')
        }


    }

    function searchToggle() {
        if (searchBar !== '') {
            setSearchBar('')
        }

        else {
            setSearchBar('choose')
        }


    }
    return (
        <div className='forms'>
            <h3>Extra theme features</h3>

            <div className='side-image-option'>

                <div className="flex">
                    <label className='half'>Add search bar</label>
                    <button className={`toggle-button toggle-${searchBar !== ''}`} onClick={searchToggle}>Toggle Searh bar</button>
                    {searchBar !== '' &&
                        <div className='flex half'>
                            <label className='half'>Search bar location</label>
                            {!footer && !header && !sidebar ? <Disclaimer icon="fas fa-exclamation-triangle" words="please enable a sidebar, header, or footer" />
                                :
                                <select name="title" id="title" onChange={(event) => searchLocation(event)}>
                                    <option>Select an Option </option>
                                    {sidebar && <option value="sidebar">Sidebar</option>}
                                    {header && <option value="header">Header</option>}
                                    {footer && <option value="footer">Footer</option>}        </select>
                            }
                            </div>
                    }
                </div>
            </div>

            <div className='side-image-option'>
                <div className="flex">
                    <label className='half'>Add side image</label>
                    <button className={`toggle-button toggle-${sideImage !== 'default'}`} onClick={sideImageToggle}>Toggle Side Image</button>
                    {sideImage !== 'default' &&
                        <>

                            <div className='flex half'>
                                <label className='half'>Side Image</label>
                                <div className={`info-switch sidebar-info-switch ${active}-active`}>
                                    <button className={active === 'left' ? 'active-button' : 'inactive-button'} name="sideImage" id="sideImageLeft" onClick={() => sideImageLocation('left')}>
                                        Left
                                    </button>
                                    <button className={active !== 'left' ? 'active-button' : 'inactive-button'} name="sideImage" id="sideImageRight" onClick={() => sideImageLocation('right')}>
                                        Right
                                    </button>
                                </div>
                            </div></>
                    }
                </div>
            </div>


            <div className='flex cursor'>
                <input type="checkbox" id="customCursor" name="customCursorCheck" value="True" checked={customCursor} onChange={addCursor} />
                <label htmlFor="customCursor"><span></span> Custom Cursor</label>
                {customCursor && <p className="disclaimer" style={{ marginTop: '0' }}>Custom cursor added to your theme options. Not visible in the preview.</p>}
            </div>
        </div>
    )
}

export { ExtraOptions }