import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";


const intitialData = {
  title: "",
  image: "",
  price: "",
};

const AddProducts = () => {
  const [data, setData] = useState(intitialData);
  const imgref = useRef();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const {
    title,
    image,
    price
  } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const val =
      name === price
        ? Number(value)
        : value;
    setData({ ...data, [name]: val });
  };

  const handleImage = async () => {
    setLoading(true);
    let form = new FormData();
    form.append("image", imgref.current.files[0]);
    let res = await fetch(
      "https://apiserver-no4z.onrender.com",
      {
        method: "POST",
        body: form,
      }
    );
    let acc_res = await res.json();
    console.log("data",acc_res);

    const imageurl = acc_res.data.display_url;
    setData({ ...data, thumbnail: imageurl });
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      price === 0
    ) {
      toast({
        position: "top-left",

        render: () => (
          <Flex color="white" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Add Product Image
            </Text>
          </Flex>
        ),
      });
      return;
    }
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
    await fetch("http://localhost:8080/testing", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setData(intitialData));
    // navigate("/")
  };

  return (
    <Box mt={8}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            id="1"
            placeholder="Enter Product Name"
            value={title}
            name="title"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Product Image</FormLabel>
          <Input id="3" type="file" onChange={handleImage} ref={imgref} />

          <FormLabel mt={4}>Product Price (Rs.)</FormLabel>
          <Input
          id="4"
            type="number"
            placeholder="Enter Product Price"
            value={price}
            name="price"
            onChange={handleChange}
          />

          <Button
            mb={2}
            mt={8}
            colorscheme="green"
            type="submit"
            isLoading={loading}
          >
            Add New Product
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default AddProducts;
