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
import ProductsList from "../../components/Admin/ProductsList";
import EditProduct from "../../components/Admin/EditProduct";
import { base_url } from "../../Utils/url";
import AddProduct from "@/components/Admin/AddProduct";
import Dashboard from "@/components/Admin/Dashboard";

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
           <Dashboard/>
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
