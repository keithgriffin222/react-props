
import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last name: {props.lastname}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name='Jack' lastname='Doe' age={10}/>
      <Person name="John" lastname="Lee" age ={20}/>
      <Person name="John01" lastname="Lee01" age ={20}/>
      <Person name="John02" lastname="Lee02" age ={20}/>
      
    </div>
  );
}
  export default App;