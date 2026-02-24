import { useState } from "react"

export default function Batsman(){
 const [run, setRun]=useState(0);
 const [taka, setTaka]=useState(0);
    const addRun=()=>{
       const newRun=run + 1;
       setRun(newRun);
    }

    const addRun4=()=>{
        const addFour=run + 4;
        setRun(addFour);
    }
    
    const addRuna5=()=>{
        const updateTaka=taka+5;
        if(taka>=0){
        setTaka(updateTaka);

        }
    }
    const backNilo=()=>{
        
        if(taka>0){
            const updateTaka=taka - 5;
           setTaka(updateTaka);

        }else(
            setTaka(0)
        )
    }
    return(
        <div>
            <h2>Plauer Nname: </h2>
            <h4>Score: {run} </h4>
            <h4>Runa Dilo {taka}</h4>
            <button onClick={addRun}>Add Run</button>
            <button onClick={addRun4}>Add 4Run</button>
            <button onClick={addRuna5}>Runa 5 Taka dilo Joma koro</button>
            <button onClick={backNilo}>Runa 5 Taka dilo Back Nilo</button>
        </div>
    )
}