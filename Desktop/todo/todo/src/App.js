import moonLightImg from './images/icon-moon.svg'
import moongDarkImg from './images/icon-sun.svg'
import { Fragment, useEffect, useState } from "react";
import NewTodo from './components/NewTodo';
import MobilteFooter from './components/MobilteFooter';

function App() {
  const [theme, setTheme] = useState('light')
  // const [todo, setTodo] = useState('')

  const toggleTheme = () =>{
    if(theme === 'light'){
    setTheme('dark')
  }else{
    setTheme('light')
  }
}

  useEffect(()=>{
    document.body.className = theme
  },[theme])

  return (
    <Fragment>
    <div className={`${theme}`}>
     <div className='todo-moon'>
     <h4>TODO</h4>
     {theme === 'light' ? <img src={moonLightImg} alt="moonImage" onClick={toggleTheme}/> : <img src={moongDarkImg} alt="moonImage2" onClick={toggleTheme}/>}
    </div>
    <div>
     <NewTodo theme={theme} setTheme={setTheme} toggleTheme={toggleTheme}/>
    </div>
     </div>
     </Fragment>
  );
}

export default App;
