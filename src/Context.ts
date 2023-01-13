import { Dispatch, SetStateAction } from 'react'

export interface layoutContext {
    sidebar: boolean,
    header: boolean,
    footer: boolean,
    setSidebar: Dispatch<SetStateAction<boolean>>,
    setHeader: Dispatch<SetStateAction<boolean>>,
    setFooter: Dispatch<SetStateAction<boolean>>,
    titleLocation: string,
    setTitleLocation: Dispatch<SetStateAction<string>>
    descriptionLocation: string,
    setDescriptionLocation: Dispatch<SetStateAction<string>>,
    navLocation: string,
    setNavLocation: Dispatch<SetStateAction<string>>
    likes: boolean,
    setLikes: Dispatch<SetStateAction<boolean>>
    reblogs: boolean,
    setReblogs: Dispatch<SetStateAction<boolean>>,
    postInfo: boolean,
    setPostInfo: Dispatch<SetStateAction<boolean>>
    layout: string,
    setLayout: Dispatch<SetStateAction<string>>
  }
  
  export const initialValues = {
    sidebar: false,
    header: false,
    footer: false,
    setSidebar: () => { },
    setHeader: () => { },
    setFooter: () => { },
    titleLocation: 'none',
    setTitleLocation: () => { },
    descriptionLocation: 'none',
    setDescriptionLocation: () => { },
    navLocation: 'none',
    setNavLocation: () => { },
    likes: false,
    setLikes: () => { },
    reblogs: false,
    setReblogs: () => { },
    postInfo: false,
    setPostInfo: () => { },
    layout: '',
    setLayout: () => { },
  }