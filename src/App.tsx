
import React, { useState, createContext } from 'react';
import { Customize, Preview } from './components';
import { layoutContext, initialValues } from './Context';
export const ThemeContext = createContext<layoutContext>(initialValues);

function App() {
  const [sidebar, setSidebar] = useState(false)
  const [header, setHeader] = useState(false)
  const [likes, setLikes] = useState(false)
  const [reblogs, setReblogs] = useState(false)
  const [footer, setFooter] = useState(false)
  const [postInfo, setPostInfo] = useState(false)
  const [descriptionLocation, setDescriptionLocation] = useState('none')
  const [navLocation, setNavLocation] = useState('none')
  const [titleLocation, setTitleLocation] = useState('none')
  const [layout, setLayout] = useState('default')
  const [postSize, setPostSize] = useState('large')
  const [gridSize, setGridSize] = useState('small')
  const [sidebarStyle, setSidebarStyle] = useState('default')
  const [sidebarLocation, setSidebarLocation] = useState(false)
  const [sideImage, setSideImage] = useState('default')
  const [updatesTab, setUpdatesTab] = useState('default')
  const [customCursor, setCustomCursor] = useState(false)
  const [searchBar, setSearchBar] = useState('')

  const initalStates = {customCursor, setCustomCursor, sideImage, setSideImage, updatesTab, setUpdatesTab, sidebarLocation, setSidebarLocation, 
    sidebarStyle, setSidebarStyle, gridSize, setGridSize, postSize, setPostSize, navLocation, setNavLocation, postInfo, 
    setPostInfo, reblogs, setReblogs, likes, setLikes, descriptionLocation, setDescriptionLocation, sidebar, setSidebar, header, setHeader, 
    footer, setFooter, titleLocation, setTitleLocation, layout, setLayout, searchBar, setSearchBar }

  return (
    <div className="App">
      <ThemeContext.Provider value={initalStates}>
        <Customize />
        <Preview />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
