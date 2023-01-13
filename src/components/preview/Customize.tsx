import React, { useState } from "react";
import { GetCode } from './GetCode'
import { ThemeOptions } from "./ThemeOptions";
import { PostOptions } from './PostOptions'
import { Modal } from '../Modal'

const Customize = () => {
    const [showModal, setShowModal] = useState(false)
    function toggleModal() {
        setShowModal(!showModal)
    }


return (
    <aside>
        <ThemeOptions />
        <PostOptions />
        <button onClick={toggleModal}>Get Code</button>
        <Modal show={showModal} closeModal={toggleModal}>
            <GetCode/>
        </Modal>
    </aside>
)
}

export {Customize}