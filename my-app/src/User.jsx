export default function User({name,fruits,details,passion="Time pass"}) { 
    // passion is the default props
  return (
    <div>
      {/* <h1>Hi ,My name is {props.name}</h1> */}
      <h1>Hi ,My name is {name}</h1>
      <h1>Age: {details.age}</h1>
      <h1>Dream: {details.dream}</h1>
      <h1>Passion: {passion}</h1>
      <h2>My favourites fruits are: </h2>
      {fruits.map((fruit)=>(
        <h3>{fruit}</h3>
      ))
      }
    </div>
  );
}
