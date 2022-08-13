import React, {useState} from "react";

const callUserData = async () => {
    const [Userdata, setUserdata] = useState([])
    try {
      const response = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }
      )

      const data = await response.json();
      setUserdata(data);

      
   
      if (!response.status === 200) {
        throw new Error(response.error);
      }else{
        return data
      }
    } catch (error) {
      console.log(error);
    }
  }

  export default callUserData