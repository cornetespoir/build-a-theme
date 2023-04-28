import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../App";
import { title, nav, description, pages, search} from "./snippets";

const GetCode = () => {

    const { pagi, pinnedPost, daynight, searchBar, customCursor, sideImage, sidebarLocation, sidebarStyle, gridSize, postSize, navLocation, layout, sidebar, header, footer, titleLocation, descriptionLocation, postInfo, likes, reblogs, keyboardNav } = useContext(ThemeContext)
    const [pop, setPop] = useState(false);

    const codeRef = useRef<HTMLPreElement>(null)
    const copyCode = async () => {
        try {
            const content = codeRef.current?.innerText;
            if (content != null) {
                navigator.clipboard.writeText(content);
                setPop(true)
                setTimeout(() => {
                    setPop(false)
                }, 2000)

            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <h2>How to use your code:</h2>
            <ol>
                <li>You will need to use the code below in your theme editor.
                </li>
                <li>
                    Open your theme editor (tumblr.com/customize), click on "Edit HTML"
                </li>
                <li>
                    Select all of the code that is already there and replace it with the new code you just copied
                </li>
                <li>Save and exit the code editor to start further customizing your theme based on the options you selected </li>
            </ol>

            <button className='clip' onClick={copyCode}>
                Copy code to clipboard <i className="far fa-clipboard"></i>
            </button>
            {pop && <div className='copy'>Copied!</div>}
            <div className="code">
                <code>
                    <pre ref={codeRef}>
                        {`<!DOCTYPE html>
    <!-- A custom theme built by eggdesign's theme builder (buildatheme.tumblr.com) -->
    <html> 
        <head>
            <title>{Title}</title>
            <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="shortcut icon" href="{Favicon}">
            <link rel="alternate" type="application/rss+xml" href="{RSS}">
            {block:Description}<meta name="description" content="{MetaDescription}" />{/block:Description}
            {block:Options}
            <meta name="color:background" content="#fff"/>
            <meta name="color:posts" content="#fff"/>
            <meta name="color:text" content="#000"/>
            <meta name="color:links" content="#000" />
            <meta name="color:tags" content="#000" />
            <meta name="color:sidebar links" content="{AccentColor}"/>
            <meta name="color:search background" content="#fff" />
            <meta name="color:search text" content="#000"/>
            <meta name="color:borders" content="#ddd"/>`}
                        {layout === 'contained' && `
            <meta name="color:container background" content="#fff"/>`}
                        {pinnedPost === 'tape' && `
            <meta name="color:tape background" content="#fff"/>`}
                {`
            <meta name="text:border width" content="1px"/>
            <meta name="text:border radius" content="4px"/>
            <meta name="text:font size" content="16px" />
            <meta name="image:background" content=""/>`}
                        {sideImage !== 'default' && `
            <meta name="image:side image" content=""/>`}
                        {customCursor && `
            <meta name="image:custom cursor" content=""/>`}
                        {layout === 'contained' && `
            <meta name="image:container background" content=""/>`}
                        {daynight && `
            <meta name="color:night mode accent" content="#fff" />
            <meta name="if:Remove background image in night mode" content=""/>`}
                        {`
            <meta name="if:full background" content=""/>
             
            <meta name="select:Font" content="Helvetica" title="Helvetica" />
            <meta name="select:Font" content="Roboto" title="Roboto" />
            <meta name="select:Font" content="Favorit" title="Favorit" />
            <meta name="select:Font" content="Calluna" title="Calluna" />
            <meta name="select:Font" content="Fairwater" title="Fairwater" />
            <meta name="select:Font" content="Source Code Pro" title="Source Code Pro" />
            {/block:Options}

            {NewPostStyles}`}
            {daynight && `
            <script>
                const themed = localStorage.getItem('night-mode');
                if (themed === "enabled") {
                    sessionStorage.setItem('night-mode', 'enabled');
                    document.documentElement.classList.add('night-mode-theme');
                }
            </script>
            <script src="https://static.tumblr.com/svdghan/gFJrolu7g/daynight.js"></script>
            `} {`
             <style>
             @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');

                * {
                    box-sizing: border-box;
                }
                :root {
                    --background-image:  url({image:background});
                    --background: {color:background};
                    --accent: {AccentColor};
                    --text: {color:text};
                    --borders: {color:borders};
                    --spacing: 1rem;
                    --border-width: {text:border width};
                    --border-radius: {text:border radius};
                    --posts: {color:posts};
                    --tags: {color:tags};
                    --links: {color:links};
                    --sidebar-links: {color:sidebar links};
                    --search-background: {color:search background};
                    --search-text: {color:search text};
                    --headerimage: url({HeaderImage}); `}
                        {pinnedPost === 'tape' && `
                     --tape: {color:tape background};
                    `}
                        {daynight ? `
                    --invert: invert(0);
                    --night-mode-accent: {color:night mode accent};
                    ` : ``} {`
                }
                ${daynight ? `
                .night-mode-theme {
                    --background: #000!important;
                    --accent: var(--night-mode-accent);
                    {block:ifRemoveBackgroundImageInNightMode}
                    --background-image: url('');
                    {/block:ifRemoveBackgroundImageInNightMode}
                    --text: white;
                    --posts: #222;
                    --invert: invert(1);
                    --links: var(--night-mode-accent);
                    --tags: var(--night-mode-accent);
                }
                `: ``}
                body {
                    font-family: {select:Font}, sans-serif;
                    font-size: clamp(.92rem, {text:font size}, 20px);
                    margin: 0;
                    height: 100vh;
                    color: var(--text);
                    background: var(--background) var(--background-image) center center fixed;
                    {block:iffullbackground}
                    background-size: cover;
                    {/block:iffullbackground}`}
                    {customCursor && `cursor:url({image:custom cursor}), auto;`}
                {
                `}
                `}
                {customCursor && `
                a:hover {cursor:url({image:custom cursor}), auto;}`}
                {sideImage === 'left' ? `
                #side-image {position:fixed; left: var(--spacing); bottom: var(--spacing);}
                `: sideImage === 'right' ? `
                #side-image {position:fixed; right: var(--spacing); bottom: var(--spacing);}
                ` : ``}
                {sideImage !== 'default' && `
                #side-image img {
                    max-width:350px;
                }`}
                {`
                a {
                    color: var(--links);
                }
                `}
                        {header && `
                header {
                    margin:var(--spacing) auto;
                    max-width:1100px;
                    padding:var(--spacing);
                    background:var(--posts);
                    border: var(--border-width) solid var(--borders);
                    border-radius:var(--border-radius);
                }
                `}
                        {footer && `
                footer {
                    width:100%;
                    margin:var(--spacing) auto;
                    max-width:1100px;
                    padding:var(--spacing);
                    background:var(--posts);
                    border: var(--border-width) solid var(--borders);
                    border-radius:var(--border-radius);
                }
                `}
                        {`
                article a {
                    text-decoration: none;
                }

                article a:hover {
                    text-decoration: underline;
                }

                article iframe, .tumblr_video_container {
                    max-width: 100%;
                }

                .blog-title {
                    font-family: {TitleFont};
                }

                main, .pagination {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    justify-content: space-around;
                }

                main {
                    max-width:1100px;
                    margin:auto;
                }

                article, .pagination {
                    width: 100%;
                    position:relative;
                    max-width: ${postSize === 'small' ? '400px' : postSize === 'medium' ? '540px' : '700px'};
                    margin: calc(var(--spacing) * 4) auto;
                    border: var(--border-width) solid var(--borders);
                    border-radius: var(--border-radius);
                    background:var(--posts);
                }
                aside .pagination {
                    margin: var(--spacing) auto auto auto;
                }

                article img {
                    max-width: 100%;
                }

                .link-container {
                    padding: var(--spacing);
                    margin:var(--spacing);
                    border:var(--border-width) solid var(--borders);
                    border-radius: var(--border-radius);
                }

                .caption:empty, p:empty {
                    display:none;
                }

                .reblog-header a {
                    display: flex;
                    align-items:center;
                }

                .reblog-header img {
                    padding-right: .4rem;
                    max-height: 1.4rem;
                }
                .contained :is(header, footer, main) {
                    width: 100%;
                    max-width: 1000px;
                    margin: 1rem auto;
                    background: var(--background);
                    border: var(--border-width) solid var(--borders);
                }

                .contained header {
                    margin-bottom: 0;
                    padding: var(--spacing);
                }
                .contained main {
                    height: 70vh;
                    overflow: auto;
                    ${layout === 'contained' ? `background: {color:container background} url({image:container background})` : ''}
                }

                .contained article, .contained .pagination {
                    max-width: 500px;
                }

                .grid main {
                    max-width: 98%;
                }

                .grid section {
                    column-count: ${gridSize === 'medium' ? '3' : '2'};
                    break-inside: avoid;
                    grid-gap: ${gridSize === 'small' ? 'calc(var(--spacing) * 2)' : 'var(--spacing)'};
                    margin-bottom:var(--spacing);
                }

                .grid article {
                    display: inline-block;
                    max-width: ${gridSize === 'small' ? 'calc(100% - var(--spacing))' : 'calc(100% - (var(--spacing) / 2))'};
                    margin: var(--spacing) 0;
                }

                .original-post, .reblog-header, .tags, .post-info, .pagination, .quote-container, .replies, .question {
                    padding: var(--spacing);
                }

                .reblog-content p, .reblog-content h2, .reblog-content h1 {
                    margin-left: var(--spacing);
                    margin-right: var(--spacing);
                }

                .quote-container, .replies, .question {
                    border: var(--border-width) solid var(--borders);
                    margin: var(--spacing);
                }

                .description, aside h2 {
                    padding: calc(var(--spacing) /2) 0;
                    margin: 0;
                }`}
                {searchBar !== '' && `
                   #search-form input {
                    padding: calc(var(--spacing) / 2);
                    width:100%;
                    background:var(--search-background);
                    margin: calc(var(--spacing) /2) 0 0 0;
                    border:var(--border-width) solid var(--borders);
                    border-radius:var(--border-radius);
                    color:var(--search-text);
                 }
                ::placeholder {
                     color:var(--search-text);
                 }
                `}
                        {`
                .post-info, .like-and-reblog, .contained {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                }
                .pinned {
                    font-weight:bold;
                    color:var(--accent);
                }

                .pinned {
                    font-weight:bold;
                }${pinnedPost === 'pin' ? `
                .pinned-pin {
                    position: absolute;
                    right: 0;
                    top:-4px;
                    padding:0;
                    transform:rotate(45deg);
                  }
                  
                  .pinned-pin i {
                    width:2px;
                    font-size:0;
                    color:transparent;
                    height:.4rem;
                    background:var(--accent)!important;
                    display:block;
                    position:absolute;
                    left:0;
                    margin-left:calc(50% - 1px);
                    margin-top:-.4rem;
                  }
                  .pinned-pin:before, .pinned-pin:after {
                    content:'';
                    border-radius:.2rem;
                    display:block;
                    transform:translate(0, -1.4rem);
                    border:7px solid transparent;
                    border-bottom:10px solid var(--accent);
                  }
                  
                  .pinned-pin:before {
                    transform:translate(0,0);
                    border-bottom-color: transparent;
                    border-top:10px solid var(--accent);
                  }
                ` : pinnedPost === 'tape' ? `
                .pinned-tape {
                    color:transparent;
                    width: 40%;
                    position: absolute;
                    height: 1.6rem;
                    display: block;
                    box-shadow: 0px 1px 2px rgba(0, 0, 0, .08);
                    background: var(--tape);
                    border-bottom-right-radius: 2px;
                    transform: skew(6deg) rotateZ(-1deg);
                    border-radius: 6px/14px 0;
                    z-index: 2;
                    opacity: .2;
                    top: -.8rem;
                    margin-left: -20%;
                    left: 50%;
                  
                }
                  
                ` : `
                .pinned-default {
                    padding:var(--spacing);
                }
                `}   
                .like-and-reblog .reblog_button, .like-and-reblog .like_button:not(.liked) {
                    filter: var(--invert);
                }`}

    {sidebar ? `
                aside {
                    width: calc(30% - calc(var(--spacing) * 2));
                    height:100vh;
                    position: sticky;
                    top: 0;
                }

                .sidebar-container {
                    background: var(--posts);
                    margin: calc(var(--spacing) * 4) auto 0 auto;
                    border: var(--border-width) solid var(--borders);
                    padding:var(--spacing);
                    max-width: 300px;
                    border-radius: var(--border-radius);
                }
                .sidebar-style-dash {
                    padding:0;
                    text-align:center;
                }

                .sidebar-style-dash .pagination {
                    border:0 solid transparent;
                }
                .sidebar-style-dash :is(h2, div){
                    padding:var(--spacing);
                }
                .sidebar-style-dash h2 + div, .sidebar-style-dash div + div {
                    padding-top:0;
                  }

                .sidebar-style-bubble {
                    padding: 0;
                    border: 0;
                    background:transparent;
                }
                
                .bubble {
                    display:flex;
                    flex-wrap:wrap;
                    align-items:center;
                }
            
                .bubble-desc {
                    border:var(--border-width) solid var(--borders);
                    padding: var(--spacing);
                    width:100%;
                    background:var(--posts);
                    border-radius:.6rem;
                    border-top-left-radius:0;
                    margin:var(--spacing) 0;
                }

                .header-image {
                    margin-bottom: 24px!important;
                }
                
                .sidebar-style-bubble img {
                    width:48px;
                    border-radius:50%;
                    margin-right:.4rem;
                }

                 {block:ShowHeaderImage}
                  {block:ShowAvatar}
                    .header-image + * {
                        margin-top:24px;
                    }
                  {/block:ShowAvatar}
                  {/block:ShowHeaderImage}

                .header-image img {
                    width:48px;
                    background:#facade;
                    height:48px;
                    {block:ShowHeaderImage}
                    position:absolute;
                    bottom: -24px;
                    {/block:ShowHeaderImage}
                    border-radius:50%;
                }
                section {
                    width: 70%;
                }

                .contained section {
                    width:60%;
                }

                .header-image {
                    position: relative;
                    {block:ShowHeaderImage}
                    display:flex;
                    width:100%;
                    justify-content:center;
                    background: var(--headerimage) center center;
                    aspect-ratio: 3/1;
                    background-size:cover;
                    {/block:ShowHeaderImage}
                }` : `
                 section {
                    width: 100%;
                 }
                `}
                {reblogs && likes && `
                    .reblog_button {
                        margin-right: .6rem;
                    } 
                    .like_button {
                        height:20px;
                    }
                `}
                {header && `
                    header {
                        width: 100%;
                    }
                `}{`
                .pages-container, .nav-container {
                    margin: calc(var(--spacing) /4) 0;
                }
                .pages-container a, .nav-container a, .pagination a, .tags a {
                    display: inline-block;
                    margin-right: .4rem;
                    color: var(--text);
                    text-decoration:none;
                }

                aside a {
                    color: var(--sidebar-links);
                }

                .tags a {
                    color: var(--tags);
                }

                .pages-container a {
                    font-weight:bold;
                    color:var(--accent);
                }

                .reblogs a, .caption a {
                    color:var(--accent);
                }

                .tumblr_audio_player {
                    width: 100%;
                }

                @media only screen and (max-width: 1100px) {
                    main, .contained main, section {
                        width: 100%;
                        height: auto;
                    }
                    `}
                    {sidebar && ` aside, .sidebar-container{
                        width: 100%;
                        max-width:100%;
                        height: auto;
                        position:relative;
                    }
                    .sidebar-container {
                        max-width:90%;
                        margin:var(--spacing) auto;
                    }
                    `}
                    {`
                    article {
                        max-width:90%;
                        margin: var(--spacing) auto;
                    }
                    ${sideImage !== 'default' ? `#side-image {display: none;}` : ''}
                    .grid section {
                        column-count: 1;
                    }

                }

                .screen-reader {
                    border: 0;
                    clip: rect(1px, 1px, 1px, 1px);
                    clip-path: inset(50%);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                    word-wrap: normal !important;
                }`}
                {daynight && `
                #daynight-toggle {
                    cursor:pointer;
                    background:;
                    position:fixed;
                    top:var(--spacing);
                    left:var(--spacing);
                    z-index:2;
                    height:2rem;
                    width:2rem;
                    border-radius:50%;
                    background:white;
                    display:flex;
                    border:var(--border-width) solid var(--borders);
                    flex-wrap:wrap;
                    justify-content:center;
                    align-items:center;
                }
                
                #daynight-toggle:before {
                    content:'☀';
                }
                
                #daynight-toggle.night-mode-toggle:before {
                  content:'';
                  width:1rem;
                  height:1rem;
                  transform:translate(-.32rem, -.32rem);
                  border-radius: 50%;
                  box-shadow: .32rem .32rem 0 0 black;
                }
                `}
                {`
                {CustomCSS}
            </style>
        </head>
        <body class="${layout} {block:homepage}home{/block:homepage}{block:tagpage}tag{/block:tagpage}{block:searchpage}search{/block:searchpage}{block:submitpage}submit-{/block:submitpage}{block:AskPage}ask{/block:AskPage}-page">`}
                {daynight && `
            <button id="daynight-toggle"><span class="screen-reader">toggle day and night mode</span></button>`}
                        {sideImage !== 'default' && `<div id="side-image"><img src="{image:side image}"></div>`}
                        {header && <>
                            {`  <header>`}
                            {titleLocation === 'header' ? title : ''}
                            {descriptionLocation === 'header' ? description : ''}
                            {navLocation === 'header' ? nav + pages : ''}
                            {searchBar === 'header' ? search : ''}
                            {`</header>
                `} </>}
                {`
            <main>`}
                        {sidebar && !sidebarLocation ? (<>
                            {`
            <aside>
                <div class="sidebar-container sidebar-style-${sidebarStyle}">
                        `}
                            {sidebarStyle === 'dash' ?
                                <>
                                    {`<div class="header-image">${searchBar === 'sidebar' ? search : ''} {block:ShowAvatar}<img src="{PortraitURL-128}">{/block:ShowAvatar}</div>`}
                                    {titleLocation === 'sidebar' ? title : ''}
                                    {descriptionLocation === 'sidebar' ? description : ''}
                                    {navLocation === 'sidebar' ? nav + pages : ''}
                                </>
                                : sidebarStyle === 'bubble' ?
                                    <>
                                        {`<div class="bubble">
                                    {block:ShowAvatar}<a href="/"><img src="{PortraitURL-128}"></a>{/block:ShowAvatar} <a href="/">@{name}</a>
                                    <div class="bubble-desc">`}
                                        {titleLocation === 'sidebar' ? `
                                        ${title}
                                            ` : ''}
                                        {descriptionLocation === 'sidebar' ? description : ''}
                                        {navLocation === 'sidebar' ? pages : ''}
                                        {searchBar === 'sidebar' ? search : ''}
                                        {`</div>`}
                                        {navLocation === 'sidebar' ? nav : ''}
                                        {`</div>`}
                                    </>
                                    : <>
                                        {titleLocation === 'sidebar' ? title : ''}
                                        {descriptionLocation === 'sidebar' ? description : ''}
                                        {navLocation === 'sidebar' ? nav : ''}
                                        {searchBar === 'sidebar' ? search : ''}
                                    </>
                            }
                            {pagi === 'sidebar' ? `
                {block:Pagination}
                <div class="pagination flex centered">
                    {block:previouspage}
                    <a href="{previouspage}">Prev</a>
                    {/block:previouspage}
                        {block:JumpPagination length="5"}
                            {block:CurrentPage}
                            <span class="current-page">
                                {PageNumber}
                            </span>
                            {/block:CurrentPage}
                            {block:JumpPage}
                            <a href="{URL}">
                                {PageNumber}
                            </a>
                            {/block:JumpPage}
                        {/block:JumpPagination}
                    {block:nextpage}
                    <a href="{nextpage}">Next</a>
                    {/block:nextpage}
                </div>
                {/block:Pagination}
                `: ``}
                            {`
                    </div>    
                </aside>`}</>) : ''}
                        {`
                <section>
                    {block:SearchPage}
                        <article>
                            <div class="reblogs">{lang:Found SearchResultCount results for SearchQuery}</div>
                        </article>
                    {/block:SearchPage}
                    {block:TagPage}
                        <article>
                            <div class="reblogs">{lang:Showing TagResultCount posts tagged Tag}</div>
                        </article>
                    {/block:TagPage}
                    {block:DayPage}
                        <article>
                            <div class="reblogs">{lang:Viewing everything posted on Month DayOfMonth Year}</div>
                        </article>
                    {/block:DayPage}
                    {block:Posts}
                    <!-- {block:NoRebloggedFrom}
                    {block:RebloggedFrom}{ReblogParentName}{/block:RebloggedFrom}
                    {/block:NoRebloggedFrom} -->
                    {block:ContentSource}<!-- {SourceURL}
                    {block:SourceLogo}<img src="{BlackLogoURL}"width="{LogoWidth}" height="{LogoHeight}" alt="{SourceTitle}" />{/block:SourceLogo}
                    {block:NoSourceLogo}{SourceLink}{/block:NoSourceLogo} -->
                    {/block:ContentSource}
                    <article id="post-{PostID}">
                        {block:PinnedPostLabel}<div class="pinned pinned-${pinnedPost}"><i></i>${pinnedPost === 'default' ? '{PinnedPostLabel}' : ''}</div>{/block:PinnedPostLabel}
                        ${postInfo ? (
                                `{block:Date}<div class="post-info">
                                <div class="note-info">Posted <a href="/day/{year}/{MonthNumberWithZero}/{DayOfMonth}">{TimeAgo}</a> with <a href="{Permalink}"> {NoteCountwithLabel}</a></div> 
                                ${likes || reblogs
                                    ? `<div class="like-and-reblog"> ${reblogs ? '{ReblogButton}' : ''} ${likes ? '{LikeButton}' : ''}</div>`
                                    : ''}
                                </div>{/block:Date}`)
                                : ''} 
                                
                                {block:RebloggedFrom}
                                    <div class="reblog-header">
                                        <a href="{permalink}" {block:isdeactivated}class="inactive"{/block:isdeactivated}>
                                        <img src={ReblogRootPortraitURL-64} alt="{ReblogRootName}">  {ReblogRootName}
                                        </a>
                                    </div>
                                {/block:RebloggedFrom}
                                {block:Photo}
                                    <img src="{PhotoURL-HighRes}" alt="{photoalt}" class="photos">
                                {/block:Photo}

                                {block:Photoset}
                                    {Photoset}
                                {/block:Photoset}
                                    
                                {block:Panorama}
                                    <img src="{photourl-panorama}" alt="{photoalt}">
                                {/block:Panorama}
                                         
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

                                {block:link}
                                    <div class="link-container">
                                        <a href="{URL}">
                                            {Name}
                                        </a>
                                    </div>
                                {/block:link}
                                              
                                {block:Video}
                                    {Video-700}
                                {/block:Video}
                                    
                                {block:Audio}
                                    {audioembed}
                                {/block:Audio}
         
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
                                        {block:IsNotOriginalEntry} 
                                            <div class="reblog-header">
                                                <a href="{permalink}" {block:isdeactivated}class="inactive"{/block:isdeactivated}>
                                                      <img src={PortraitURL-64} alt="{username}">  {username}
                                                    </a>
                                            </div>
                                        {/block:IsNotOriginalEntry} 
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
                                    <a href="{Permalink}">Posted <a href="/day/{year}/{MonthNumberWithZero}/{DayOfMonth}">{TimeAgo}</a> with <a href="{Permalink}"> {NoteCountwithLabel}</a></div>
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
                    `}
                {pagi === 'posts' && ` 
                {block:Pagination}
                <div class="pagination flex centered">
                    {block:previouspage}
                    <a href="{previouspage}">Prev</a>
                    {/block:previouspage}
                        {block:JumpPagination length="5"}
                            {block:CurrentPage}
                            <span class="current-page">
                                {PageNumber}
                            </span>
                            {/block:CurrentPage}
                            {block:JumpPage}
                            <a href="{URL}">
                                {PageNumber}
                            </a>
                            {/block:JumpPage}
                        {/block:JumpPagination}
                    {block:nextpage}
                    <a href="{nextpage}">Next</a>
                    {/block:nextpage}
                </div>
                {/block:Pagination}
                `}
                {` </section>`}
                        {sidebar && sidebarLocation && (<>
                            {`
            <aside>
                <div class="sidebar-container sidebar-style-${sidebarStyle}">
                        `}
                            {sidebarStyle === 'dash' ?
                                <>
                                    {`<div class="header-image">${searchBar === 'sidebar' ? search : ''}
                        <img src="{PortraitURL-128}"></div>`}
                                    {titleLocation === 'sidebar' ? title : ''}
                                    {descriptionLocation === 'sidebar' ? description : ''}
                                    {navLocation === 'sidebar' ? nav + pages : ''}
                                </>
                                : sidebarStyle === 'bubble' ?
                                    <>
                                        {`<div class="bubble">
                                    <a href="/"><img src="{PortraitURL-128}"></a> <a href="/">@{name}</a>
                                    <div class="bubble-desc">`}
                                        {titleLocation === 'sidebar' ? title : ''}
                                        {descriptionLocation === 'sidebar' ? description : ''}
                                        {navLocation === 'sidebar' ? pages : ''}
                                        {searchBar === 'sidebar' ? search : ''}
                                        {`</div>`}
                                        {navLocation === 'sidebar' ? nav : ''}
                                        {`</div>`}
                                    </>
                                    : <>
                                        {titleLocation === 'sidebar' ? title : ''}
                                        {descriptionLocation === 'sidebar' ? description : ''}
                                        {navLocation === 'sidebar' ? nav : ''}
                                        {searchBar === 'sidebar' ? search : ''}
                                    </>
                            }
                            {pagi === 'sidebar' ? `
                {block:Pagination}
                <div class="pagination flex centered">
                    {block:previouspage}
                    <a href="{previouspage}">Prev</a>
                    {/block:previouspage}
                        {block:JumpPagination length="5"}
                            {block:CurrentPage}
                            <span class="current-page">
                                {PageNumber}
                            </span>
                            {/block:CurrentPage}
                            {block:JumpPage}
                            <a href="{URL}">
                                {PageNumber}
                            </a>
                            {/block:JumpPage}
                        {/block:JumpPagination}
                    {block:nextpage}
                    <a href="{nextpage}">Next</a>
                    {/block:nextpage}
                </div>
                {/block:Pagination}
                `: ``}
                            {`
                        </div>
                </aside>`}</>)}
                        {footer && `<footer>
                ${titleLocation === 'footer' && title }
                ${descriptionLocation === 'footer' && description }
                ${navLocation === 'footer' && nav}
                ${searchBar === 'footer' && search}
                </footer>`}
                        {`</main>${layout !== 'grid' && keyboardNav ? `  
                <script src="https://static.tumblr.com/svdghan/uIEropkzb/keyboardscrolling.js"></script>` : ``}
            </body>
        </html>
            `}
                    </pre>
                </code>
                <button className="hovercopy" onClick={copyCode}><i className="fas fa-clone"></i></button>
            </div>
        </>
    )

}

export { GetCode }