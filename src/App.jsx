import React from 'react';
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from '../MainLayout';
import JobsPages from './Pages/JobsPages';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, { jobLoader } from './Pages/JobPage';

const router = createBrowserRouter(   //Help to create the router
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPages/>}/>
        <Route path='jobs/:id' element={<JobPage/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Route>
 )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;