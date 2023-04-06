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
import { convertor } from "../../utils/function"
import EditProduct from "./editProduct";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { deleteNavItems } from "@/redux/nav/nav.action";
import { deleteAllProductData } from "@/redux/allProduct/allProduct.action";

// ---------------

// ------------------
const ProductItem = ({
  el,
  title,
  price,
  id,
  image, url,getData}) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const store = useSelector(state=>state.navReducer)

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editProduct=(id)=>{
    console.log(id)
    onOpen()
  }



  const deleteProduct = async () => {
    return axios.delete(`${url}/${id}`);
  };

  const handleDelete = () => {
    console.log(id+"*******************************************************")
    dispatch(deleteAllProductData(id))
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
  };
  // console.log("el12",el)

  return (
    <Box border={'0px solid red'} width={'100%'}>
    <Flex flexDir={'column'} key={  id} position={"relative"} onClick={() => router.push(`/dresses/${  id}`)}>
    {/* <Flex flexDir={'column'}> */}
    <Image id='hoverimg' onMouseOver={e => e.target.srcset = `${image.furl + '3' +   image.burl}`} onMouseOut={e => e.target.srcset = `${  image.furl +      image.burl}`} src={  image.furl  +   image.burl} style={{ cursor: 'pointer', }} width={450} height={300} alt={'img1'} />
    <Text fontSize={'small'} >{  title}</Text>
    {/* </Flex> */}
    <Text>${  price}</Text>
  </Flex>
        <Box display={"flex"} gap={3}>
          <Tooltip label="Delete">
            <Circle
              onClick={handleDelete}
              as="button"
              bgColor="#f1f1f1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="30px"
              p={["1", "1", "2"]}
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
    </Box>
  );
};

export default ProductItem;