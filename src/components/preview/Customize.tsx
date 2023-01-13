import React, { ChangeEvent, useEffect, useState, useContext, useRef } from "react";
import { BasicStyles } from "./BasicStyles";
import { SidebarStyles } from './SidebarStyles'
import {GetCode} from './GetCode'
import { ThemeContext } from '../../App'
import { ThemeOptions } from "./ThemeOptions";
import { PostOptions } from './PostOptions'
import { Modal } from '../Modal'

interface CustomizeProps {
 
}
const Customize = ({}: CustomizeProps) => {
    const {sidebar} = useContext(ThemeContext)

    const [bg, setBg] = useState('#ffffff')
    const [img, setImg] = useState('')
    const [isRepeating, setIsRepeating] = useState(false)

    const [showModal, setShowModal] = useState(false)


    function onChangeColor(e: ChangeEvent<HTMLInputElement>) {
        setBg(e.currentTarget.value)
        document.documentElement.style.setProperty('--sidebar-background', e.currentTarget.value);
    }

    function onChangeBgImage(e: ChangeEvent<HTMLInputElement>) {
        setImg(e.currentTarget.value)
        const backgroundImageUrl = `url(${e.currentTarget.value})`
        document.documentElement.style.setProperty('--background-image', backgroundImageUrl);
    }

    function handleBackgroundSize(e: ChangeEvent<HTMLInputElement>) {
       setIsRepeating(!isRepeating)
    }

    useEffect(()=> {
        if (isRepeating) {
            document.documentElement.style.setProperty('--background-size', 'auto')
           }
           else {
            document.documentElement.style.setProperty('--background-size', 'cover')
           }
    }, [isRepeating])

    function toggleModal() {
        setShowModal(!showModal)
    }


return (
    <aside>
        <BasicStyles />
        <ThemeOptions />
        <PostOptions />
        <SidebarStyles bg={bg} onChangeColor={(e: ChangeEvent<HTMLInputElement>) => onChangeColor(e)} />
        <button onClick={toggleModal}>Get Code</button>
        <Modal show={showModal} closeModal={toggleModal}>
            <GetCode/>
        </Modal>
    </aside>
)
}

export {Customize}