import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../App";

const GetCode = () => {

    const { navLocation, layout, sidebar, header, footer, titleLocation, descriptionLocation, postInfo, likes, reblogs } = useContext(ThemeContext)

    const [sideBg, setsideBg] = useState('#fff');
    const side = document.getElementById('sidebarBg') as HTMLInputElement

    const title =
        `
                    <h2>{Title}</h2>
                    `
const pages = 
        `
            {block:HasPages}
            <div class="pages-container">
                {block:Pages}
                    <a href="{URL}">{Label}</a>
                {/block:Pages}
                </div>
            {/block:HasPages}
        `          
    const nav = 
        `
           <div class="nav-container">
                <a href="/">{lang:Home}</a>
                {block:askenabled}
                <a href="/ask">Ask</a>
                {/block:askenabled}
                {block:submissionsenabled}
                <a href="/submit">Submit</a>
                {/block:submissionsenabled}
                <a href="/archive">Archive</a>
           </div> 
        `         + pages       
      

    const description = `<div class="description">{Description}</div>`

    useEffect(() => {
        if (side != null)
            setsideBg(side.value)
    }, [sidebar, side])

    const codeRef = useRef<HTMLPreElement>(null)
    const copyCode = async () => {
        try {
            const content = codeRef.current?.innerText;
            if(content != null) {
            navigator.clipboard.writeText(content);
            }
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <>   <button onClick={copyCode}>
            Copy code
        </button>
            <code>
                <pre ref={codeRef}>
                    {`<!DOCTYPE html>
    <html> 
        <head>
            <title>{Title}</title>
            <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="shortcut icon" href="{Favicon}">
            <link rel="alternate" type="application/rss+xml" href="{RSS}">
            {block:Description}<meta name="description" content="{MetaDescription}" />{/block:Description}
            {block:Options}
            <meta name="color:background" content="#fff"/>
            <meta name="color:text" content="#000"/>
            <meta name="color:borders" content="#ddd"/>
            <!-- text -->
            <meta name="text:border width" content="1px"/>
            <!-- images -->
            <meta name="image:background" content=""/>
            {/block:Options}
            {NewPostStyles}
             <style>
                * {
                    box-sizing: border-box;
                }
                :root {
                    --background: {color:background};
                    --accent: {AccentColor};
                    --text: {color:text};
                    --borders: {color:borders};
                    --spacing: 1rem;
                    --border-width: {text:border width};
                }
                body {
                    font-family: sans-serif;
                    margin: 0;
                    height: 100vh;
                    color: var(--text);
                    background: {color: background};
                }

                main, .pagination {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    justify-content: space-around;
                }

                article, .pagination {
                    width: 100%;
                    max-width: 700px;
                    margin: calc(var(--spacing) * 4) auto;
                    border: var(--border-width) solid var(--borders);
                    border-radius: .4rem;
                }

                article img {
                    max-width: 100%;
                }

                .contained main {
                    width: 100%;
                    max-width: 1000px;
                    height: 70vh;
                    margin: 1rem auto;
                    overflow: auto;
                    border: var(--border-width) solid var(--borders);
                }

                .contained article {
                    max-width: 500px;
                }

                .original-post, .reblogs, .tags, .post-info, .pagination, .quote-container, .replies, .question {
                    padding: var(--spacing);
                }

                .quote-container, .replies, .question {
                    border: var(--border-width) solid var(--borders);
                    margin: var(--spacing);
                }

                .description, aside h2 {
                    padding: var(--spacing) 0;
                    margin: 0;
                }

                .post-info, .like-and-reblog, .contained {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                }
    ${sidebar ? `
                aside {
                    width: calc(30% - calc(var(--spacing) * 2));
                    height:100vh;
                    position: sticky;
                    top: 0;
                }

                .sidebar-container {
                    background: ${sideBg};
                    margin: calc(var(--spacing) * 4) auto 0 auto;
                    border: var(--border-width) solid var(--borders);
                    padding:var(--spacing);
                    max-width: 300px;
                }
                section {
                    width: 70%;
                }
                ` : `
                 section {
                    width: 100%;
                 }
                `}

                ${reblogs && likes ? `
                    .reblog_button {
                        margin-right: .4rem;
                    } 
                ` : ``}

                .pages-container, .nav-container {
                    margin: calc(var(--spacing) /4) 0;
                }
                .pages-container a, .nav-container a, .pagination a, .tags a {
                    display: inline-block;
                    margin-right: .4rem;
                    color: var(--text);
                }

                .tumblr_audio_player {
                    width: 100%;
                }
                {CustomCSS}
            </style>
        </head>
        <body class="${layout} {block:homepage}home{/block:homepage}{block:tagpage}tag{/block:tagpage}{block:searchpage}search{/block:searchpage}
        {block:submitpage}submit-{/block:submitpage}{block:AskPage}ask{/block:AskPage}-page">
        `}
            {header ? <>
                        {`  <header>`}
                        {titleLocation === 'header' ? title : ''}
                        {descriptionLocation === 'header' ? description : ''}
                        {navLocation === 'header' ? nav : ''}
                        {`</header>
                `} </> : ''}
            {`<main>`}
                    {sidebar ? (<>
                        {`<aside>
                            <div class="sidebar-container">`}
                            {titleLocation === 'sidebar' ? title : ''}
                            {descriptionLocation === 'sidebar' ? description : ''}
                            {navLocation === 'sidebar' ? nav : ''}
                            {`
                            </div>
                        </aside>`}</>) : ''}
                    {`
                <section>
                    {block:Posts}
                    <!-- this removes the default source/via links  -->
                    <!-- {block:NoRebloggedFrom}
                    {block:RebloggedFrom}{ReblogParentName}{/block:RebloggedFrom}
                    {/block:NoRebloggedFrom} -->
                    {block:ContentSource}<!-- {SourceURL}
                    {block:SourceLogo}<img src="{BlackLogoURL}"width="{LogoWidth}" height="{LogoHeight}" alt="{SourceTitle}" />{/block:SourceLogo}
                    {block:NoSourceLogo}{SourceLink}{/block:NoSourceLogo} -->
                    {/block:ContentSource}
                    <article id="{PostID}">
                        ${postInfo ? (
                            `{block:Date}<div class="post-info">
                                <div class="note-info">
                                    <a href="{Permalink}">Posted {timeAgo} with {NoteCountwithLabel}</a></div> 
                                ${likes || reblogs
                                ? `<div class="like-and-reblog"> ${reblogs ? '{ReblogButton}' : ''} ${likes ? '{LikeButton}' : ''}</div>`
                                : ''}
                                </div>{/block:Date}`)
                            : ''}  
                        <!-- photo, photoset, and panorama posts -->           
                                {block:Photo}
                                    <img src="{PhotoURL-HighRes}" alt="{photoalt}" class="photos">
                                {/block:Photo}

                                {block:Photoset}
                                    {Photoset}
                                {/block:Photoset}
                                    
                                {block:Panorama}
                                    <img src="{photourl-panorama}" alt="{photoalt}">
                                {/block:Panorama}
                                
                        <!-- quote posts -->            
                                {block:Quote}
                                    <div class="quote-container">
                                        <div class="quote">
                                            "{Quote}"
                                        </div>
                                        <div class="source">
                                            -{Source}
                                        </div>
                                    </div>
                                {/block:Quote}
                                
                        <!-- chat posts -->            
                                {block:Chat}
                                    <ul class="chat">
                                        {block:Lines}
                                            <li>
                                                {block:Label}{Label}{/block:Label} 
                                                {Line}
                                            </li>
                                        {/block:Lines}
                                    </ul>
                                {/block:Chat}

                        <!-- link posts -->
                                {block:link}
                                    <div class="link">
                                        <a href="{URL}">
                                            {Name}
                                        </a>
                                    </div>
                                {/block:link}
                                    
                        <!-- vidoe and audio -->            
                                {block:Video}
                                    {Video-700}
                                {/block:Video}
                                    
                                {block:Audio}
                                    {audioembed}
                                {/block:Audio}
                                
                        <!-- Answer posts -->            
                                {block:Answer}
                                    <div class="question">
                                        {Asker}: {Question}
                                    </div>
                                    {block:Answerer}
                                    <div class="replies">
                                        {Answerer}: {Answer}
                                    </div>
                                    {/block:Answerer}
                                {block:NotReblog}
                                    <div class="replies">
                                        {Replies}
                                    </div>
                                {/block:NotReblog}
                                {/block:Answer}
                                <!-- captions  -->
                                <div class="caption {block:notreblog} original-post {/block:notreblog}">
                                    {block:Text}
                                        {block:Title}<h2>{Title}</h2>{/block:Title}
                                    {/block:Text}
                                    {block:notreblog}
                                    {block:caption}{Caption}{/block:caption}
                                    {block:Text}{body}{/block:Text}
                                    {/block:notreblog}
                                    {block:Rebloggedfrom}
                                        {block:Reblogs}
                                        <div class="reblogs">
                                            <div class="reblog-header">
                                                <a href="{permalink}" {block:isdeactivated}class="inactive"{/block:isdeactivated}>
                                                        {username}
                                                    </a>
                                            </div>
                                            <div class="reblog-content">
                                                {Body}
                                            </div>
                                        </div>
                                        {/block:Reblogs}
                                    {/block:RebloggedFrom}
                                </div>
                            ${!postInfo ? (
                            `{block:Date}<div class="post-info">
                                <div class="note-info">
                                    <a href="{Permalink}">Posted {timeAgo} with {NoteCountwithLabel}</a></div> 
                                </div> 
                                ${likes || reblogs
                                ? `<div class="like-and-reblog"> ${reblogs ? '{ReblogButton}' : ''} ${likes ? '{LikeButton}' : ''}</div>`
                                : ''}
                                </div>{/block:Date}`)
                            : ''}  
                            {block:Hastags}
                            <div class="tags">
                                {block:Tags}
                                <a href="{TagURL}">#{Tag}</a>
                                {/block:Tags}
                            </div>
                        {/block:Hastags}
                        {PostNotes}
                    </article>
                    {/block:Posts}
                    {block:Pagination}
                    <div class="pagination flex centered">
                        {block:previouspage}
                        <a href="{previouspage}">Prev</a>
                        {/block:previouspage}
                        {block:nextpage}
                        <a href="{nextpage}">Next</a>
                        {/block:nextpage}
                    </div>
                    {/block:pagination}
                </section>
                ${footer ? `<footer>
                ${titleLocation === 'footer' ? title : ''}
                ${descriptionLocation === 'footer' ? description : ''}
                ${navLocation === 'footer' ? nav : ''}
                </footer>` : ''}
                </body>
                </main>
                </html>
            `}
                </pre>
            </code>
        </>
    )

}

export { GetCode }