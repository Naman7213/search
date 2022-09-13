// import React,{useEffect, useState} from 'react'
// import { database } from './firebase'
// import { ref, onValue} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// const App = () => {
//   const[input,setInput] = useState("");
//   const[data,setData] = useState({});
//   // const Ref = ref(database, 'contacts/',);

//   useEffect(() => {
//     const Ref = ref(database, 'contacts/');
//     onValue(Ref, (snapshot) => {
//       const response = snapshot.val();
//       setData(response);
//     });

//     console.log(data);
//   },[])
//   return (
//     <div>
//       <input
//         type="search"
//         onChange={(e)=>setInput(e.target.value)}
//         value={input}
//       />
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  // const Ref = ref(database, 'contacts/',);

  useEffect(() => {
    const Ref = ref(database, "contacts/");
    onValue(Ref, (snapshot) => {
      let response = snapshot.val();
      response = Object.keys(response).map((key) => {
        return {
          id: key,
          ...response[key],
        };
      });
      // response = response.filter((item) => {
      //   if (item.name.toLowerCase().includes(input.toLowerCase())) {
      //     return item;
      //   }
      // });
      setData(response);
    });
    // fetch from firebase

    console.log(data);
  }, [input]);

  return (
    <div>
      <input
        type="search"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {data.map((item) => {
        return (
          <div style={{ display: "flex" }} key={item.id}>
            <p>{item.id} </p>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
