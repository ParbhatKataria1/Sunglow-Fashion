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
import ProductsList from "../../components/admin/productsList";
import EditProduct from "../../components/admin/editProduct";
import { base_url } from "../../utils/url";
import AddProduct from "../../components/admin/addProduct";
import Dashboard from "../../components/admin/dashboard";

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
           <Flex flexDirection="column" color={"white"}>
              <Tab bg="blue.700" mt={"20px"} color={"white"}  p={"15px"} fontSize={"15px"} fontWeight={900}>Home</Tab>
              <Tab bg="blue.700" mt={"20px"}  p={"15px"} px='25px' fontSize={"15px"} fontWeight={900}>Add Product</Tab>
              <Tab bg="blue.700" mt={"20px"}  p={"15px"} fontSize={"15px"} fontWeight={900}>Products</Tab>
              <Tab bg="blue.700" mt={"20px"}  p={"15px"} fontSize={"15px"} fontWeight={900}>Edit Product</Tab>
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
