import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { Containers } from "./Containers";
import { PostInfo } from "./PostInfo";
import { SamplePost } from "./SamplePost";

interface PreviewProps {
    className?: string
}
const Preview = ({ className }: PreviewProps) => {
    const { gridSize, postSize, navLocation, sidebar, header, footer, setFooter, setHeader, titleLocation, descriptionLocation, postInfo, layout } = useContext(ThemeContext)

    const [postType, setPostType] = useState("Text");

    function addSections(type: string) {
        if (type === 'footer') {
            setFooter(!footer)
        }

        else {
            setHeader(!header)
        }
    }

    function changePostType(event: React.FormEvent<HTMLDivElement>) {
        const element = event.currentTarget as HTMLInputElement
        const value = element.value
        setPostType(value)
    }


    return (
        <div id='preview-frame'>
            {!header && <button onClick={() => addSections('header')} className='add-section'>Add Header</button>}
            {header &&
                <Containers type='header' allowDelete>
                    {titleLocation === 'header' && <h1>Title</h1>}
                    {descriptionLocation === 'header' && <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
                    {navLocation === 'header' && <div className='link-container'><a href="/">Home</a> <a href="/">Ask</a> <a href="/">Archive</a></div>}
                </Containers>}
            <main className={`sidebar-${sidebar} layout-${layout} ${layout === 'grid' && `grid-${gridSize}`} post-${postSize}`}>
                {sidebar &&
                    <aside className='sidebar' id='sidebar'>
                        {titleLocation === 'sidebar' && <h1>Title</h1>}
                        {descriptionLocation === 'sidebar' && <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
                        {navLocation === 'sidebar' && <div className='link-container'><a href="/">Home</a> <a href="/">Ask</a> <a href="/">Archive</a></div>}

                    </aside>
                }
                <section>
                    <Containers type='article' className={`${postInfo && 'top-post-info'}`}>
                    <div className='post-types'>preview as:
                            <input type="radio" value="Text" name="postType" checked={postType === "Text"} onChange={(event) => changePostType(event)}/> Text
                            <input type="radio" value="Photo" name="postType" checked={postType === "Photo"} onChange={(event) => changePostType(event)}/> Photo
                            <input type="radio" value="Audio" name="postType" checked={postType === "Audio"} onChange={(event) => changePostType(event)}/> Audio
                        </div>
                        <div className='content'>
                          <SamplePost postType={postType} op={'original'}/>
                        </div>
                        <PostInfo />
                    </Containers>
                    <Containers type='article' className={`${postInfo && 'top-post-info'}`}>
                        <div className='content'>
                          <SamplePost postType={'Sample'} op={'Trail'}/>
                        </div>
                        <PostInfo />
                    </Containers>
                    <Containers type='article' className={`${postInfo && 'top-post-info'}`}>
                        <div className='content'>
                          <SamplePost postType={'SamplePhoto'} op={'Trail'}/>
                        </div>
                        <PostInfo />
                    </Containers>
                </section>
            </main>
            {!footer && <button onClick={() => addSections('footer')} className='add-section'>Add Footer</button>}
                {footer &&
                    <Containers type='footer' allowDelete>
                        {titleLocation === 'footer' && <h1>Title</h1>}
                        {descriptionLocation === 'footer' && <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
                        {navLocation === 'footer' && <div className='link-container'><a href="/">Home</a> <a href="/">Ask</a> <a href="/">Archive</a></div>}
                    </Containers>}
        </div>
    )
}

export { Preview }