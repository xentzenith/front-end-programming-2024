import './App.css';


function Header() {
  return (
    <header id="header">
      <h1>Header</h1>
    </header>
  );
}

function Navbar() {
  return (
    <nav id="navbar">
      <h2>Navbar</h2>
    </nav>
  );
}

function Main() {
  return (
    <main id="main">
      <h2>Main</h2>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}


export default App;
