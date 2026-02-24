import { useState } from "react"

export default function Counter (){


    const [count, setCount]=useState(0);

const handleAdd=()=>{
    // setCount(5)
    const newCount =count + 1;
    setCount (newCount);
}

    return(
       <div>
        <h2>Hello: {count}</h2>
        <button onClick={handleAdd} >Add</button>
       </div>
    )
}