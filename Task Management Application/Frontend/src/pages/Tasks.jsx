import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';


const Tasks = () => {
      // console.log( "try",userType);
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [status, setStatus] = useState('');
      const [priority, setPriority] = useState('');
      const [createdAd, setCreatedAd] = useState('');

      const navigate = useNavigate();
    const Addtask = async (e) => {
      e.preventDefault();
      const addtask = {
        title,
        description,
        status,
        priority,
        createdAd
      };
      try {
          const res = await fetch('/api/addtask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(addtask),
            credentials: 'include',
          });
          if (res.status===200) {
              alert('added to task successfully!');
              console.log('added to task successfully!');
              navigate('/home');
            } else {
              const errorData = await res.json();
              alert(errorData.message );
            }
          } catch (error) {
            alert('An unexpected error occurred!');
          }
     
  }
  return (
    <div className='bg-sky-900'>
    <Navbar />
    <div className=" bg-center bg-no-repeat min-h-screen flex items-center justify-center bg-cover bg-fixed mt-4 " >
    <div className="w-full mt-[4] max-w-md p-8 bg-white/80 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-red-900 mb-6">Add New task</h2>
      <form onSubmit={Addtask} className="space-y-4 mt-[10px]">
        <div>
          <label htmlFor="taskname" className="block text-xl font-medium text-red-900">Task Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-xl font-medium text-red-900">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter task description"
            required
          />
        </div>

        <div>
          <label htmlFor="priority" className="block text-xl font-medium text-red-900">status</label>
          <input
            type="string"
            id="status"
            name="status"
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter status"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-xl font-medium text-red-900">priority</label>
          <input
            type="string"
            id="priority"
            name="priority"
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter priority"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-xl font-medium text-red-900">createdAd</label>
          <input
            type="string"
            id="createdAd"
            name="createdAd"
            value={createdAd}
            onChange={(e)=>setCreatedAd(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter status"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Tasks