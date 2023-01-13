
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
  const initalStates = { navLocation, setNavLocation, postInfo, setPostInfo, reblogs, setReblogs, likes, setLikes, descriptionLocation, setDescriptionLocation, sidebar, setSidebar, header, setHeader, footer, setFooter, titleLocation, setTitleLocation, layout, setLayout }

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
