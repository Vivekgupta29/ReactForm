import {useEffect, useState} from 'react';

const App = () =>{

  const [formobj,setformobj] = useState({})
  const handlechange = (e) => {
    setformobj((prevformobj)=>({
        ...prevformobj,
        [e.target.name] : e.target.value
      }))
  }


  const handlesubmit = (e)=>{
    e.preventDefault()
    console.log(formobj)
  }
  const handlereset = ()=>{
      setformobj({});
  }

  return (
    <div className="min-w-screen h-screen bg-slate-900 flex items-center justify-center">
      <div className="min-h-[80%] w-[80%] w-full p-10 bg-white ">
      <form  onSubmit={(e)=>handlesubmit(e)} className='flex flex-col items-center gap-4'>
        <h1 className="text-5xl font-bold mb-4">React Form</h1>
        

          <div>
            <label htmlFor="fullname" className="text-lg font-bold">Full Name : </label>
            <input type="text" name="fullname"  className="outline-0 border-2 focus:border-black p-2 "
            value={formobj.fullname || ""}
            onChange={(e)=>handlechange(e)}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-bold">Email : </label>
            <input type="text" name="email"  className="outline-0 border-2 focus:border-black p-2 "
            value={formobj.email || ""}
            onChange={(e)=>handlechange(e)}
            />
          </div>
          <div>
            <label htmlFor="contact" className="text-lg font-bold">Contact : </label>
            <input type="text" name="contact"  className="outline-0 border-2 focus:border-black p-2 "
            value={formobj.contact || ""}
            onChange={(e)=>handlechange(e)}
            />
          </div>
          <div>
            <div className='flex gap-2'>
            <label htmlFor="gender" className="text-lg font-bold">Gender : </label>

              <label htmlFor="">
                <input type="radio" name="gender" value="male" className="outline-0 border-2 focus:border-black p-2 "
                checked={formobj.gender === "male"}
                onChange={(e)=>handlechange(e)}
                />
                &nbsp;Male
              </label>
              <label htmlFor="">
                <input type="radio" name="gender" value="female"  className="outline-0 border-2 focus:border-black p-2 "
                checked={formobj.gender === "female"}
                onChange={(e)=>handlechange(e)}
                />
                &nbsp;Female
              </label>
              <label htmlFor="">
                <input type="radio" name="gender" value="other" className="outline-0 border-2 focus:border-black p-2 "
                checked={formobj.gender === "other"}
                onChange={(e)=>handlechange(e)}
                />
                &nbsp;other
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="about" className="text-lg font-bold">About : </label>
            <input type="text" name="about"  className="outline-0 border-2 focus:border-black p-2 "
            value={formobj.about || ""}
            onChange={(e)=>handlechange(e)}
            />
          </div>
          <div className="flex gap-4 justify-around">
            <button onClick={handlereset} type="button" className="bg-slate-900 text-white px-5 py-2 hover:bg-slate-700 transition-all">
              Reset
            </button>
            <input type="submit" value="Submit" className="cursor-pointer bg-slate-900 text-white px-5 py-2 hover:bg-slate-700 transition-all" />
          </div>
          </form>
      </div>
    </div>
  )
}

export default App;