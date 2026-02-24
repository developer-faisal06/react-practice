// export default function Todo({ task, isDone }) {
//     return(
//         <p>
//             {isDone ? `This is done ${task}` : `Not Done Yet ${task}`}
//         </p>
//     )
    
//     // if (isDone) {
//     //     return (
//     //         <p>This Task is Done {task}</p>
//     //     )
//     // } else {
//     //     return (
//     //         <p>This Task is not Done {task}</p>
//     //     )
//     // }
// }
export default function Todo({ task, isDone }) {
return isDone? <p>Done: {task}</p> : <p>Not Done: {task}</p>
}

 