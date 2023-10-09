/* eslint-disable react-hooks/exhaustive-deps */

import {useState,useEffect } from "react"
import { Data } from "../../Data/data";
import Header from "../../Component/Header/Header";
import Card from "../../Component/Card/Card";

const Products = () => {
  
  const [filteredData, setFilteredData] = useState(Data);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    filterData();
  },[searchTerm]);

  const filterData = () => {
    const filtered = Data.filter((item) => {
      const nameIncludesTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const imageIncludesTerm = typeof item.image === 'string' && item.image.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter if either the name or the image includes the search term
      return nameIncludesTerm || imageIncludesTerm;
    });
    setFilteredData(filtered);
  };
    
    // useEffect(()=>{
    //   alanBtn({
    //     key: "d7e6629bad75f4c97d41866e85fd6faa2e956eca572e1d8b807a3e2338fdd0dc/stage",
    //     onCommand:({command})=>{
    //       if(command ==="firstCommand"){
    //         alert("firstCommand")
    //       }
  
    //       if(command==="shoe"){
    //         filter('shoe');
    //       }
    //       if(command==="shirt"){
    //         filter('shirt');
    //       }
    //       if(command==="skirt"){
    //         filter('skirt');
    //       }
    //       if(command==="half pant"){
    //         filter('half pant');
    //       }
    //       if(command==="sandal"){
    //         filter('sandal');
    //       }
    //       if(command==="pant"){
    //         filter('pant');
    //       }
    //     },
    //   });
    //   filter('')
    // },[]);
    
    //  const filter=(names)=>{
       
    //   const filtered = Data.filter((item)=>item.name.includes(names));
    //       console.log(filtered);
    //       setCotagory(filtered)
         
        
        
    // }
    // useEffect(()=>{
    //    filter('');
    // },[]);
   
   
  return (
    <div>
     <Header onSearch={setSearchTerm} />
    <div style={{display:'flex', flexWrap:"wrap"}}>
    {/* {
      Data.map((item) => (
      
       <Card image={item.image} name={item.name} rating={item.rating}  type={item.type} actualPrice={item.actualPrice} offerPrice={item.offerPrice} />

      ))
    } */}
     
    {filteredData.map((item) => (
      <Card key={item.id} image={item.image} name={item.name}    actualPrice={item.actualPrice} offerPrice={item.offerPrice} />

        ))}

    </div>
</div>
  )
}

export default Products;