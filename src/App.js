import './App.css';

//  Props
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const App = () => {
  // Props
  return (
    <div className="App">
      <Person name={'Jareer'} lastName={'Zeenam'} age={26} />
      <Person name={'John'} lastName={'Doe'} age={30} />
      <Person name={'Edi'} lastName={'Brandon'} age={1} />
      <Person name={'Jane'} lastName={'Brandon'} age={1} />
      <Person name={'Hayden'} lastName={'Put'} age={36} />
    </div>
  );
};

export default App;
