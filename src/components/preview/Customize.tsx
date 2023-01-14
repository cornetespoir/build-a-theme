import React, { useState, useContext } from "react";
import { GetCode } from './GetCode'
import { ThemeOptions } from "./ThemeOptions";
import { PostOptions } from './PostOptions'
import { Modal } from '../Modal'
import { SidebarStyles } from "./SidebarStyles";
import { ThemeContext } from "../../App";

const Customize = () => {
    const {sidebar} = useContext(ThemeContext)
    const [showModal, setShowModal] = useState(false)
    function toggleModal() {
        setShowModal(!showModal)
    }


return (
    <aside>
        <ThemeOptions />
        <PostOptions />
        {sidebar &&  <SidebarStyles />}
        <button onClick={toggleModal}><i className="fas fa-laptop-code"></i> Start using this theme</button>
        <Modal show={showModal} closeModal={toggleModal}>
            <GetCode/>
        </Modal>
    </aside>
)
}

export {Customize}