import React,{useEffect, useState} from 'react'
import { database } from './firebase'
import { ref, onValue} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const App = () => {
  const[input,setInput] = useState("");
  const[data,setData] = useState({});
  // const Ref = ref(database, 'contacts/',);

  useEffect(() => {
    const Ref = ref(database, 'contacts/');
    onValue(Ref, (snapshot) => {
      const response = snapshot.val();
      setData(response);
    });

    
    console.log(data);
  },[])
  return (
    <div>
      <input 
        type="search"
        onChange={(e)=>setInput(e.target.value)}
        value={input}
      />
    </div>
  )
}

export default App

