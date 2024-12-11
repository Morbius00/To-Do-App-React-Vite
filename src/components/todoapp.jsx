import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Heroimage } from "../../public";

function ToDoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
      <div className="container mx-auto my-10 px-4 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 text-white">
          <h1 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl">
            Manage your todos at one place
          </h1>
          <div className="addTodo my-6 flex flex-col gap-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
              Add a Todo
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                placeholder="Add your task here"
                className="w-full sm:w-[60%] p-3 text-gray-900 rounded-lg text-sm sm:text-base lg:text-lg"
              />
              <button
                onClick={handleAdd}
                disabled={todo.length <= 3}
                className="bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-bold disabled:opacity-50 text-sm sm:text-base lg:text-lg"
              >
                Save
              </button>
            </div>
          </div>
          <div className="todos-section">
            <div className="flex items-center mb-4">
              <input
                className="w-5 h-5 lg:w-6 lg:h-6"
                id="show"
                onChange={toggleFinished}
                type="checkbox"
                checked={showFinished}
              />
              <label className="ml-2 text-sm sm:text-base lg:text-lg" htmlFor="show">
                Show Finished
              </label>
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-bold mb-4">
              Your Todos
            </div>
            <div className="space-y-3">
              {todos.length === 0 && (
                <div className="text-gray-400 text-sm sm:text-base lg:text-lg">
                  No Todos to display
                </div>
              )}
              {todos.map((item) => {
                return (
                  (showFinished || !item.isCompleted) && (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-gray-800 p-3 sm:p-4 lg:p-5 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          name={item.id}
                          onChange={handleCheckbox}
                          type="checkbox"
                          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                          checked={item.isCompleted}
                        />
                        <div
                          className={`${
                            item.isCompleted
                              ? "line-through text-gray-500"
                              : ""
                          } text-sm sm:text-base lg:text-lg`}
                        >
                          {item.todo}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleEdit(e, item.id)}
                          className="bg-gradient-to-r from-yellow-500 to-yellow-400 px-3 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDelete(e, item.id)}
                          className="bg-gradient-to-r from-red-600 to-red-400 px-3 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-md text-xs sm:text-sm lg:text-base"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div>
            <img
              className="w-[250px] sm:w-[250px] md:w-[350px] lg:w-[450px]"
              src={Heroimage}
              alt="Todo Hero"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoApp;