import './Components/Header'
import './App.css';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Greenlight from './Pages/Greenlight';
import Home from './Pages/Home';
import Request from './Pages/Request'
import Material from './Pages/Material'
import MyMaterial from './Pages/MyMaterial'
import Chat  from './Pages/Chat';
import RequestDetails from './Pages/RequestDetails';
import FavoriteMaterials from './Pages/FavoriteMaterials';
import Rejects from './Pages/Rejects';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/greenlight',
    element: <Greenlight/>
  },
  {
    path: '/rejects',
    element: <Rejects/>
  },
  
  {
    path: `/material/:value`,
    element: <Material/>
  },
  {
    path: '/request',
    element: <Request/>
  },
  {
    path: '/chat',
    element: <Chat/>
  },
  {
    path: `/request/:value`,
    element: <RequestDetails/>
  },
  {
    path: 'mymaterials',
    element: <MyMaterial/>
  }, 
  {
    path: '/favorites',
    element: <FavoriteMaterials/>
  }


])
function App() {
  return (
    <div>
      <Header/>
    <div className="body">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;
