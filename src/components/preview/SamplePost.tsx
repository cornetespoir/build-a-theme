import React from "react";

interface SamplePostProps {
    postType: string
    op: string
}
const SamplePost = ({ postType, op }: SamplePostProps) => {

   if (postType === 'Photo') {
    return (
        <>
       <div className='photo'> <img alt="cherry blossoms" src='./cherryblossom.jpg'/></div>
       <div className='content'>
       <p>Photo by <a href="https://unsplash.com/@ajny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AJ</a> on <a href="https://unsplash.com/wallpapers/nature/cherry-blossom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
       </div>
       </>
    )
   } 

   if (postType === 'Audio') {
    return (
        <>
        <iframe title="shinee - view" className='audio' style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/46E1ic6n099e76t5J1TbHn?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div className='content'>
            View - Shinee
        </div>
        </>
    )
   }
   if (postType === 'Sample') {
    return(
    <div className='content'>
    {op === 'Trail' &&
        <div className='reblog-header'><span className='avatar'/> <span>username</span></div>
    }
    <h2>This is a sample post.</h2>
    <p>This is what your post content will look like on your blog</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet mauris facilisis, auctor ex nec, fringilla nibh. Sed dolor nulla, pellentesque in mi ac, rutrum dictum tellus.</p>

    {op === 'Trail' &&
        <div className='reblog-header'><span className='avatar blue'/> <span>username-two</span></div>
    }
  
    <p>This is what a reply will look like</p>
</div>
    )
   }

   if (postType === 'SamplePhoto') {
    return(
    <div className='content'>
    {op === 'Trail' &&
        <div className='reblog-header'><span className='avatar'/> <span>username</span></div>
    }
    <>
       <div className='photo'> <img alt="cherry blosssoms" src='./cherryblossom.jpg'/></div>
       <div className='content'>
       <p>Photo by <a href="https://unsplash.com/@ajny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AJ</a> on <a href="https://unsplash.com/wallpapers/nature/cherry-blossom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
       </div>
       </>

    {op === 'Trail' &&
        <div className='reblog-header'><span className='avatar blue'/> <span>username-two</span></div>
    }
  
    <p>!</p>
</div>
    )
   }
    return (
        <div className='content'>
            {op === 'Trail' &&
                <div className='reblog-header'><img alt="eggdesign avatar" className='avatar' src="https://64.media.tumblr.com/avatar_63ed1d13b42f_96.pnj"/> <a href="https://egg.design">eggdesign</a></div>
            }
            <h2>Theme preview</h2>
            <p>This is an example of what your theme will look like based on your settings. </p>
            <p>Your final theme will come with color and image options (depending on what you've selected) so you can customize it even more!</p>
            {op === 'Trail' &&
                <><div className='reblog-header'><span className='avatar'/> <span>username</span></div>   <p>Sample reply</p></>
            }
        </div>
    )
}

export { SamplePost }