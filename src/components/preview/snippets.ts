export const title = `  {block:ShowTitle}<h2 class="blog-title">{Title}</h2> {/block:ShowTitle}`
export const nav =
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
export const search = `
                        <form action="/search" method="get" id="search-form">
                            <input type="text" name="q" class="query" value="" placeholder="Search">
                        </form>`

export const pages =
    `                      {block:HasPages}
                        <div class="pages-container">
                            {block:Pages}
                                <a href="{URL}">{Label}</a>
                            {/block:Pages}
                            </div>
                        {/block:HasPages}`

export const description = `<div class="description">{Description}</div>`
