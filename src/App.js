import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DeleteTodo from './components/DeleteTodo';

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh",flexDirection: "column" }}>
      <div>
        <AddTodo />
      </div>
      <div>
        <TodoList />
      </div>
      <div > 
        <DeleteTodo />
      </div>

    </div>
  );
}

export default App;
