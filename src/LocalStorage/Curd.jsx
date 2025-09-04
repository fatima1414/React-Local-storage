import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import CurdUi from './CurdUi';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { Error, Success, Update } from '../Layout/message';


const Curd = () => {
    const [products, setProduct] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [id, setId] = useState(null)
    function addProduct(data) {
        if (id == null) {
            // const newProduct ={id:Date.now(),...data}
            const newProduct = { id: uuidv4(), ...data }
            console.log(data);
            setProduct([...products, newProduct])
            Success()
        } else {
            const existArr = [...products]
            const index = existArr.findIndex((product) => {
                return product.id === id
            })
            existArr[index] = data
            setProduct(existArr)
            setId(null)
            Update()
        }

        reset({
            category: "",
            p_name: "",
            p_price: ""
        })

     
    }
    //    Swal.fire({
    //             title: 'Error!',
    //             text: 'Do you want to continue',
    //             icon: 'error',
    //             confirmButtonText: 'Cool'
    //         })

    /////// Save Products in LocalStorage
    useEffect(() => {
        if (products?.length > 0) {
            localStorage.setItem('productList', JSON.stringify(products))
        }
    }, [products])
    /////// Load Products from LocalStorage
    useEffect(() => {
        const productList = JSON.parse(localStorage.getItem('productList'))
        if (productList?.length > 0) {
            setProduct(productList)
        }
    }, [])
    function trash(id) {
        if (confirm("do you want to delete product")) {
            const filterData = products.filter((product) => {
                return product.id !== id
            })
            setProduct(filterData)
            Error()
        }
    }

    function update(id) {
        setId(id)
        const singleProduct = products.find((product) => {
            return product.id === id
        })
        console.log(singleProduct);
        reset(singleProduct)

    }


    return (
        <>   <div className="col-lg-6 mx-auto my-4 p-5 shadow">
            <h1 className='text-center'>Cafe Menu Form</h1>
            <form action="" method="post" onSubmit={handleSubmit(addProduct)}>
                <div className="mt-4">
                    <label>Select Category:</label>
                    <select defaultValue="" className='form-select' {...register('category', { required: "pls select category" })}>
                        <option value="" disabled>--select--</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Tea">Tea</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Desserts">Desserts</option>
                    </select>
                    <p className='text-danger'>{errors?.category?.message}</p>
                </div>

                <div className="mt-4">
                    <label>Item Name::</label>
                    <input
                        type="text"
                        {...register("p_name", {
                            required: {
                                value: true,
                                message: "pls enter product name",
                            },
                            minLength: {
                                value: 2,
                                message: "pls enter min 2 characters",
                            },
                            maxLength: {
                                value: 20,
                                message: "pls enter maximum 20 characters",
                            }
                        })} className="form-control" placeholder="Enter product name" />
                    <p className="text-danger">{errors?.p_name?.message}</p>
                </div>

                <div className="mt-4">
                    <label> Price:</label>
                    <input
                        type="text"
                        {...register("p_price", {
                            required: {
                                value: true,
                                message: "pls enter price",
                            },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "pls enter only numbers",
                            },
                        })}
                        className="form-control"
                        placeholder="Enter product price" />
                    <p className="text-danger">{errors?.p_price?.message}</p>
                </div>


                <div className="mt-4">
                    {
                        id === null ?
                            <button className='btn btn-success'>submit</button> :
                            <button className='btn btn-warning'>update</button>
                    }
                </div>

            </form>
        </div>


            <div className="container my-4">
                <div className="row g-4">
                    {
                        products && products.map((product, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                <CurdUi product={product} deleteProduct={() => trash(product.id)}
                                    updateProduct={() => { update(product.id) }} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Curd