import './App.css';
import { app, database } from './firebase-config'
import { collection } from 'firebase/firestore'
import ReadBlogs from './Components/ReadBlogs';
import CreateBlogs from './Components/CreateBlogs';
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const databaseRef = collection(database, 'react-blogs')
function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/React-tailwind-blog/login')
  }, [])
  return (
    <div className="main-body">
      <Routes>
        <Route exact path='/React-tailwind-blog/register' element={<Register />} />
        <Route exact path='/React-tailwind-blog/login' element={<Login />} />
      </Routes>
      <div className="blog-body">
        <Routes>
          <Route exact path='/React-tailwind-blog/readBlogs' element={<ReadBlogs
            databaseRef={databaseRef}
          />} />
          <Route exact path='/React-tailwind-blog/createBlogs' element={<CreateBlogs
            databaseRef={databaseRef}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
