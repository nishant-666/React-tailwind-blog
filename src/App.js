import './App.css';
import { app, database } from './firebase-config'
import { collection } from 'firebase/firestore'
import ReadBlogs from './Components/ReadBlogs';
import CreateBlogs from './Components/CreateBlogs';
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';

const databaseRef = collection(database, 'react-blogs')
function App() {
  return (
    <div className="main-body">
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <div className="blog-body">
        <Routes>
          <Route exact path='/readBlogs' element={<ReadBlogs
            databaseRef={databaseRef}
          />} />
          <Route exact path='/createBlogs' element={<CreateBlogs
            databaseRef={databaseRef}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
