import TaskList from "./TaskList";

function App() {
  return (
    <div>
      <header>
        <h1>Tasker🌟</h1>
      </header>
      <main>
        <p>Hello and welcome to tasker!</p>
        <form>
          <input type="text" placeholder="Enter task..."/>
          <button>Add Task</button>
          <button>Clear Completed</button>
        </form>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
