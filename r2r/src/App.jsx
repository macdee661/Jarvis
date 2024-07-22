import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import CreateUser from './pages/CreateUser.jsx';
import ProgramCard from './pages/Programs/Programs.jsx';
import R2R2024 from './pages/Programs/R2R2024.jsx';
import Teams from './pages/Teams.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login/>}></Route>
      <Route path="create-user" element={<CreateUser/>}/>
      <Route path="programs" element={<ProgramCard/>}/>
      <Route path="programs/2024" element={<R2R2024/>}/>
      <Route path="teams" element={<Teams/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;