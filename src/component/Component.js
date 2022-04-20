import { useState } from "react"

function Component() {
    const [value1,SetValue1] = useState('')
    const [value2,SetValue2] = useState('')
    const [value3,SetValue3] = useState('')

    function Value(event) {
        SetValue1(event.target.value)
    }

    function Value2(event) {
        SetValue2(event.target.value)
    }

    function Value3(event) {
        SetValue3(event.target.value)
    }
    function Result() {
        const name = {
            text:value1,
            Home:value2,
            none:value3,
            id:Math.random().toString()
        }
        console.log(name)
  
    }
   return (
       <div>
         <div>
             <label>amount</label><br />
             <input type='text' value={value1} onChange={Value}/>
         </div>
          <div>
             <label>date</label><br/>
             <input type='number' value={value2} onChange={Value2} />
          </div>
          <div>
              
              <label>title</label><br/>
              <input type='date' value={value3} onChange={Value3} />
          </div>
          <button  onClick={Result}>click</button>
         
       </div>
   )
}
export default Component