import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Main/Context/Context";
import toast from "react-hot-toast";
import { DeteteIcon, UpdateIcon } from "../../../public/SVG/IconsSvg";
import AreYouSureAdmin from "../Modals/AreYouSureAdmin";
import UpdateModal from "../Modals/UpdateModal";

const Products = () => {
  const [ModifyData, setModifyData] = useState({
    delete: null,
    update: null
  })
  const [Data, setData] = useState([])
  const context = useContext(MyContext);
  const { Server } = context;
  const FetchProducts = async () => {
    try {
      const res = await axios.get(Server + 'admin/getProduct')
      const { error, message, data } = res.data
      if (error) {
        return toast.error(message)
      }
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchProducts();
  }, [])


  const DeleteProduct = async () => {
    try {
      const id = ModifyData.delete
      const res = await axios.delete(Server + 'admin/deleteProduct', { id })
      const { error, message } = res.data
      if (error) {
        return toast.error(message)
      }
      toast.success(message)
      setModifyData({ ...ModifyData, delete: null })
      FetchProducts();
    } catch (error) {
      console.log(error);
      toast.error('Failed to Delete')
      setModifyData({ ...ModifyData, delete: null })
    }
  }


  const DeleteProps = {
    setModifyData: setModifyData,
    message: 'Delete this product',
    from: 'ProductDelete',
    DeleteProduct: DeleteProduct
  };


  return (
    <div>
      {
        ModifyData.delete ?
          <AreYouSureAdmin {...DeleteProps} /> : ''
      }
      {/* <UpdateModal/> */}
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">Total Products</h2>
          <span className="px-3 py-1 text-sm mt-1 text-blue-600 bg-blue-100 rounded-full ">{Data?.length}</span>
        </div>

        {
          Data.length != 0 ?

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                      <thead className="bg-gray-50 ">
                        <tr>
                          <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <div className="flex items-center gap-x-3">
                              <span>Name</span>
                            </div>
                          </th>

                          {/* <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <button className="flex items-center gap-x-2">
                              <span>Desc</span>
                            </button>
                          </th> */}

                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <button className="flex items-center gap-x-2">
                              <span>Category</span>


                            </button>
                          </th>

                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Price</th>

                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500" >Stock</th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500" >Action</th>

                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 ">
                        {
                          Data?.map((item, i) => {
                            const { category, description, imageUrl, name, price, stock } = item
                            return (
                              <tr key={i}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="inline-flex items-center gap-x-3">
                                    <div className="flex items-center gap-x-2">
                                      <img className=" object-contain w-10 h-10 " src={imageUrl} alt="" />
                                      <div>
                                        <h2 className="font-medium text-gray-800  ">{name}</h2>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                {/* <td className="px-10 py-4 text-sm text-gray-500  whitespace-nowrap">{description}</td> */}
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{category}</td>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{price}</td>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{stock}</td>
                                <td className=" w-10 pl-2 pr-4  py-4 text-sm whitespace-nowrap">
                                  <div className="flex items-center gap-x-6">
                                    <button onClick={() => setModifyData({ ...ModifyData, delete: item._id })} className="text-gray-500 transition-colors duration-200  hover:text-black focus:outline-none">
                                      {DeteteIcon}
                                    </button>

                                    <button onClick={() => setModifyData({ ...ModifyData, update: item })} className="text-gray-500 transition-colors duration-200  hover:text-black focus:outline-none">
                                      {UpdateIcon}
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className=" flex justify-center items-center gap-3 h-20 text-xl">

              <span>
                Fetching Data
              </span>
              <h1 className=" h-5 animate-spin rounded-full w-5 border-2 border-t-transparent border-black">

              </h1>
            </div>
        }


      </section >
    </div >
  )
}

export default Products