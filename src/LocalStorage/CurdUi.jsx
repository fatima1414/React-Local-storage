import { FaTrash } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'

const CurdUi = ({ product, deleteProduct, updateProduct }) => {
    const { p_name, category, p_price } = product

    return (
        <div className="card border-0 shadow">
            <div className="card-body mx-auto">
                <h3>Name: {p_name}</h3>
                <p>Category: {category}</p>
                <p>Price: {p_price}</p>
                <div className="btn-group">
                    <button onClick={deleteProduct} className="btn btn-danger"><FaTrash /></button>
                    <button onClick={updateProduct} className="btn btn-info"><FaPencil /></button>
                </div>
            </div>
        </div>
    )
}

export default CurdUi
