import Login from "./Login.jsx";

function App() {
  return(
    <>
      <Login name="Arman" isLoggedIn={true} />
      <Login name="Zaman" isLoggedIn={false} />
    </>
  )
}

export default App;
