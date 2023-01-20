
import React, { createContext } from 'react';
import { Customize, Preview } from './components';
import { layoutContext, initialValues } from './Context';
import { useLocalStorage } from './hooks/useLocalStorage';
export const ThemeContext = createContext<layoutContext>(initialValues);


function App() {
  const [sidebar, setSidebar] = useLocalStorage('sidebar', false)
  const [header, setHeader] = useLocalStorage( 'header', false)
  const [likes, setLikes] = useLocalStorage( 'likes', false)
  const [reblogs, setReblogs] = useLocalStorage( 'reblogs', false)
  const [footer, setFooter] = useLocalStorage( 'footer', false)
  const [postInfo, setPostInfo] = useLocalStorage( 'postInfo', false)
  const [descriptionLocation, setDescriptionLocation] = useLocalStorage( 'descriptionLocation', 'none')
  const [navLocation, setNavLocation] = useLocalStorage( 'navLocation', 'none')
  const [titleLocation, setTitleLocation] = useLocalStorage( 'titleLocation', 'none')
  const [layout, setLayout] = useLocalStorage( 'layout', 'default')
  const [postSize, setPostSize] = useLocalStorage( 'postSize', 'large')
  const [gridSize, setGridSize] = useLocalStorage( 'gridSize', 'small')
  const [sidebarStyle, setSidebarStyle] = useLocalStorage( 'sidebarStyle', 'default')
  const [sidebarLocation, setSidebarLocation] = useLocalStorage( 'sidebarLocation', false)
  const [sideImage, setSideImage] = useLocalStorage( 'sideImage', 'default')
  const [updatesTab, setUpdatesTab] = useLocalStorage( 'updatesTab', 'default')
  const [customCursor, setCustomCursor] = useLocalStorage( 'customCursor', false)
  const [searchBar, setSearchBar] = useLocalStorage( 'searchBar', '')
  const [daynight, setdaynight] = useLocalStorage( 'dayNight', false)

  const initalStates = {customCursor, setCustomCursor, sideImage, setSideImage, updatesTab, setUpdatesTab, sidebarLocation, setSidebarLocation, 
    sidebarStyle, setSidebarStyle, gridSize, setGridSize, postSize, setPostSize, navLocation, setNavLocation, postInfo, 
    setPostInfo, reblogs, setReblogs, likes, setLikes, descriptionLocation, setDescriptionLocation, sidebar, setSidebar, header, setHeader, 
    daynight, setdaynight, footer, setFooter, titleLocation, setTitleLocation, layout, setLayout, searchBar, setSearchBar }

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
