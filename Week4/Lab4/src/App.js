import './App.css';

function App() {
  const user = {
    firstname: 'John',
    lastname: 'Doe',
    age: 29,
    email: 'johndoe@gmail.com'
  }

  return (
    <main>
      <p>Name: {user.firstname} {user.lastname}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </main>
  )
}


export default App;
