import React, { ChangeEvent, FormEvent, useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../App";

const PostOptions = () => {

    const {likes, setLikes, reblogs, setReblogs, postInfo, setPostInfo } = useContext(ThemeContext)

    function enableInteractions(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) {
        if (type === 'likes') {
            setLikes(!likes)
        }
        else {
            setReblogs(!reblogs)
        }
    }

    function changeLocation(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setPostInfo(!postInfo)
    }
    return (
        <div className='forms'>
            <h3>Post Options</h3>
            <h4>Post info</h4>
            <label htmlFor='postInfo'>Post Info Location</label>
        
                <button name="postInfo" id="postInfo" onClick={(event) => changeLocation(event)}>
                    Switch to {postInfo ? 'bottom' : 'top'} aligned post info  
                  </button>
            <br/>
            <button onClick={(event) => enableInteractions(event, 'likes')}>Enable likes</button>
            <br />
            <button onClick={(event) => enableInteractions(event, 'reblogs')}>Enable Reblogs</button>


        </div>
    )
}

export { PostOptions }