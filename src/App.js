import './App.css';
import { app, database } from './firebase-config'
import { collection } from 'firebase/firestore'
import ReadBlogs from './Components/ReadBlogs';
import CreateBlogs from './Components/CreateBlogs';
import Login from './Components/Login';
import MyBlogs from './Components/MyBlogs';
import SavedBlogs from './Components/SavedBlogs';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const databaseRef = collection(database, 'react-blogs');
const savedRef = collection(database, 'saved-blogs');
function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <div className="main-body">
      <Routes>
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <div className="blog-body">
        <Routes>
          <Route exact path='/myBlogs' element={<MyBlogs
            databaseRef={databaseRef}
          />} />
          <Route exact path='/readBlogs' element={<ReadBlogs
            databaseRef={databaseRef} savedRef={savedRef}
          />} />
          <Route exact path='/createBlogs' element={<CreateBlogs
            databaseRef={databaseRef}
          />} />
          <Route exact path='/savedBlogs' element={<SavedBlogs
            databaseRef={databaseRef} savedRef={savedRef}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
