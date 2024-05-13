
// import { BrowserRouter , Routes , Route} from "react-router-dom"
// import Persons from "./Component/Persons"
// import AddPerson from "./Component/AddPerson"
// import UpdatePerson from "./Component/UpdatePerson"
// import Header from "./Component/Header"
// import "./style.css"




// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element= {<Persons/>}></Route>
//           <Route path="/addPerson" element= {<AddPerson/>}></Route>
//           <Route path="/updatePerson/:id" element= {<UpdatePerson/>}></Route>
//         </Routes>
      
//       </BrowserRouter>
      

//     </div>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Persons from "./Component/Persons";
// import AddPerson from "./Component/AddPerson";
// import UpdatePerson from "./Component/UpdatePerson";
// import Header from "./Component/Header";
// import "./style.css";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header /> 
//         <Routes>
//           <Route path="/" element={<Persons />} />
//           <Route path="/addPerson" element={<AddPerson />} />
//           <Route path="/updatePerson/:id" element={<UpdatePerson />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Persons from "./Component/Persons";
import AddPerson from "./Component/AddPerson";
import UpdatePerson from "./Component/UpdatePerson";
import Header from "./Component/Header";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: "60px", padding: "20px" }}> {/* Adjust the top margin to accommodate the header's height */}
          <Routes>
            <Route path="/" element={<Persons />} />
            <Route path="/addPerson" element={<AddPerson />} />
            <Route path="/updatePerson/:id" element={<UpdatePerson />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
