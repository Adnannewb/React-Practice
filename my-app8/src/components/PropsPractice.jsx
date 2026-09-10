// export default function TestComponent(props) {
//   return (
//     <div>
//       <h1>This is Props learning </h1>
//       <h2>{props.name}</h2>
//       <h3>{props.age}</h3>
//     </div>
//   )
// }
//conditional rendering
// export default function TestComponent({name,age}) {
//     if(age < 18){
//         return (
//             <div>
//                 <h1>{name} is not old enough to view this content.</h1>
//             </div>
//         )
//     }
//   return (
//     <div>
//       <h1>This is Props learning </h1>
//       <h2>{name}</h2>
//       <h3>{age}</h3>
//     </div>
//   )
// }
//conditional rendering with ternary operator
export default function TestComponent({ name, age }) {
  return (
    <div>
      {age > 18 ? (
        <div>
          
          <h2>{name}</h2>
          <h3>{age}</h3>
        </div>
      ) : (<div>
        <h1>{name} is not old enough to view this content.</h1>
      </div>)}
    </div>
  );
}
