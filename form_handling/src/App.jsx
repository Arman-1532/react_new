import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username')} placeholder='Username'/> <br />
        <input type="password" {...register('password')} placeholder='Password'/> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
