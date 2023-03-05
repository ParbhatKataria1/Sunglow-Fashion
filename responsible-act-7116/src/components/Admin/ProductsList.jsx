import { getAllProductData } from "@/redux/allProduct/allProduct.action";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListGenerator } from "../../utils/function";
import { base_url } from "../../utils/url";
import Accordion1 from "../accordion1";
import ProductItem from "./productItem";

// const categories = [
//   { id: 1, category: "Mobiles" },
//   { id: 2, category: "Tablets" },
//   { id: 3, category: "TV" },
//   { id: 4, category: "Laptops" },
//   { id: 5, category: "Washing Mach..." },
//   { id: 6, category: "Refrigerators" },
// ];
// const starRating = [
//   { id: 1,star:2 },
//   { id: 2,star:3 },
//   { id: 3,star:4 },
//   { id: 4,star:5,}

// ];

const url = `${base_url}/allproduct`;

const ProductsList = () => {
  let temp = useSelector((state)=>state.productReducer);
  temp = temp.allProductData;
  const [data, setData] = useState([...temp]);
  console.log('temp', data, temp);
  
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

useEffect(()=>{
  if(data.length==0){
    dispatch(getAllProductData()).then((res)=>{
      setData([...res])
    })
  }
},[])




  // const getData = async () => {
  //   axios
  //     .get(`${url}`)
  //     .then((res) => {
  //       setData(res.data);
  //       setProductList(productListGenerator(res.data));
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleChange=(e)=>{
    let temp = [...data];
    if(e.target.value==='lth'){
      setData(temp.sort((a,b)=>(parseInt(a.price))-parseInt(b.price)))
      console.log('sorting')
    }else if(e.target.value==='htl'){
      setData(temp.sort((a,b)=>(+b.price)-(+a.price)))
    }
    console.log(data)
  }


  // useEffect(() => {
  //   getData();
  // }, []);


  // console.log("getData", getData);
  // console.log("url", url);
  return (
    <Box pos={"relative"} border={"0px solid green"} marginLeft={"-90px"}>
      <Flex gap={"10px"} justifyContent={"center"} textAlign={"center"}>
        <Box
          cursor={"pointer"}
          pt={"5px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/54JigepSuZ2XyUc23wRjO3/b28c3fc1698914dd898dbe7ebcbd88c1/Dress_Toppers_Casual_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          WEDDING GUEST DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/6IfiRiqCR8n6Qtx499wHhk/045c88beb8c368c4ea7fa3c40174b796/Dress_Toppers_Wedding_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          CASUAL DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/4IFhnhWQZpy0mGYEQeDwyZ/7f5135fc723f65cebb8463a4a2d677b8/Dress_Toppers_Party_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          PARTY DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/2ELHKaXeyUADzPjC50Pvwb/f2d5b7b073cbdadb782a81677da28c4f/Dress_Toppers_White_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          WORK DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/3QIqqv5gyl0Fn7LnO3AOw3/89ea89e1fb2fbadf64fa35da2a0ecdd8/Dress_Toppers_Black_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          VACATION DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/4djTq9S22vqPWjObvUHDCE/2d9f1cc9d091a32a665fc00f52b5ebd2/Dress_Toppers_Formal_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          FORMAL DRESSES
        </Box>
      </Flex>
      <Flex w={"100%"} p='20px' m={"20px 0px 5px 150px"} justifyContent={"space-between"}>
        <Heading
          fontSize={"xl"}
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
        >
          {" "}
          Dresses:
          <Text fontSize={"small"} fontWeight={"normal"}>
            {data.length} products
          </Text>{" "}
        </Heading>
        <Flex alignItems={"center"} gap={"7px"}>
          <Text>Sort:</Text>
          <Select placeholder='Featured' onChange={(e)=>handleChange(e)} >
                            <option value={'lth'}>Price: Low to High</option>
                            <option value={'htl'}>Price: High to Low</option>
                        </Select>
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        m={"auto"}
        mt={"0px"}
        justifyContent={"space-between"}
        fontSize={"15px"}
      >

<Flex flexDir={'column'} w={'35%'} mt={'-60px'}>
                  <Text fontSize={'small'} mb={'10px'} borderBottom={'1px solid grey'}>Browse by:</Text>
                  
                  <Flex flexDir={'column'}>
                  <Text fontSize={'sm'} mb={'10px'}>Filter by:</Text>
                  <Flex flexDir={'column'}>
                      <Accordion1 data={data} setData={setData}/>
                  </Flex>
                  </Flex>
              </Flex>




        

        <GridItem p={{ base: 1, sm: 1, md: 1 }}>
          <Flex justifyContent={"flex-end"} mb={59}></Flex>
          <Grid
            w={"100%"}
            margin={"auto"}
            gridTemplateColumns={"repeat(4,1fr)"}
            gap={"5px"}
            marginTop={"-60px"}
          >
            {data.map((el) => {
              return (
                <ProductItem
                  key={el.id}
                  {...el}
                  // getData={getData}
                  // url={url}
                />
              );
            })}
          </Grid>
        </GridItem>
      </Flex>
    </Box>
  );
};

export default ProductsList;

