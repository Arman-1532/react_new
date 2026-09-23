import Student from "./Student.jsx"
import Employee from "./Employee.jsx"
function App() {

  return (
    <>
      <Student name="Arman" age={22} roll={32} isStudent={true}/>
      <Student name="Zaman" age={23} roll={22} isStudent={true}/>

      <Employee name="Kamal" id={1011} isStudent={false}></Employee>
      <Employee name="Kamran" id={2011} isStudent={false}></Employee>
    </>
  )
}

export default App
