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
  Image,
  useColorModeValue,
  useToast,
  Select,
  HStack,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { postNavItems } from "@/redux/nav/nav.action";
import { postALlProductData } from "@/redux/allProduct/allProduct.action";
import axios from "axios";

const base = `https://apiserver-no4z.onrender.com`;
const intitialData = {
  title: "",
  price: "",
  image: {
    furl: "",
    version: {
      v1: "",
      v2: "2",
      v3: "3",
      v4: "4",
    },
    burl: "?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=360",
    surl: "?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",
  },
  color: [
    {
      colorimg:
        "https://images.urbndata.com/is/image/Anthropologie/4123650590242_437_s?fit=constrain&hei=56&qlt=75",
      color: "YELLOW",
    },
    {
      colorimg:
        "https://images.urbndata.com/is/image/Anthropologie/4123650590242_070_s?fit=constrain&hei=56&qlt=75",
      color: "YELLOW",
    },
    {
      colorimg:
        "https://images.urbndata.com/is/image/Anthropologie/4123650590242_042_s?fit=constrain&hei=56&qlt=75",
      color: "YELLOW",
    },
    {
      colorimg:
        "https://images.urbndata.com/is/image/Anthropologie/4123650590242_041_s?fit=constrain&hei=56&qlt=75",
      color: "YELLOW",
    },
    {
      colorimg:
        "https://images.urbndata.com/is/image/Anthropologie/4123650590242_027_s?fit=constrain&hei=56&qlt=75",
      color: "YELLOW",
    },
    {
      colorimg:
        "https://images.urbndata.com/is/image/Anthropologie/4123650590242_001_s?fit=constrain&hei=56&qlt=75",
      color: "YELLOW",
    },
    {
      colorimg:
        "https://images.urbndata.com/is/image/Anthropologie/4123650590242_010_s?fit=constrain&hei=56&qlt=75",
      color: "YELLOW",
    },
  ],
  fit: [
    {
      title: "Standard",
      choosed: true,
    },
    {
      title: "Petite",
      choosed: false,
    },
    {
      title: "Plus",
      choosed: false,
    },
  ],
  size: [
    {
      s: "XXS",
    },
    {
      s: "XS",
    },
    {
      s: "S",
    },
    {
      s: "M",
    },
    {
      s: "L",
    },
    {
      s: "XL",
    },
  ],
  productdetails: {
    styleno: 4130326950015,
    colorcode: "072",
    discription: [
      {
        disc: "Viscose, nylon; polyester trim",
      },
      {
        disc: "Side zip",
      },
      {
        disc: "Hand wash",
      },
      {
        disc: "Imported",
      },
    ],
    dimensions: [
      {
        title: "Standard",
        desc: "Measures 27.75* long",
      },
      {
        title: "Petite",
        desc: "Measures 26* long",
      },
      {
        title: "Plus",
        desc: "Measures 30.75* long",
      },
    ],
  },
  sideimg: [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114950250001_004_b2?$an-category$&qlt=80&fit=constrain",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80132772_024_b2?$an-category$&qlt=80&fit=constrain",
    },
  ],
};

export default function AddProduct() {
  const [update, setupdate] = useState(false);
  const [data, setData] = useState(intitialData);
  const [loading, setLoading] = useState(false);
  const [type, settype] = useState("allproduct");
  const dispatch = useDispatch();
  const toast = useToast();
  const { title, image, price } = data;
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    const val = name === "price" ? Number(value) : value;

    let obj;
    if (name === "image") {
      obj = { ...data, image: { ...data.image, furl: val } };
    } else {
      obj = { ...data, [name]: val };
    }
    // console.log(data);
    setData(obj);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("we are in the ");
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
    if (type == "allproduct") {
      axios.post(`${base}/${type}`, data).then((res) => {
        setData({ ...intitialData });
        // console.log(res.data);
      });
      // dispatch(postALlProductData(data)).then((res)=>{setData(intitialData);console.log(res)});
    } else if (type == "dresses") {
      axios.post(`${base}/${type}`, data).then((res) => {
        setData({ ...intitialData });
        // console.log(res.data);
      });
    } else if (type == "clothing") {
      axios.post(`${base}/${type}`, data).then((res) => {
        setData({ ...intitialData });
        // console.log(res.data);
      });
    } else if (type == "shoes") {
      axios.post(`${base}/${type}`, data).then((res) => {
        setData({ ...intitialData });
        // console.log(res.data);
      });
    }

    // navigate("/")
  };

  // useEffect(()=>{},[data])
  return (
    <>
      <Stack h="500px" bg="white" direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Add Product</Heading>
            <FormControl id="text">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter the product title"
                value={title}
                name="title"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Image Link</FormLabel>
              <Input
                type="text"
                placeholder="Enter Image Url"
                value={image.furl}
                onChange={handleChange}
                name="image"
              />
            </FormControl>
            <FormControl id="price">
              <HStack>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter Price"
                  value={price}
                  onChange={handleChange}
                  name="price"
                />
                <Select
                  placeholder="All Product"
                  onChange={(e) => {
                    settype(e.target.value);
                  }}
                >
                  <option value="allproduct">All Product</option>
                  <option value="dresses">Dresses</option>
                  <option value="shoes">Shoes</option>
                  <option value="clothing">Clothing</option>
                </Select>
              </HStack>
            </FormControl>
            <Stack spacing={6}>
              <Button
                onClick={handleSubmit}
                colorScheme={"blue"}
                variant={"solid"}
              >
                Add To The Database
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            w="100%"
            src={
              "https://images.urbndata.com/is/image/Anthropologie/4123650590242_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"
            }
          />
        </Flex>
      </Stack>

      {/* <Flex
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
      </Flex> */}
    </>
  );
}
