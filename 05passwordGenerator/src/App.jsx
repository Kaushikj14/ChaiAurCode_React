import { useState,useCallback,useEffect,useRef } from 'react'

// usecallback is used when we want to keep some data in chache and to optimise our things whereas useeffect is called everytime we update our things.
// when we want to take reference of any thing we use useref hook.


function App() {
  const [length, setLength] = useState(8)
  const [numberallowed,setNumberAllowed] = useState(false)
  const [charallowed,setCharAllowed] = useState(false)
  const [Password,setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass="";
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallowed) str+="0123456789"
    if(charallowed) str+= "!@#$%^&*()_=+-`[]'/?.,<>"

    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass = pass + str.charAt(char);
    }

    setPassword(pass)

  }  ,[length,numberallowed,charallowed,setPassword])


  const copyPasswordToClipboard = useCallback(
    ()=>{
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0,20)
      window.navigator.clipboard.writeText(Password)
    },
    [Password])



  useEffect(()=>{
    passwordGenerator();
  },[length,numberallowed,charallowed,passwordGenerator])
  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        
        <h1 className='text-center text-white my-3'>Password Gnerator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            
            <input type="text" value={Password} className='outline-none w-full  py-1 px-3 my-5 rounded-lg' placeholder='Password' readOnly ref={passwordRef}/>
            
            <button
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          
          {/* div for length */}
          <div className='flex items-center gap-x-1'>

            <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label >Length:{length}</label>

          </div>

          {/* div for number */}
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberallowed} id='numberInput' onChange={()=>{
                  setNumberAllowed((prev)=>!prev);
              }}/>
              <label >Number</label>
          </div>

          {/* div for character */}
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charallowed} id='charaterInput' onChange={()=>{
                  setCharAllowed((prev)=>!prev);
              }}/>
              <label >Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
