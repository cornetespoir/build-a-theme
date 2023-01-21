import React, { ChangeEvent, useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { Disclaimer } from "../Disclaimer";
import { useLocalStorage, setLocalStorage } from "../../hooks/useLocalStorage";

/*
* TO DO: put extra / for fun theme features here
*/


const ExtraOptions = () => {
    const { keyboardNav, setKeyboardNav, layout, daynight, setdaynight, setSearchBar, sideImage, searchBar, header, footer, sidebar, setSideImage, setCustomCursor, customCursor } = useContext(ThemeContext)
    const [active, setActive] = useLocalStorage('activeImage', '')
    function sideImageLocation(location: string) {
        if (location === 'right') {
            setSideImage('right')
            setActive(location)
            setLocalStorage('sideImage', setSideImage, 'right')
        }

        else {
            setSideImage('left')
            setActive(location)
            setLocalStorage('sideImage', setSideImage, 'left')
        }
        setLocalStorage('activeImage', setActive, location)

    }

    function toggleButtons(key: string) {
        if (key === 'cursor') {
            setLocalStorage('customCursor', setCustomCursor, !customCursor)
        }

        else if (key === 'daynight') {
            setLocalStorage('dayNight', setdaynight, !daynight)

        }

        else if (key === 'keyboard') {
            setLocalStorage('keyboardNav', setKeyboardNav, !keyboardNav)
        }
    }

    useEffect(() => {
        if (layout === 'grid') {
            setLocalStorage('keyboardNav', setKeyboardNav, false)
        }
    }, [layout, keyboardNav, setKeyboardNav])

    function searchLocation(event: ChangeEvent<HTMLSelectElement>) {
        setLocalStorage('searchBar', setSearchBar, event.target.value)
    }

    function sideImageToggle() {
        if (sideImage !== 'default') {
            setSideImage('default')
            setLocalStorage('sideImage', setSideImage, 'default')
        }

        else {
            setSideImage('left')
            setLocalStorage('sideImage', setSideImage, 'left')
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
                                <select name="title" id="title" defaultValue={searchBar} onChange={(event) => searchLocation(event)}>
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
                    <label>Add day/night toggle button</label>
                    <button className={`toggle-button toggle-${daynight}`} onClick={() => toggleButtons('daynight')}>Toggle Day/Night mode</button>
                    {daynight &&
                        <div className='flex half'>
                            <label className='half'>Day/Night mode added!</label>
                            <p className='disclaimer'>Also comes with an option to remove background images in night mode. Not visible in preview</p>
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
            {layout !== 'grid' &&
                <div className='flex cursor'>
                    <input type="checkbox" id="keyboardNav" name="keyboardNav" onChange={() => toggleButtons('keyboard')} checked={keyboardNav} />
                    <label htmlFor="keyboardNav"><span></span> Keyboard Navigation</label>
                    <p className="disclaimer" style={{ marginTop: '0' }}>Navigate between posts using 'j' and 'k' keys.</p>
                </div>
            }
            <div className='flex cursor'>
                <input type="checkbox" id="customCursor" name="customCursorCheck" onChange={() => toggleButtons('cursor')} checked={customCursor} />
                <label htmlFor="customCursor"><span></span> Custom Cursor</label>
                {customCursor && <p className="disclaimer" style={{ marginTop: '0' }}>Custom cursor added to your theme options. Not visible in the preview.</p>}
            </div>
        </div>
    )
}

export { ExtraOptions }