import React,{useState, useEffect} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,  Title} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function Piechart()
{
  const [country, setCountry]= useState([]);
  const [population, setPopulation]=useState([]);
  useEffect( ()=>{
    const getcountry=[];
    const getpopulation=[];
   const getdata= async()=>{
     const reqData= await fetch("https://apiserver-no4z.onrender.com/clothing");
     const resData= await reqData.json();
     console.log(resData);
     for(let i=0; i<resData.length; i++)
     {
      getcountry.push(resData[i].title);
      getpopulation.push(resData[i].price);
     }     
     console.log("brand",getcountry);
console.log("rating",getpopulation);
     setCountry(getcountry);
     setPopulation(getpopulation);
   }
 getdata();
  },[]);
    return(
        <React.Fragment>
            <div className="container-fluid">
            
            <div className="row">               
                <div className="col-md-5 mb-3 mt-3 ">
            <Pie 
               width={300}
                height={200}
                data={{                                          
                labels: country,
                datasets: [
                    {
                      label: 'Price:',
                      data: population,
                      backgroundColor: [
                        'rgba(255, 99, 132, 10.2)',
                        'rgba(54, 162, 235, 10.2)',
                        'rgba(255, 206, 86, 10.2)',
                        'rgba(75, 192, 192, 10.2)',
                        'rgba(153, 102, 255, 10.2)',
                        'rgba(255, 159, 64, 10.2)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',
                        'rgba(255, 99, 132, 10.2)',
                        'rgba(54, 162, 235, 10.2)',
                        'rgba(255, 206, 86, 10.2)',
                        'rgba(75, 192, 192, 10.2)',
                        'rgba(153, 102, 255, 10.2)',
                        'rgba(255, 159, 64, 10.2)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',
                        'rgba(255, 99, 132, 10.2)',
                        'rgba(54, 162, 235, 10.2)',
                        'rgba(255, 206, 86, 10.2)',
                        'rgba(75, 192, 192, 10.2)',
                        'rgba(153, 102, 255, 10.2)',
                        'rgba(255, 159, 64, 10.2)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',
                        'rgba(255, 99, 132, 10.2)',
                        'rgba(54, 162, 235, 10.2)',
                        'rgba(255, 206, 86, 10.2)',
                        'rgba(75, 192, 192, 10.2)',
                        'rgba(153, 102, 255, 10.2)',
                        'rgba(255, 159, 64, 10.2)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',
                        
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',                               
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',       
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 109, 64, 10.6)',
                        'rgba(125, 169, 34, 10.8)',
                        'rgba(225, 99, 251, 10.3)',
                        'rgba(225, 99, 101, 10.4)',       
                      ],
                      borderWidth: 1,
                      hoverOffset:20,
                      offset: [20,0,0,0,0,0,0,0,0,0]                     
                    },
                  ],
            }}
            options={{                 
                responsive: true,         
                plugins:{
                    title:{
                        fontSize: 30,
                        text:'Show All Products',
                        display: true ,
                        font:{ size:20}   
                    },
                    legend:{
                      labels:{
                        font:{size:15}
                      }
                    }                        
                 },                
               }}    
             />
            </div>
        </div>
    </div>
    </React.Fragment>
    );

}
export default Piechart;