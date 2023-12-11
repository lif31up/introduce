import { useForm } from 'react-hook-form'

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(watch('example'))
  return <div></div>
}
