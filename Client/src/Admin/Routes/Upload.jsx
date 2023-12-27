import { useState } from "react"
import axios from "axios"

const Upload = () => {
    const [file, setfile] = useState()
    let Upload_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

    const Submit = async () => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce')
        data.append('cloud_name', 'ecommerce18')
        const res = await axios.post(Upload_URL, data)
        console.log(res.data.url);
    }

    return (
        <div className="">
            <input type="file" onChange={(e) => setfile(e.target.files[0])} />
            <button onClick={Submit}>Upload</button>
            {
                file ?
                    <img src={URL.createObjectURL(file)} alt="" /> : ''
            }
        </div>
    )
}

export default Upload