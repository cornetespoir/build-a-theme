import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

const BasicStyles = () => {

    const [bg, setBg] = useState('#ffffff')
    const [img, setImg] = useState('')
    const [isRepeating, setIsRepeating] = useState(false)

    function onChangeColor(e: ChangeEvent<HTMLInputElement>) {
        setBg(e.currentTarget.value)
        document.documentElement.style.setProperty('--background-color', e.currentTarget.value);
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

    return (
        <div className='forms'>
        <label htmlFor='backgroundColor'>Background Color</label>
        <input type='color' name='backgroundColor' onChange={(event) => onChangeColor(event)} value={bg} />

        <label htmlFor='backgroundImage'>Background Image</label>
        <input type='text' placeholder='image URL' name='backgroundImage' onChange={(event) => onChangeBgImage(event)} value={img} />

        <input type="checkbox" name="backgroundSize" value="backgroundSize" onChange={(event) => handleBackgroundSize(event)} checked={isRepeating}/>
        <label htmlFor='backgroundSize' className='bgSize'>Repeating Background?</label>
        </div>
    )
}

export { BasicStyles }