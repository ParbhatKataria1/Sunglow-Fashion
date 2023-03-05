import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';

  import React, { useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useDispatch } from 'react-redux';
import { postNavItems } from '@/redux/nav/nav.action';
import { postALlProductData } from '@/redux/allProduct/allProduct.action';


const intitialData = {
  name: "",
  image: "",
  colour:"",
  size:"",
  price: "",
};

  
  export default function AddProduct() {
    const [data, setData] = useState(intitialData);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const toast = useToast();
  const {
    name,
    image,
    price,
    colour,
    size,
  } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const val =
      name === "price"
        ? Number(value)
        : value;
    setData({ ...data, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast({
      position: "top-left",
      render: () => (
        <Flex
          color="white"
          border="4px solid white"
          p={"10px"}
          bgColor="green.400"
        >
          <CheckCircleIcon w={30} h={30} />
          <Text size="lg" ml="15px">
            Product has been added!!{" "}
          </Text>
        </Flex>
      ),
    });
    dispatch(postALlProductData(data)).then((res)=>{setData(intitialData);console.log(res)});
    // navigate("/")
  };
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'white')} >
        <Stack spacing={8} mx={'100px'} w={'600px'} py={3} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('gray.100', 'gray.700')}
            boxShadow={'lg'} 
            width={"90%"}
            p={30}>
            <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel color={"blue.700"}>Product Name</FormLabel>
          <Input
            type="text"
            id="1"
            placeholder="Enter Product Name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <FormLabel mt={4} color={"blue.700"}>Image Url</FormLabel>
          <Input
            type="text"
            placeholder="Enter Image Url"
            value={image}
            onChange={handleChange}
            name = "image"
          />
          <FormLabel mt={4} color={"blue.700"}>Price</FormLabel>
          <Input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={handleChange}
            name = "price"
          />
          <FormLabel mt={4} color={"blue.700"}>Colour</FormLabel>
          <Input
            type="text"
            placeholder="Enter Colour"
            value={colour}
            onChange={handleChange}
            name = "colour"
          />
          <FormLabel mt={4} color={"blue.700"}>Size</FormLabel>
          <Input
            type="text"
            placeholder="Enter Size"
            value={size}
            onChange={handleChange}
            name = "size"
          />
          <Button
            w={"440px"}
            mb={2}
            mt={8}
            onClick={handleSubmit}
            colorscheme="green"
            type="submit"
            isLoading={loading}bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Add New Product
          </Button>
        </FormControl>
      </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }