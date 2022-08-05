import { useForm } from 'react-hook-form';

import Header from "./ui/Header/Header";


let renderedCount = 0;
export const App = () => {

  renderedCount++;
  const { register, handleSubmit, watch, formState: 
    { erros, dirtyFields, touchFields, isSubmitted }}
    = useForm({
    dafaultValues: {
      firstName: "",
      hobbies: "",
      favouriteSeries: ""
    }
  });
  // register es una función callback que nos devuelve algunas props y las
  // inyecta directamente en los inputs

  console.log( "isSubmitted", isSubmitted )

  const firstNameWatch = watch("firstName");

  const onSubmit = (data) => {
    console.log(data);
  }

  

  return (
    <>
      <Header renderedCount={renderedCount}/>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        {/* <input {...register('firstName', { required: true, minLength: 2 })} placeholder="First name" /> */}
        <input {...register("firstName", { required: 'Name is required', minLength: {
          value: 4,
          message: 'Minimum length is 4'
        } })} placeholder="Insert here your beautiful name 🫶"/>
        <p>{firstNameWatch}</p>
        { errors.firstName && <p>{errors.firstName.message}</p> }
        <input {...register("hobbies", { required: 'I want to know you better Jose', minLength: {
          value: 6,
          message: 'Minimum lenght is 6'
        } })} placeholder="I.e. Read a book underwater" />
        { <p>{errors.hobbies?.message}</p> }
        <input {...register("favouriteSeries", { required: false })} placeholder="breaking bad" />
        { <p>{errors.favouriteSeries?.message}</p> }
        <input type="submit"/>
      </form>
    </>
  );
}