import { useState } from "react";
import dataSchema from Patient.js;

export default function PatientData(){
    const [dataSchema, setName] = useState();
    useEffect(()=>{
        const fetchData = async() => {
            const result = await axios.get('/signUp');
            setName(result.data);
        };
        fetchData();
    },[]);
}


<Expandible name="Personal Info">
        <div className="pt-4 grid grid-cols-3">
          <div className="px-4">
            <input
              placeholder="Name"
              onChange={changed("Name")}
              className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
            ></input>
          </div>
          </div>
</Expandible>