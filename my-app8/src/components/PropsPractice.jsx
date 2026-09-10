import { useState } from "react";
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
  const [user, setUser] = useState("");
  const clickHandler = (name) => {
    setUser(name);
  };
  return (
    <div onClick={() => clickHandler(name)}>
      {age > 18 ? (
        <div>
          <h2>{name}</h2>
          <h3>{age}</h3>
        </div>
      ) : (
        <div>
          <h1>{name} is not old enough to view this content.</h1>
        </div>
      )}
      {user && <p>Greetings {user}</p>}
    </div>
  );
}
