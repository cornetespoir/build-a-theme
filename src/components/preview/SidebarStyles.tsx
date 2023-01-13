import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";


interface SidebarStylesProps {
    onChangeColor: (e: ChangeEvent<HTMLInputElement>) => void
    bg: string
}
const SidebarStyles = ({ onChangeColor, bg }: SidebarStylesProps) => {
    const {sidebar, setSidebar} = useContext(ThemeContext)

    function addSidebar() {
        setSidebar(!sidebar)
    }
    return (
        <>
        <button onClick={addSidebar}>{sidebar ? 'Remove' : 'Add'} Sidebar</button>

       {sidebar && 
        <div className='forms'>
        <label htmlFor='backgroundColor'>Background Color</label>
        <input type='color' id={`sidebarBg`} name='backgroundColor' onChange={(event) => onChangeColor(event)} value={bg} />
        </div>
        }
        </>
       
    )
}

export { SidebarStyles }