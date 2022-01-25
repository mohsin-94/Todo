import './App.css';
import UpdateTodo from './component/UpdateTodo';
import EditTodo from './component/EditTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Header from './component/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Todo" element={<Login />}/>
          <Route path="/update" element={<UpdateTodo />} />
          <Route path="update/edit/:listId" element={<EditTodo />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
