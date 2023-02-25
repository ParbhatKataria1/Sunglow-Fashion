import React from "react";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  Text,
  useToast,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  HStack,
  PinInput,
  PinInputField,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { AiFillEdit, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { convertor } from "../../Utils/function"
import EditProduct from "./EditProduct";
import Image from "next/image";


const ProductItem = ({
  title,
  price,
  id,
  img, url,getData}) => {


  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editProduct=(id)=>{
    console.log(id)
    onOpen()
  }



  const deleteProduct = async () => {
    return axios.delete(`${url}/${id}`);
  };

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() =>
        toast({
          position: "bottom-center",
          duration: 1200,
          render: () => (
            <Flex
              color="white"
              border="4px solid white"
              p={"10px"}
              bgColor="green.400"
              borderRadius={"15px"}
            >
              <CheckCircleIcon w={30} h={30} />
              <Text size="lg" ml="15px">{`${title} has been deleted!`}</Text>
            </Flex>
          ),
        })
      )
      .then(() => getData());
  };
  

  return (
    <Box border={'0px solid red'} width={'100%'}>
      <Flex
        w="100%"
        justify="space-between"
        pt="20px"
        pb={"20px"}
        gap={"20px"}
        borderBottom="1px solid gainsboro"
        alignItems={"center"}
      >
        <Image src={img} width={100} height={200} alt="thumb"/>
        <Box w="50%" textAlign={"start"}>
          <Text fontSize={"16px"}>
            <Text as="span" fontSize={"16px"} fontWeight={"bold"}>
              Price :{" "}
            </Text>
            {convertor(price)}
          </Text>
          <Text noOfLines={1} fontSize={"16px"} mb="20px">
            <Text as="span" fontSize={"16px"} fontWeight={"bold"}>
              Product Name :{" "}
            </Text>
            {title}
          </Text>
        </Box>
        <Box display={"flex"} gap={3}>
          <Tooltip label="Delete">
            <Circle
              as="button"
              bgColor="#f1f1f1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="30px"
              p={["1", "1", "2"]}
              onClick={() => handleDelete(id)}
            >
              <DeleteIcon
                boxSize="1em"
                display="flex"
                justifyContent="center"
                alignItems="center"
              />
            </Circle>
          </Tooltip>
          <Tooltip label="Edit">
            <Circle
              as="button"
              bgColor="#f1f1f1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="30px"
              p={["1", "1", "2"]}
              onClick={()=>editProduct(id)}
            >
              <AiFillEdit />
            </Circle>
          </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent  >
                  <ModalHeader>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <HStack my={1}></HStack>
                    <HStack justifyContent={"center"} alignItems={"center"} h={"400px"} w={"100px"}>
                      <EditProduct id={id}/>
                    </HStack>
                  </ModalBody>

                  <ModalFooter justifyContent={"center"} alignItems={"center"}>
                  </ModalFooter>
                </ModalContent>
              </Modal>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductItem;
