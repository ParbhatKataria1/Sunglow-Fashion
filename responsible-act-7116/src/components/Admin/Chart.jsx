
import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const temp = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

export function Piechart() {
  let [data01, setdata01] = useState([...temp]);
  const justForUpdate = useSelector(state=>state)


  async function getData(){
    let arr = [];
    let obj = {};

    let otherproducts = await axios.get('https://apiserver-no4z.onrender.com/allproduct');
    // console.log(products.data)
    otherproducts = otherproducts.data.length;
    obj = {};
    obj.name = 'OtherProducts';
    obj.value = otherproducts;
    arr.push(obj);

    let products = await axios.get('https://apiserver-no4z.onrender.com/dresses');
    // console.log(products.data)
    products = products.data.length;
    obj = {};
    obj.name = 'products';
    obj.value = products;
    arr.push(obj);

    let shoes = await axios.get('https://apiserver-no4z.onrender.com/shoes');
    shoes = shoes.data.length;
    obj = {};
    obj.name = 'shoes';
    obj.value = shoes;
    arr.push(obj);

    let clothing = await axios.get('https://apiserver-no4z.onrender.com/clothing');
    clothing = clothing.data.length;
    obj = {};
    obj.name = 'clothing';
    obj.value = clothing;
    arr.push(obj);



    setdata01([...arr]);
  }
  // console.log(data01,'data', temp, 'temp')

  useEffect(()=>{
    getData()
  },[])
  return (
    <Flex  mb='100px' bg='white'   borderRadius='6px'  boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} alignItems='center'>
      <PieChart width={350} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      <LineChart1/>
    </Flex>
  );
}




const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  }
];

export function LineChart1() {
  const [data01, setdata01] = useState([{name:'Price',uv:0}]);
  async function getData(){
    let arr = [{name:'Price',uv:0}]

    let products = await axios.get('https://apiserver-no4z.onrender.com/dresses');
    // console.log(products.data)
    products = products.data;
    // console.log(products)
    products.map((el)=>{
      arr.push({uv:parseInt(el.price)});
    })
    

    let shoes = await axios.get('https://apiserver-no4z.onrender.com/shoes');
    shoes = shoes.data;
    shoes.map((el)=>{
      arr.push({uv:parseInt(el.price)});
    })
    

    let clothing = await axios.get('https://apiserver-no4z.onrender.com/clothing');
    clothing = clothing.data;
    clothing.map((el)=>{
      arr.push({uv:parseInt(el.price)});
    })
    



    setdata01([...arr]);
  }
  // console.log(data01,'data', temp, 'temp')

  useEffect(()=>{
    getData()
  },[])
  
  // console.log(data01)
  return (
    <LineChart
      width={500}
      height={300}
      data={data01}
      cx={740}
        cy={100}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
