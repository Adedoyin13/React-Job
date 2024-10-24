import React from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './MainLayout';
import JobsPages from './Pages/JobsPages';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, { jobLoader } from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newJob)
    })
      return;
  }

  const deleteJob = async (id) => {
    const res = fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`http://localhost:8000/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(job),
    })
    return;
  }

  const router = createBrowserRouter(   //Help to create the router
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/jobs' element={<JobsPages/>}/>
          <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
          <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
          <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
          <Route path='*' element={<NotFoundPage/>}/>
      </Route>
   )
  )
  return <RouterProvider router={router}/>
}

export default App;