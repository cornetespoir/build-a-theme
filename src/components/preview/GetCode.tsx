import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../App";

const GetCode = () => {

    const { searchBar, customCursor, sideImage, sidebarLocation, sidebarStyle, gridSize, postSize, navLocation, layout, sidebar, header, footer, titleLocation, descriptionLocation, postInfo, likes, reblogs } = useContext(ThemeContext)

    const [sideBg, setsideBg] = useState('#fff');
    const [pop, setPop] = useState(false);
    const side = document.getElementById('sidebarBg') as HTMLInputElement

    const search = `
        <form action="/search" method="get" id="search-form">
            <input type="text" name="q" class="query" value="" placeholder="Search">
        </form>`

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
        ` 


    const description = `<div class="description">{Description}</div>`

    useEffect(() => {
        if (side != null)
            setsideBg(side.value)
    }, [sidebar, side])

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
    <!-- A custom theme built by eggdesign's theme builder -->
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
            <meta name="color:borders" content="#ddd"/>`}
            {layout === 'contained' ? `
            <meta name="color:container background" content="#fff"/>
             `: ''}
            {`<!-- text -->
            <meta name="text:border width" content="1px"/>
            <meta name="text:border radius" content="4px"/>
            <!-- images -->
            <meta name="image:background" content=""/>`}
            {sideImage !== 'default' ? `
            <meta name="image:side image" content=""/>` : ''}
            {customCursor ? `
            <meta name="image:custom cursor" content=""/>` :''}
              {layout === 'contained' ? `
            <meta name="image:container background" content=""/>
             `: ''}
           {`
            <!-- boolean -->
            <meta name="if:full background" content=""/>

            {/block:Options}
            {NewPostStyles}
             <style>
             @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');

                * {
                    box-sizing: border-box;
                }
                :root {
                    --background: {color:background};
                    --background-image:  url({image:background});
                    --accent: {AccentColor};
                    --text: {color:text};
                    --borders: {color:borders};
                    --spacing: 1rem;
                    --border-width: {text:border width};
                    --border-radius: {text:border radius};
                    --posts: {color:posts};
                    --headerimage: url({HeaderImage});
                }
                body {
                    font-family: Roboto, sans-serif;
                    margin: 0;
                    height: 100vh;
                    color: var(--text);
                    background: var(--background) var(--background-image);
                    {block:iffullbackground}
                    background-size: cover;
                    background-attachment: fixed;
                    {/block:iffullbackground}
                    ${customCursor ? `cursor:url({image:custom cursor}), auto;` : ``}
                }

                ${sideImage === 'left' ? `
                #side-image {position:fixed; left: var(--spacing); bottom: var(--spacing);}
                `: sideImage === 'right' ? `
                #side-image {position:fixed; right: var(--spacing); bottom: var(--spacing);}
                ` : ``}
                ${sideImage !== 'default' ? `
                #side-image img {
                    max-width:350px;
                }` :''
                }
                a {
                    color: var(--text);
                }

                `}
                {header ? `
                header {
                    margin:var(--spacing) auto;
                    max-width:1100px;
                    padding:var(--spacing);
                    background:var(--posts);
                    border: var(--border-width) solid var(--borders);
                    border-radius:var(--border-radius);
                }
                `: ``}
                 {header ? `
                footer {
                    width:100%;
                    margin:var(--spacing) auto;
                    max-width:1100px;
                    padding:var(--spacing);
                    background:var(--posts);
                    border: var(--border-width) solid var(--borders);
                    border-radius:var(--border-radius);
                }
                `: ``}
                {`
                article a {
                    text-decoration: none;
                }

                article a:hover {
                    text-decoration: underline;
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
                    max-width: ${postSize === 'small' ? '400px' : postSize === 'medium' ? '540px' : '700px'};
                    margin: calc(var(--spacing) * 4) auto;
                    border: var(--border-width) solid var(--borders);
                    border-radius: var(--border-radius);
                    background:var(--posts);
                }

                article img {
                    max-width: 100%;
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
                    margin-bototm: 0;
                    padding: var(--spacing);
                }
                .contained main {
                    height: 70vh;
                    overflow: auto;
                    ${layout === 'contained' ? `background: {color:container background} url({image:container background})` :''}
                }


                .contained article, .pagination {
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

                .original-post, .reblogs, .tags, .post-info, .pagination, .quote-container, .replies, .question {
                    padding: var(--spacing);
                }

                .quote-container, .replies, .question {
                    border: var(--border-width) solid var(--borders);
                    margin: var(--spacing);
                }

                .description, aside h2 {
                    padding: calc(var(--spacing) /2) 0;
                    margin: 0;
                }`}
                {searchBar !== '' ? `
                 #search-form input {
                    padding: calc(var(--spacing) / 2);
                    width:100%;
                    margin: calc(var(--spacing) /2) 0 0 0;
                    border:var(--border-width) solid var(--borders);
                    border-radius:var(--border-radius);
                 }
                ` :``}
                {`
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
                    border-radius: var(--border-radius);
                }
                .sidebar-style-dash {
                    padding:0;
                    text-align:center;
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
                ${reblogs && likes ? `
                    .reblog_button {
                        margin-right: .4rem;
                    } 
                ` : ``}
                ${header ? `
                    header {
                        width: 100%;
                    }
                ` : ``}
                .pages-container, .nav-container {
                    margin: calc(var(--spacing) /4) 0;
                }
                .pages-container a, .nav-container a, .pagination a, .tags a {
                    display: inline-block;
                    margin-right: .4rem;
                    color: var(--text);
                    text-decoration:none;
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
                    ${sidebar ? ` aside, .sidebar-container{
                        width: 100%;
                        max-width:100%;
                        height: auto;
                        position:relative;
                    }
                    .sidebar-container {
                        max-width:90%;
                        margin:var(--spacing) auto;
                    }
                    ` : ``}
                    ${sideImage !== 'default' ? `#side-image {display: none;}` : ''}
                    .grid section {
                        column-count: 1;
                    }

                }
                {CustomCSS}
            </style>
        </head>
        <body class="${layout} {block:homepage}home{/block:homepage}{block:tagpage}tag{/block:tagpage}{block:searchpage}search{/block:searchpage}{block:submitpage}submit-{/block:submitpage}{block:AskPage}ask{/block:AskPage}-page">
        `}
            {sideImage !== 'default' ? `<div id="side-image"><img src="{image:side image}"></div>` : ``}
                        {header ? <>
                            {`  <header>`}
                            {titleLocation === 'header' ? title : ''}
                            {descriptionLocation === 'header' ? description : ''}
                            {navLocation === 'header' ? nav + pages : ''}
                            {searchBar === 'header' ? search : ''}
                            {`</header>
                `} </> : ''}
                        {`<main>`}
                        {sidebar && !sidebarLocation ? (<>
            {`
            <aside>
                <div class="sidebar-container sidebar-style-${sidebarStyle}">
                        `}
                            {sidebarStyle === 'dash' ?
                                <>
                                {`<div class="header-image">${searchBar === 'sidebar' ? search :''}<img src="{PortraitURL-128}"></div>`}
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
                            {`
                        </div>
                </aside>`}</>) : ''}
                    {`
                <section>
                    {block:Posts}
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
                                    <div class="link">
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
                                            <div class="reblog-header">
                                                <a href="{permalink}" {block:isdeactivated}class="inactive"{/block:isdeactivated}>
                                                      <img src={PortraitURL-64} alt="{username}">  {username}
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
                </section>`}
                {sidebar && sidebarLocation ? (<>
            {`
            <aside>
                <div class="sidebar-container sidebar-style-${sidebarStyle}">
                        `}
                            {sidebarStyle === 'dash' ?
                                <>
                                {`<div class="header-image">${searchBar === 'sidebar' ? search :''}<img src="{PortraitURL-128}"></div>`}
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
                            {`
                        </div>
                </aside>`}</>) : ''}
                {`
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
                ${footer ? `<footer>
                ${titleLocation === 'footer' ? title : ''}
                ${descriptionLocation === 'footer' ? description : ''}
                ${navLocation === 'footer' ? nav : ''}
                ${searchBar === 'footer' ? search : ''}
                </footer>` : ''}
                </body>
            </main>
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