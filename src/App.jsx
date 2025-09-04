import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import Controlled from './Component/Controlled'
import UnControlled from './Component/UnControlled'
import Final from './Component/HOC/Final'
import Header from './Layout/Header'
import './assets/css/style.css'
import { Button,Container } from 'react-bootstrap'
import Curd from './LocalStorage/Curd'

const App = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  function addProduct(result) {
    console.log(result);
    // alert("your product  is add")
    reset()
  }
  return (
    <>
      {/* <div className="col-lg-6 mx-auto my-4 p-5 shadow">
        <h1 className='text-center'>Product Form</h1>
        <form action="" method="post" onSubmit={handleSubmit(addProduct)}>
          <div className="mt-4">
            <label>Select Product Category:</label>
            <select defaultValue="" className='form-select' {...register('category', { required: "pls select category" })}>
              <option value="" disabled>--select--</option>
              <option value="food">Food</option>
              <option value="cloth">Cloth</option>
              <option value="other">Other</option>
            </select>
            <p className='text-danger'>{errors?.category?.message}</p>
          </div>

          <div className="mt-4">
            <label>Product Name:</label>
            <input type="text" {...register('p_name', {
              required: {
                value: true,
                message: "pls enter product name"
              },
              minLength: {
                value: 2,
                message: "pls enter min 2 characters"
              },
              maxLength: {
                value: 20,
                message: "pls enter maximum 20 characters"
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "pls enter only characters"
              }
            })}
              className='form-select'
              placeholder='Enter product name' />
            <p className="text-danger">{errors?.p_name?.message}</p>
          </div>

          <div className="mt-4">
            <label>Product Price:</label>
            <input type="text" {...register('p-price', {
              required: {
                value: true,
                message: "pls enter price"
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "pls enter only numbers"
              }
            })}
              className="form-select"
              placeholder="Enter product price"
            />
            <p className="text-danger">{errors?.["p-price"]?.message}</p>
          </div>

          <div className="mt-4">
            <button className='btn btn-danger'>submit</button>
          </div>

        </form>
      </div> */}





       {/* <Controlled/> */}
       {/* <UnControlled/> */}
       <Curd/>


      {/* <Final/>  */}
      {/* <Header/> */}

      {/* <Container>
        <Button>submit</Button>
      </Container> */}


    </>
  )
}
export default App


