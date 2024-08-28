import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [Todos,setTodos] = useState({});
  const [InputTodo, setInputTodo] = useState("")
  
  const AddTodo = (e) => {

    const myid = uuidv4();
    (InputTodo.trim().length === 0)
    ? console.log("Please Enter text in Input Field")
    : setTodos((prevtodos)=>(
      {
        ...prevtodos,
        [myid]:{
          "id":myid,
          "text": InputTodo
        }
      }
    ))
  }

  return(
    <>
      <div className="w-screen min-h-screen bg-slate-900 p-[4vw]">
        <div className="bg-white w-full h-full p-5 flex flex-col">
          
          <div className="flex justify-center items-center w-full p-2 ">
            <h1 className="text-5xl font-bold">Todo App</h1>
          </div>

          <div className="bg- w-full  p-5 flex item-center justify-center">
              <input type="text" className="px-3 py-1 text-lg md:px-5 md:py-2 outline-0 border-2 border-black w-[70vw] rounded-l-lg"
              value={InputTodo}
              onChange={(e)=>setInputTodo(e.target.value)}
              />
              <button className="px-5 py-2 bg-black text-white transition-all border-2 border-black rounded-r-lg"
              onClick={(e)=>AddTodo(e)}
              >
                Add Todo
              </button>
          </div>

          <div className="w-full h-full p-5 gap-3 flex flex-col">
            {
              Object.keys(Todos).map((item,index)=>(
                <div  className="flex gap-3 items-center justify-between text-lg font-semibold border-2 px-5 py-2 rounded-lg hover:border-black transition-all">
                  <div>
                    {Todos[item].text}
                  </div>
                  <div className="flex gap-2 ">
                    <button className="px-5 py-1 bg-green-700 text-white transition-all  rounded-lg">
                      Update
                    </button>
                    <button className="px-5 py-1 bg-red-700 text-white transition-all  rounded-lg">
                      Delete
                    </button>
                  </div>
              </div>
              ))  
            }
            
            
          </div>

        </div>
      </div>
    </>
  )
}

export default App;