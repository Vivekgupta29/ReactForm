import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [Todos,setTodos] = useState({});
  const [InputTodo, setInputTodo] = useState("")
  const [editingUpdateButton, setEditingUpdateButton] = useState(null)
  
  const AddTodo = (e) => {
    const myid = uuidv4();
    (InputTodo.trim().length === 0)
    ? console.log("Please Enter text in Input Field")
    : setTodos((prevtodos)=>(
      {
        ...prevtodos,
        [myid]:{
          "id":myid,
          "text": InputTodo,
          "status":"undone"
        }
      }
    ))
  }

  const handledelete = (e, myid) => {
    e.preventDefault();
    setTodos((prevtodos) => {
      const newTodos = { ...prevtodos };
      delete newTodos[myid];
      return newTodos;
    });
  };

  const handleupdate = (e, myid) => {
    e.preventDefault();
    setEditingUpdateButton(myid)
  };

  const handleSave = (e, myid) => {
    e.preventDefault();
    setEditingUpdateButton(null)
  };

  useEffect(()=>{
    console.log(Todos)
  })
  return(
    <>
      <div className="min-w-screen min-h-screen bg-slate-900 p-[4vw]">
        <div className="bg-white w-full h-full p-5 flex flex-col">
          
          <div className="flex justify-center items-center w-full p-2 ">
            <h1 className="text-5xl font-bold">Todo App</h1>
          </div>

          <div className="w-full  p-5 flex item-center justify-center">
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
              Object.keys(Todos).map((item, index) => (
                <div key={item} className={`flex gap-3 items-center justify-between text-lg font-semibold border-2 px-5 py-2 rounded-lg hover:border-black transition-all
                 ${editingUpdateButton === item ? "border-2 border-green-500 hover:border-green-500 " : ""}
                `}>
                  
                  
                  <input value={Todos[item].text}  
                  onChange={(e) => setTodos({ ...Todos, [item]: { ...Todos[item], text: e.target.value } })}
                  className={`border-0 focus:border-0 focus:outline-0 w-full
                  ${Todos[item].status === "done" ? "line-through":""}
                  `} readOnly={editingUpdateButton !== item}/>
                  
                  <div className="flex gap-2">
                 
                 {
                  Todos[item].status === "done" ?
                  (<button className="px-5 py-1 bg-green-700 text-white transition-all rounded-lg"
                    onClick={(e)=> setTodos({...Todos, [item]: {...Todos[item] , status: "undone"}})}
                  >
                    UnDone
                  </button>)
                  :
                  (<button className="px-5 py-1 bg-green-700 text-white transition-all rounded-lg"
                    onClick={(e)=> setTodos({...Todos, [item]: {...Todos[item] , status: "done"}})}
                  >
                    Done
                  </button>)
                 }

                    {
                      editingUpdateButton === item ?
                      (
                        <button className="px-5 py-1 bg-black text-white transition-all rounded-lg"
                          onClick={(e) => handleSave(e, item)}>
                            Save
                          </button>
                      )
                      :
                      (
                      <button className="px-5 py-1 bg-gray-500 text-white transition-all rounded-lg"
                        onClick={(e) => handleupdate(e, item)}>
                          Update
                        </button>
                      )
                    }

                    <button className="px-5 py-1 bg-red-700 text-white transition-all rounded-lg"
                      onClick={(e) => handledelete(e, item)}
                    >
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