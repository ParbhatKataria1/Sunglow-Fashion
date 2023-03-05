import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

import { getProduct, patchProduct } from "../../utils/apiFunction";
import { base_url } from "../../utils/url";
import { updateAllProductData } from "@/redux/allProduct/allProduct.action";
import { useDispatch } from "react-redux";


const intitialData = {
  
};

const EditProduct = ({id}) => {
  const url = `${base_url}/allproducts/${id}`;
  const [data, setData] = useState(intitialData);
  const dispatch = useDispatch()
  const [loading] = useState(false);
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
    if (
      name === "" &&
      price === 0 &&
      size === "" 
    ) {
      toast({
        position: "top-left",
        render: () => (
          <Flex color="red" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Please Type Something
            </Text>
          </Flex>
        ),
      });
      return;
    }
    dispatch(updateAllProductData(id, data))
      .then(() =>
        toast({
          position: "bottom",
          render: () => (
            <Flex
              color="white"
              border="4px solid white"
              p={"10px"}
              bgColor="green.400"
            >
              <CheckCircleIcon w={30} h={30} />
              <Text size="lg" ml="15px">
                Product has been updated!!{" "}
              </Text>
            </Flex>
          ),
        })
      ).then(setData(intitialData))

  };
  useEffect(() => {
    if(id){

      getProduct(url).then((res) => setData(res));
    }
  }, []);

  return (
    <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')} >
        <Stack spacing={8} mx={'100px'} w={'600px'} py={3} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('orange.300', 'gray.700')}
            boxShadow={'lg'} 
            width={"90%"}
            p={30}>
            <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
        <FormControl >
          <FormLabel color={"blue.700"}>Product Name</FormLabel>
          <Input
            type="text"
            id="1"
            placeholder="Enter Product Name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          {/* <FormLabel mt={4} color={"blue.700"}>Image Url</FormLabel>
          <Input
            type="text"
            placeholder="Enter Image Url"
            value={image}
            onChange={handleChange}
            name = "image"
          /> */}
          <FormLabel mt={4} color={"blue.700"}>Price</FormLabel>
          <Input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={handleChange}
            name = "price"
          />
          {/* <FormLabel mt={4} color={"blue.700"}>Colour</FormLabel>
          <Input
            type="text"
            placeholder="Enter Colour"
            value={colour}
            onChange={handleChange}
            name = "colour"
          /> */}
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
            colorscheme="green"
            type="submit"
            isLoading={loading}bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            UPDATE IT!
          </Button>
        </FormControl>
      </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
  );
};

export default EditProduct;
