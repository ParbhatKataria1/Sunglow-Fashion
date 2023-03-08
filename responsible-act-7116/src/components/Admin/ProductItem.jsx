import React, { useEffect, useState } from "react";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,Circle,Image,Flex,Text,useToast,Tooltip,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,Heading,ModalCloseButton,ModalBody,HStack,PinInput,PinInputField,ModalFooter,Button,Card,CardBody,Stack,CardFooter,ButtonGroup, FormControl, FormLabel, InputGroup, InputLeftAddon,
} from "@chakra-ui/react";
import {
  Input,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { AiFillEdit, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { convertor } from "../../utils/function"
import EditProduct from "./editProduct";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { deleteNavItems } from "@/redux/nav/nav.action";
import { deleteAllProductData, updateAllProductData } from "@/redux/allProduct/allProduct.action";
import Link from "next/link";
import { getProduct } from "@/utils/apiFunction";

// ---------------

// ------------------
const ProductItem = ({
  type,
  el,
  title,
  price,
  id,
  image,getData, justUpdate}) => {
    const router = useRouter()
    const dispatch = useDispatch();
    // const [update, setupdate] = useState();
    
    const store = useSelector(state=>state.navReducer);
    const url = `https://apiserver-no4z.onrender.com/${type}`

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editProduct=(id)=>{
    
    console.log(id)
    onOpen()
  }

  // console.log(image, 'image')

  const deleteProduct = async () => {
    return axios.delete(`${url}/${id}`);
  };

  const handleDelete = () => {
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
  // console.log("el12",el);
  

  return (




    <>
    <Card mt='10px'  key={id} maxW='sm'>
      <CardBody>
        <Link  href={`/${type}/${id}`}>
          <Image id='hoverimg' onMouseOver={e=>e.target.srcset=`${image.furl+image.version.v3+image.burl}`} onMouseOut={e=>e.target.srcset=`${image.furl+image.version.v1+image.burl}`} src={image.furl+image.version.v1+image.burl} objectFit="scale-down" style={{cursor:'pointer',}} width={250} height={'340px'} alt={'img1'}/></Link>

          <Stack mt='6' >
            <Heading size='sm'>{title}</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos incidunt quae veniam?</Text>
                            
              <Text color='blue.600' fontSize='md'>
                              ${price}
                            </Text>
                          </Stack>
                        </CardBody>
                        {/* <Divider /> */}
                        <CardFooter >
                          <ButtonGroup >
                            <Button onClick={handleDelete}  variant='solid' size='md' >
                            <DeleteIcon
                              boxSize="1em"
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                            />
                            </Button>
                            <Link href={`/${type}/${id}`}>
                            <Button variant='outline'  size='md' >
                              Info
                              
                            </Button>
                            </Link>
                            <Button onClick={()=>editProduct(id)}><AiFillEdit /></Button>
                          </ButtonGroup>
                        </CardFooter>

                      </Card>
                      <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent  >
                  <ModalCloseButton />
                  <ModalBody>
                  <UserProfileEdit justUpdate={justUpdate} id={id} img={image} prc={price} type={type} titl={title}/>

                  </ModalBody>

                </ModalContent>
              </Modal>
    </>
  );
};

export default ProductItem;


const intitialData = {
  
};


export function UserProfileEdit({img, titl, prc, type, id, justUpdate}) {

  const url = `https://apiserver-no4z.onrender.com/${type}/${id}`;
  const [data, setData] = useState(intitialData);
  const dispatch = useDispatch()
  const [loading] = useState(false);
  const toast = useToast();
  const {
    title,
    image,
    price,
  } = data;

  const handleChange = (name, value) => {
    const val =
    name === "price"
    ? Number(value)
    : value;
    setData({ ...data, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" &&
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
      ).then(setData({...intitialData}))

  };
  useEffect(() => {
    if(id){

      getProduct(url).then((res) => setData(res), justUpdate());
    }
  }, []);





  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Edit Product Details
        </Heading>
        <FormControl id="userName">
          <FormLabel>Product Image</FormLabel>
          <Stack direction={'column'} spacing={6}>
            <Center>
              <Image w='100px' borderRadius={'10px'} src={`${img.furl+img.version.v3+img.burl}`}>
                
              </Image>
            </Center>
            <Center w="full">
              {/* <Button w="full">Change Image</Button> */}
              <InputGroup>
                <InputLeftAddon children='https://' />
                <Input type='text' placeholder=''
                  onChange={(e)=>handleChange('image', e.target.value)}
                />
              </InputGroup>

            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName">
          <FormLabel>Title</FormLabel>
          <Input
            placeholder={titl}
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={(e)=>handleChange('title', e.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Price</FormLabel>
          <Input
            placeholder={prc}
            _placeholder={{ color: 'gray.500' }}
            type="email"
            onChange={(e)=>handleChange('price', e.target.value)}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          
          <Button
          onClick={handleSubmit}
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Update
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}