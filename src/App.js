import TaskList from "./TaskList";
import Form from "./Form"

function App() {
  return (
    <div>
      <header>
        <h1>Tasker🌟</h1>
      </header>

      <main>
        <p>Hello and welcome to tasker!</p>
        <Form />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
