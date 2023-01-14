import React, { useContext, useState, ReactNode } from "react"
import { ThemeContext } from "../../App"
interface ContainersProps {
    type: string
    className?: string
    allowDelete?: boolean
    children?: ReactNode
    id?: string
}
const Containers = ({ id, className, type, allowDelete, children }: ContainersProps) => {
  const [open, setOpen] = useState(false);
  const {header, footer, setHeader, setFooter} = useContext(ThemeContext)

  function deleteButton(type: string) {
    if (type === 'header') {
      setHeader(false)
    }

    else {
      setFooter(false)
    }
  }
    return (
        <article className={`sections ${className} ${type}`}>
            {children}
            {allowDelete && <button className='delete-button' onClick={() => setOpen(!open)}>Delete</button>}
            {open === true &&
                <div className='delete-popup'> <b>Really delete?</b>
                    <i>This cannot be undone</i>
                    <button onClick={() => deleteButton(type)} className='delete'>Delete</button>
                    <button onClick={() => setOpen(!open)}>Cancel</button>
                </div>
            }
        </article>
    )
}

export { Containers }