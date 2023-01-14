import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const PostOptions = () => {

    const {layout, setGridSize, setPostSize, likes, setLikes, reblogs, setReblogs, postInfo, setPostInfo } = useContext(ThemeContext)

    function enableInteractions(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) {
        if (type === 'likes') {
            setLikes(!likes)
        }
        else {
            setReblogs(!reblogs)
        }
    }

    function changeLocation(event: React.MouseEvent<HTMLButtonElement>) {
        setPostInfo(!postInfo)
    }

    function changeSize(event:  React.ChangeEvent<HTMLSelectElement>, type: string) {
        if (type === 'grid') {
            setGridSize(event.target.value)
        }
        
        else {
            setPostSize(event.target.value)
        }
    }
    return (
        <div className='forms'>
            <h3>Post Options</h3>
            <h4>Post size</h4>
            {layout === 'grid' ? 
            <><p className='disclaimer'>Grid themes' post sizes are based on column count</p>
             <select name="title" id="title" onChange={(event) => changeSize(event, 'grid')}>
                    <option>Select a grid size</option>
                    <option value="small">2 columns</option>
                    <option value="medium">3 columns</option>
                </select>
            </>
                :
                <select name="title" id="title" onChange={(event) => changeSize(event, 'post')}>
                    <option>Select a post size</option>
                    <option value="small">Small (250px)</option>
                    <option value="medium">Medium (540px)</option>
                    <option value="large">Large (700px)</option>
                </select>
            }

            <h4>Post info</h4>
            <label htmlFor='postInfo'>Post Info Location</label>
                <button name="postInfo" id="postInfo" onClick={(event) => changeLocation(event)}>
                  Toggle position of post info
                  </button>
            <br/>
            <label>Likes</label>
            <button onClick={(event) => enableInteractions(event, 'likes')}>Toggle Likes</button>
            <br />
            <label>Reblogs</label>
            <button onClick={(event) => enableInteractions(event, 'reblogs')}>Toggle Reblogs</button>


        </div>
    )
}

export { PostOptions }