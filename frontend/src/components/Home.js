// import React,{useEffect,useState} from "react";
// import axios from "axios";
// import '../styles.css';
 

// function Home() {
//   const[getRecords,setRecords]=useState([]);
//   useEffect(()=>{
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setRecords(res.data);
//     });
//   });
//   return (
    
//     <div class="products">
    
//         {getRecords.map((items)=>{
//           return(
          
//               <div class="box">
//                 <img src={items.image}/>
//                 <p>{items.title}</p>
//                 <p>{items.price}</p>
//               </div>
            
//           );
//         })}
      
         
//         </div>
//   );
// }

// export default Home;