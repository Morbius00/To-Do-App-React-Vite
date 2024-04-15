import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Heroimage } from "../../public";

function MyApp() {
  
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinished, setshowFinished] = useState(true)
  
    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if(todoString){
            let todos = JSON.parse(localStorage.getItem("todos")) 
            setTodos(todos)
        }
    }, [])
    

    const saveToLS = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }
  
    const toggleFinished = () => {
        setshowFinished(!showFinished)
    }
    
    
  
  
    const handleEdit = (e, id)=>{ 
      let t = todos.filter(i=>i.id === id) 
      setTodo(t[0].todo)
      let newTodos = todos.filter(item=>{
        return item.id!==id
      }); 
      setTodos(newTodos) 
      saveToLS()
    }
  
    const handleDelete= (e, id)=>{  
      let newTodos = todos.filter(item=>{
        return item.id!==id
      }); 
      setTodos(newTodos) 
      saveToLS()
    }
  
    const handleAdd= ()=>{
      setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
      setTodo("") 
      saveToLS()
    }
    
    const handleChange= (e)=>{ 
      setTodo(e.target.value)
    }
  
    const handleCheckbox = (e) => { 
      let id = e.target.name;  
      let index = todos.findIndex(item=>{
        return item.id === id;
      }) 
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)
      saveToLS()
    }
    
  
  return (
    <>
      <div className="mx-3 md:container md:w-[1325px] w-[390px] md:mx-auto my-10 rounded-2xl bg-gradient-to-r from-transparent to-white/10 shadow-md backdrop-blur-14 min-h-[80vh] z-50 text-white">
        <h1 className="font-bold text-center text-3xl mt-8">
          {" "}
          Manage your todos at one place
        </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl text-center font-bold">Add a Todo</h2>
          <div className="flex flex-col items-center justify-center space-y-9">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Add your task here"
              className=" text-black md:w-[600px] w-[360px] rounded-full px-5 py-1"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-gradient-to-r from-[#1d3e4e] to-[#74c2e9] px-4 py-2 text-sm font-bold text-white rounded-md"
            >
              Save
            </button>
          </div>
        </div>
        <div className="md:mx-36">
          <input
            className="my-4"
            id="show"
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
          />
          <label className="mx-2" htmlFor="show">
            Show Finished
          </label>
          <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
          <h2 className="text-2xl font-bold">Your Todos</h2>
          <div className="todos md:w-[1125px] w-[390px] h-auto rounded-2xl bg-gradient-to-r from-transparent to-white/10 shadow-md backdrop-blur-14  items-center border-gray-800 border-[0.1em]">
            {todos.length === 0 && (
              <div className="m-5">No Todos to display</div>
            )}
            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className={"todo flex my-3 justify-between  md:mx-10 mx-2 "}
                  >
                    <div className="flex gap-5">
                      <input
                        name={item.id}
                        onChange={handleCheckbox}
                        type="checkbox"
                        checked={item.isCompleted}
                        id=""
                      />
                      <div className={item.isCompleted ? "line-through" : ""}>
                        {item.todo}
                      </div>
                    </div>
                    <div className="buttons flex h-full">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="bg-gradient-to-r from-[#1d3e4e] to-[#74c2e9] px-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                        className="bg-gradient-to-r from-[#1d3e4e] to-[#74c2e9] px-2 py-1 text-sm font-bold text-white rounded-md mx-1"
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

        <div className="flex items-center justify-center">
          <div>
            <img src={Heroimage} alt="Image description" />
          </div>
        </div>
      </div>
    </>
  );
}
export default MyApp;
