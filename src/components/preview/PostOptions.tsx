import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { setLocalStorage, useLocalStorage } from "../../hooks/useLocalStorage";

const PostOptions = () => {

    const { pinnedPost, setPinnedPost, postInfo, postSize, gridSize, layout, setGridSize, setPostSize, likes, setLikes, reblogs, setReblogs, setPostInfo } = useContext(ThemeContext)
    const [active, setActive] = useLocalStorage('activeInfo', '')

    function enableInteractions(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) {
        if (type === 'likes') {
            setLocalStorage('likes', setLikes, !likes)
        }
        else {
            setLocalStorage('reblogs', setReblogs, !reblogs)
        }
    }

    function changeLocation(event: React.MouseEvent<HTMLButtonElement>, location: string) {
        setLocalStorage('postInfo', setPostInfo, !postInfo);
        setLocalStorage('activeInfo', setActive, location)
    }

    function changeSize(event: React.FormEvent<HTMLDivElement>, type: string) {
        const element = event.currentTarget as HTMLInputElement
        const value = element.value
        if (type === 'grid') {
            setLocalStorage('gridSize', setGridSize, value)
        }
        else if (type === 'post') {
            setLocalStorage('postSize', setPostSize, value)
        }

        else if (type === 'pinned') {
            setLocalStorage('pinnedPost', setPinnedPost, value)
        }
    }
    return (
        <div className='forms'>
            <h3>Post Options</h3>
            <h4>Post size</h4>
            {layout === 'grid' ?
                <><p className='disclaimer'><i className="fas fa-exclamation-triangle"></i> Grid post sizes are based on columns</p>
                    <div className={`select-size grids`}>
                        <input id="smallGrid" type="radio" value="small" name="postSize" checked={gridSize === "small"} onChange={(event) => changeSize(event, 'grid')} /><label htmlFor='smallGrid'><i></i> <span>2 columns</span></label>
                        <input id="medGrid" type="radio" value="medium" name="postSize" checked={gridSize === "medium"} onChange={(event) => changeSize(event, 'grid')} /> <label htmlFor="medGrid"><i></i> <span>3 columns</span></label>
                    </div>
                </>
                :
                <div className={`select-size posts`}>
                    <input id="smallPost" type="radio" value="small" name="postSize" checked={postSize === "small"} onChange={(event) => changeSize(event, 'post')} /> <label htmlFor='smallPost'><i></i> <span>400px</span></label>
                    <input id="medPost" type="radio" value="medium" name="postSize" checked={postSize === "medium"} onChange={(event) => changeSize(event, 'post')} /> <label htmlFor="medPost"><i></i>  <span>540px</span></label>
                    <input id="largePost" type="radio" value="large" name="postSize" checked={postSize === "large"} onChange={(event) => changeSize(event, 'post')} />  <label htmlFor="largePost"><i></i> <span>700px</span></label>
                </div>
            }
            <div className='flex'>
                <label className='half' htmlFor='postInfo'>Post info location</label>
                <div className={`info-switch post-info-switch ${active}-active`}>
                    <button className={active === 'top' ? 'active-button' : 'inactive-button'} name="postInfo" id="postInfoTop" onClick={(event) => changeLocation(event, 'top')}>
                        Top
                    </button>
                    <button className={active !== 'top' ? 'active-button' : 'inactive-button'} name="postInfo" id="postInfoBottom" onClick={(event) => changeLocation(event, 'bottom')}>
                        Bottom
                    </button>
                </div>
            </div>
            <div className='like-reblog-options'>
                <div className="flex">
                    <label className='half'>Likes</label>
                    <button className={`toggle-button toggle-${likes}`} onClick={(event) => enableInteractions(event, 'likes')}>Toggle Likes</button>
                </div>
                <div className='flex'>
                    <label className='half'>Reblogs</label>
                    <button className={`toggle-button toggle-${reblogs}`} onClick={(event) => enableInteractions(event, 'reblogs')}>Toggle Reblogs</button>
                </div>
            </div>
            <h4>Pinned Post styles</h4>
            <div className={`select-size post`}>
                    <input id="pinnedDefault" type="radio" value="default" name="pinnedPost" checked={pinnedPost === "default"} onChange={(event) => changeSize(event, 'pinned')} /> <label htmlFor='pinnedDefault'><i></i> <span>Default</span></label>
                    <input id="pinnedPin" type="radio" value="pin" name="pinnedPost" checked={pinnedPost === "pin"} onChange={(event) => changeSize(event, 'pinned')} /> <label htmlFor="pinnedPin"><i></i>  <span>Pin</span></label>
                    <input id="pinnedTape" type="radio" value="tape" name="pinnedPost" checked={pinnedPost === "tape"} onChange={(event) => changeSize(event, 'pinned')} />  <label htmlFor="pinnedTape"><i></i> <span>Tape</span></label>
                </div>
        </div>
    )
}

export { PostOptions }