import { useContext, useState } from "react"
import Upload from './Upload'
import axios from "axios"
import { MyContext } from '../../Main/Context/Context'
import toast from "react-hot-toast"


const AddProduct = () => {
    const context = useContext(MyContext);
    const { Server } = context;
    const [Input, setInput] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
        stock: ''
    })
    const categories = [
        'Electronics',
        "Men's Fashion",
        "Women's Fashion",
        'Books',
        'Home',
        'Audio',
        // 'Toys',
        'Smartphone',
    ];

    const ProductUrl = (url) => {
        setInput({ ...Input, imageUrl: url })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...Input, [name]: value })
    }

    const Validate = async () => {
        if (Input.name == '' || Input.category == '' || Input.description == '' || Input.imageUrl == '' || Input.stock == '' || Input.price == '') {
            return console.log('All required');
        }
        if (Input.name.includes('/') || Input.name.includes('-')) return console.log(' / - Not valid');
        let numStock = Number(Input.stock)
        let numPrice = Number(Input.price)
        setInput({ ...Input, stock: numStock, price: numPrice })
        try {
            const res = await axios.post(Server + 'admin/addProduct', Input);
            const { error, message } = res.data
            if (error) {
                return toast.error(message)
            }
            toast.success(message)
            setInput({
                name: '',
                description: '',
                price: '',
                category: '',
                imageUrl: '',
                stock: ''
            })
        } catch (error) {
            // console.log(error);
        }
    }


    return (
        <div>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-white w-2/3 p-8 shadow-lg  lg:p-12">
                            <div className="space-y-4">
                                <div>
                                    <input
                                        value={Input.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-gray-400 border p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                    />
                                </div>
                                <div>
                                    <select name="category" value={Input.category} onChange={handleChange} className=" py-2 border border-slate-500 rounded-md outline-none">
                                        <option value="" className=" bg-slate-300">Choose Categories</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <textarea
                                        value={Input.description}
                                        onChange={handleChange}
                                        className="w-full resize-none rounded-lg border-gray-400 border p-3 text-sm"
                                        placeholder="Description"
                                        rows="3"
                                        name='description'
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <input
                                            value={Input.price}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-gray-400 border p-3 text-sm"
                                            placeholder="Price"
                                            type="number"
                                            name="price"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            value={Input.stock}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-gray-400 border p-3 text-sm"
                                            placeholder="Stock"
                                            type="number"
                                            name="stock"
                                        />
                                    </div>
                                </div>
                                {
                                    !Input.imageUrl ?

                                        <Upload ProductUrl={ProductUrl} />
                                        : null}
                                <div className="grid  gap-4 ">
                                    <div>
                                        <input
                                            value={Input.imageUrl}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-gray-400 border p-3 text-sm"
                                            placeholder="imageUrl"
                                            type="text"
                                            name="imageUrl"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        onClick={Validate}
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-blue-800 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddProduct