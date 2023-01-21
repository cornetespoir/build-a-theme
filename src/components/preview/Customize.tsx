import React, { useState, useContext } from "react";
import { GetCode } from './GetCode'
import { ThemeOptions } from "./ThemeOptions";
import { PostOptions } from './PostOptions'
import { Modal } from '../Modal'
import { SidebarStyles } from "./SidebarStyles";
import { ThemeContext } from "../../App";
import { ExtraOptions } from "./ExtraOptions";

const Customize = () => {
    const { sidebar } = useContext(ThemeContext)
    const [showModal, setShowModal] = useState(false)
    function toggleModal() {
        setShowModal(!showModal)
    }

    let darkMode = localStorage.getItem("night-mode")
    const theme = document.documentElement;
    const nightModeOn = () => {
        theme.classList.add("night-mode-theme")
        localStorage.setItem("night-mode", "enabled")
    }
    const nightModeOff = () => {
        theme.classList.remove("night-mode-theme")
        localStorage.setItem("night-mode", "disabled")
    }

    if (darkMode === "enabled") {
        nightModeOn()
    }

    function toggleTheme() {
        darkMode = localStorage.getItem("night-mode")
        if (darkMode === 'enabled') {
            nightModeOff()
        }
        else {
            nightModeOn()
        }
    }
    return (
        <aside>
            <button className='open-code themes' onClick={toggleTheme}><i className="fas fa-swatchbook"></i> Change builder color palette</button>
            <ThemeOptions />
            {sidebar && <SidebarStyles />}
            <PostOptions />
            <ExtraOptions />
            <button className='open-code' onClick={toggleModal}><i className="fas fa-laptop-code"></i> Start using this theme</button>
            <Modal show={showModal} closeModal={toggleModal}>
                <GetCode />
            </Modal>
        </aside>
    )
}

export { Customize }