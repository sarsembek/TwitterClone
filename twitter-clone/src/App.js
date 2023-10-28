import './App.css';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AppHeader from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Newsbox } from './components/newsbox/Newsbox';
import { Footer } from './components/footer/Footer';;

export const App = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/home')
  }, [])

  return (
    <div className="App" >
      <AppHeader />
      <div id='wrapper' >
          <div id='content'>
            <Outlet />
          </div>
          <div id="side-news" >
            <Sidebar />
            <Newsbox />
          </div>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
