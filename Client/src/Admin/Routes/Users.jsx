import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../Main/Context/Context";
import axios from "axios";
import toast from "react-hot-toast";
import { DeteteIcon } from "../../../public/SVG/IconsSvg";
import AreYouSureAdmin from "../Modals/AreYouSureAdmin";



const Users = () => {
  const [Data, setData] = useState([]);
  const [Delete, setDelete] = useState(null)

  const context = useContext(MyContext);
  const { Server, userDetails } = context;
  const user = userDetails?.user?.email;
  const token = userDetails?.token;

  const FetchData = async () => {
    try {
      const res = await axios.get(Server + `admin/getUsers?email=${user}&token=${token}`)
      const { error, message, data } = res.data
      if (error) {
        return toast.error(message)
      }
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch Users')
    }
  }

  const DeleteUser = async () => {
    try {
      const id = Delete;
      const res = await axios.delete(Server + `admin/deleteUser/${id}`, { id })
      const { error, message } = res.data
      if (error) {
        return toast.error(message)
      }
      toast.success(message)
      setDelete(null)
      FetchData()
    } catch (error) {
      console.log(error);
      toast.error('Failed to Delete')
      setDelete(null)
    }
  }


  const DeleteProps = {
    setDelete: setDelete,
    message: 'Delete this User',
    from: 'UserDelete',
    DeleteUser: DeleteUser
  };



  useEffect(() => {
    FetchData();
  }, [])

  return (
    <div>
      {

        Delete ?
          <AreYouSureAdmin {...DeleteProps} /> : ''

      }
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">Total Users</h2>
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
                              <span>S.No</span>
                            </div>
                          </th>
                          <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <div className="flex items-center gap-x-3">
                              <span>Name</span>
                            </div>
                          </th>

                          <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <button className="flex items-center gap-x-2">
                              <span>Email</span>
                            </button>
                          </th>

                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <button className="flex items-center gap-x-2">
                              <span>Phone</span>
                            </button>
                          </th>
                          <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <button className="flex items-center gap-x-2">
                              <span>Delete</span>
                            </button>
                          </th>

                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 ">
                        {
                          Data?.map((item, i) => {
                            const { email, name, phone, _id } = item;
                            return (
                              <tr key={i}>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{i + 1}</td>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{name}</td>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{email}</td>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{phone}</td>
                                <td className="px-4   py-4 text-sm whitespace-nowrap">
                                  <div className="flex items-center gap-x-6">
                                    <button onClick={() => setDelete(_id)} className="text-gray-500 transition-colors duration-200  hover:text-black focus:outline-none">
                                      {DeteteIcon}
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
    </div>
  )
}

export default Users