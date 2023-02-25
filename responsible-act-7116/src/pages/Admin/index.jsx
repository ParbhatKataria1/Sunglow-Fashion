import {
  Box,
  Flex,
  Grid,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductsList from "../../Components/Admin/ProductsList";
import EditProduct from "../../Components/Admin/EditProduct";
import { base_url } from "../../Utils/url";
import AddProduct from "@/components/Admin/AddProduct";
import Piechart from "@/components/Admin/Chart";
// import { cardsData } from "@/components/Admin/Data/Data";

const url=`${base_url}/allproducts`;
const Admin = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Box w={["95%", "95%", "80%"]} m="auto" >
      <Tabs size="md" variant="enclosed">
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 4fr' }} gap={4} >
        <TabList height={"400px"} mt={"60px"} >
           <Flex flexDirection="column" color={"red.500"}>
              <Tab bg="orange.300" mt={"5px"}  p={"15px"} fontSize={"15px"} fontWeight={900}>Home</Tab>
              <Tab bg="orange.300" mt={"5px"}  p={"15px"} fontSize={"15px"} fontWeight={900}>Add Product</Tab>
              <Tab bg="orange.300" mt={"5px"}  p={"15px"} fontSize={"15px"} fontWeight={900}>Products</Tab>
              <Tab bg="orange.300" mt={"5px"}  p={"15px"} fontSize={"15px"} fontWeight={900}>Edit Product</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Piechart/>
            {/*<Box
              display="flex"
              mt={8}
              flexDirection={["column", "row", "row"]}
              gap="20px"
            >
           
            <Box
            w={["95%", "30%", "30%"]}
            m="auto"
            backgroundColor={"green"}
            height={"200px"}
            borderRadius="20px"
            fontSize="25px"
            textAlign="center"
            display= "flex"
            justifyContent={"center"}
            alignItems = "center"
            color={"white"}
            >
            {data.length} Products
            </Box>
         
              <Box
                w={["95%", "30%", "30%"]}
                m="auto"
                backgroundColor={"orange"}
                height={"200px"}
                borderRadius="20px"
                fontSize="25px"
                display= "flex"
                justifyContent={"center"}
                alignItems = "center"
                textAlign="center"
                color={"white"}
              >
                0 Under Review
              </Box>
              <Box
                w={["95%", "30%", "30%"]}
                m="auto"
                backgroundColor={"tomato"}
                height={"200px"}
                borderRadius="20px"
                fontSize="25px"
                display= "flex"
                justifyContent={"center"}
                alignItems = "center"
                color={"white"}
                textAlign="center"
              >
                0 have not Pass Review
              </Box>
            </Box>*/}
          </TabPanel>
          <TabPanel>
            <Heading size={"lg"} textAlign={"left"} mt={4}>
            </Heading>
            <AddProduct/>
          </TabPanel>
          <TabPanel>
            <Heading size={"lg"} textAlign={"left"} mt={4}>
              All Products List
            </Heading>
            <ProductsList />
          </TabPanel>
          <TabPanel>
            <Heading size={"lg"} textAlign={"left"} mt={4}>
              All Products List
            </Heading>
            <EditProduct />
          </TabPanel>
          
        </TabPanels>
        </Grid>
      </Tabs>
    </Box>
  );
};

export default Admin;
