
import React, { useEffect, useState } from 'react'
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"


import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  TabList,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  Heading,
  VStack,
  HStack,
  Divider,
  useToast,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Search2Icon
} from '@chakra-ui/icons';

import { FcGoogle } from 'react-icons/fc';
import { BsFillCartFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getNavItems } from '@/redux/nav/nav.action';
import { getCartData } from '@/redux/cart/cart.action';
import { useRouter } from 'next/router';





function SearchItemBox({data}){
  const ChakraLinkColor = useColorModeValue('gray.600', 'gray.200');
  const ChakraLinkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  // console.log(data)
  const router = useRouter();
  // console.log('we are in search', data)
  // console.log(242)
  return (
    <>
    <Box zIndex='10' onClick={()=>console.log('gdagdasgdsagdsa')} overflow={'scroll'} w={'100%'} top='40px' p={'20px'}  h='450px' borderRadius={'8px'}  position={'absolute'}  boxShadow={'xl'}
        bg={popoverContentBgColor}
        rounded={'xl'}>
      {
        data.map((el)=>{
          return <Flex key={el.id}  alignItems={'center'} 
          display={'block'}
          p={2}
          rounded={'md'}
           direction={'row'} align={'center'}>
            
            <Flex>
            <Link  href={`/clothing`}>
            <Text
              transition={'all .3s ease'}fontWeight={500}>
                {el.title}
            </Text>
            </Link>


                <Flex
              transition={'all .3s ease'}
              transform={'translateX(-10px)'}
              opacity={0}
             
              justify={'flex-end'}
              align={'center'}
              flex={1}>
              <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>

            </Flex>
        
        </Flex> 
        
        })
      }
    </Box>
    </>
  )
}

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { data: session, status } = useSession();
  const [searchBox, setSearchBox] = useState(false);
  // const [isFocus, setIsFocus] = useState(false);
  const cartCount = useSelector(state=>state.cartReducer.cartData);
  const temp = useSelector(state=>state.cartReducer.cartData);
  
  // console.log(temp)
  const cartLength = cartCount.length;
  // console.log(cartLength)

  const dispatch = useDispatch();
  const [map, setmap] = useState([]);
  let profileImage= session?.user?.image;
  let profileName = session?.user?.name;
  // console.log(profileImage, profileName, session)

  


  const product = useSelector(state=>state?.navReducer?.navdata) || [];
  // console.log(product)
  useEffect(()=>{
    if(product.length==0)
    dispatch(getNavItems());
    
  },[]);

  useEffect(()=>{
    if(cartCount==0){
      dispatch(getCartData())
    }
  },[cartCount])
  
  
  function inputSearch(value){
    let temp = product.filter((el)=>{
      return el.title.toLowerCase().includes(value.toLowerCase())
    })
    if(value.trim().length==0)temp =[]
    if(temp.length){
      setSearchBox(true);
    }
    else {
      setSearchBox(false)
    }
    // console.log('temp', value, product)
    setmap(temp);
  }
  // console.log('searchBox', product)
  return (
    <>
    <Box zIndex={'1000'} h={'230px'}  width={'100%'}>
    
      <Box >
      <SimpleSlider/>
      </Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
          </Text>
          <Link href='/'>
            <Image w={'140px'} h='100px' objectFit={'cover'} layout='fill' src='https://www.linkpicture.com/q/logo_684.png' alt=""/>
            </Link>
          

        </Flex>
        

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          alignItems='center'
          spacing={6}>
            position={'relative'}
              <InputGroup w='md' >
            <Input type='tel' placeholder='Search' onChange={(e)=>{inputSearch(e.target.value)}} />
            <InputRightElement
            
              pointerEvents='none'


            />
            {searchBox &&  <SearchItemBox  data={map} /> }
          </InputGroup> 

          {/*  ***********cart ****************** */}
          <ToastExample cartLength={cartLength}/>
          
          
            {
              profileImage &&
              <VStack position={'relative'} alignItems='end' justifyContent={'end'}>
              <HStack w={'180px'} justifyContent='center'>
              <Image w={'30px'} borderRadius={'50px'} src={profileImage} ></Image>
              <Divider colorScheme='gray' orientation='vertical' />
              <Text fontSize={'16px'}>{profileName}</Text>

            </HStack>
              <Button right={'10px'} position={'absolute'} top='30px' size='xs' colorScheme='blue' onClick={()=>signOut('google')}>SignOut</Button>
            </VStack>
            }
          

          {
            !profileImage && <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            w='180px'
            variant={'ChakraLink'}
            href={'#'}>
             
            <BasicUsage/>
          </Button>
          }
          {
            profileImage && 
          <Link href='/admin'>
          <Button >Admin</Button>
          </Link>
          }
        </Stack>
      </Flex>

      <Flex w={'90%'} m='auto' justifyContent='left'>
        <Tabs variant='enclosed-colored'>

        <TabList>
          <Tab>ANTHROPOLOGIE</Tab>
          <Tab>ANTHRO-LIVING-HOME</Tab>
        </TabList>

        <TabPanels>
        <TabPanel>
          <Flex display={{ base: 'none', md: 'flex' }} >
            <DesktopNav NAV_ITEMS={NAV_ITEMS1}/>
          </Flex>
        </TabPanel>
        <TabPanel>
        <Flex display={{ base: 'none', md: 'flex' }} >
            <DesktopNav NAV_ITEMS={NAV_ITEMS2}/>
          </Flex>
        </TabPanel>

      </TabPanels>

        </Tabs>
      </Flex>
      
      
    </Box>
    
    </>
  )
}


function ToastExample({cartLength}) {
  const toast = useToast();
  const route = useRouter();
  const { data: session, status } = useSession();
  let profileImage= session?.user?.image;
  let profileName = session?.user?.name;

  function goToCart(){
    if(!profileImage && !profileName){

      return toast({
          title: 'ERROR!!',
          description: "You are not Signed. Please SignIn First",
          status: 'error',
          position:'bottom-left',
          duration: 4000,
          isClosable: true,
        })
    }
    else {
      route.push('/cartpage')
    }
  }
  

  return (

    <>
    <Box cursor={'pointer'} onClick={goToCart} position={'relative'}>
            <Box zIndex={'10'} >
            <svg fill='gray' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg></Box>
            <Flex p={'4px'} h='15px' fontSize={'14px'}  borderRadius={'50px'} bg='red.400' color={'white'} alignItems={'center' } zIndex='0' justifyContent='center' top={'0px'} left='24px' position='absolute' >{cartLength}</Flex>
    </Box>   
    </>
  )
}



const DesktopNav = ({NAV_ITEMS}) => {
  const ChakraLinkColor = useColorModeValue('gray.600', 'gray.200');
  const ChakraLinkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    // <h1>this is mee</h1>
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            {/* this is not causing poping effect  this is just the option that we have created like New, Dresses*/}
            <PopoverTrigger>
              <ChakraLink
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={ChakraLinkColor}
                _hover={{
                  textDecoration: 'none',
                  color: ChakraLinkHoverColor,
                }}>
                {navItem.label}
              </ChakraLink>
            </PopoverTrigger>
                {/* this is causing poping effect */}
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>

              </PopoverContent>

            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const DesktopSubNav = ({ label, href, subLabel, subOption }) => {
  const ChakraLinkColor = useColorModeValue('gray.600', 'gray.200');
  const ChakraLinkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    // <h1>this is mee</h1>
    <Box
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>




<Box>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>

            <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>

            </PopoverTrigger>
            {subOption && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {subOption.length && subOption.map((child, ind) => (
                    <DesktopSubOption key={ind} option={child} href={href} />
                  ))}
                </Stack>

              </PopoverContent>

            )}
          </Popover>
</Box>



{/* here is the ending */}


    </Box>
  );
};


const DesktopSubOption = ({ option, href }) => {
  return (
    // issue if I wrap this flex around ChakraLink then there will a hydration problem
    <Flex alignItems={'center'} role={'group'}
    display={'block'}
    p={2}
    rounded={'md'}
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}  direction={'row'} align={'center'}>
        <Link href={href}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
              {option}
            
          </Text>
        </Box>
          </Link>
      </Flex>
  );
};







const NAV_ITEMS1 = [
  {
    label: 'New!/Clothing',
    children: [
      {
        label: 'Shop by Category',
        subLabel: 'Accessories, Beauty & Wellness, Clothing',
        subOption:[
          'Accessories,Beauty & Wellness','Clothing'
        ],
        href: '/clothing',
      },
      {
        label: 'Featured',
        subLabel: 'Bold & Bright Dresses, Shirt Dresses',
        subOption:[
          '{Spring}Time to Celebrate','Trending: Citrus Shades',
          'Spring 2023: Sculpture + Shape',
          'Trending: Utility',
          'Trending: The Bubble',
          'Denim: Every Way, Every Day',
        ],
        href: '/clothing',
      },
    ],
  },
  {
    label: 'Dresses',
    children: [
      {
        label: 'Shop by Category',
        subLabel: 'Shop All Dresses, New! Top Rated Dresses',
        subOption:[
          'Shop All Dresses',
          'New!',
          'Top Rated Dresses',
          'Bridesmaid Dresse',
        ],
        href: '/dresses',
      },
      {
        label: 'Featured Shops',
        subLabel: 'Bold & Bright Dresses, Shirt Dresses',
        subOption:[
          'Bold & Bright Dresses',
          'Shirt Dresses',
          'Trending: Tulle',
          'Little Black Dresses'
        ],
        href: '/dresses',
      },
    ],
  },
  {
    label: 'Shoes',
    children: [
      {
        label: 'Shop by Category',
        subLabel: 'Shop All Shoes, New! Top Rated Dresses',
        subOption:[
          'Trending: Tulle',
          'Little Black Shoes'
        ],
        href: '/shoes',
      },
      {
        label: 'Featured Shops',
        subLabel: 'Bold & Bright Shoes, Shirt Dresses',
        subOption:[
          'Bold & Bright Shoes',
          'Trending: Tulle',
          'Little Black Shoes'
        ],
        href: '/shoes',
      },
    ],
    href: '/shoes',
  }
];
const NAV_ITEMS2 = [];


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div/>
  );
}

export  class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <div >
        <Slider {...settings}>
          <Box bg={'red.200'}>
            <Center>meet our most valuable layers Tees, Please! shop them all</Center>
          </Box>
          <Box bg={'red.200'}>
            <Center>crochet, ruffles, eyelet, lace... White shop little white dresses
            </Center>
          </Box>
        </Slider>
      </div>
    );
  }
}


function BasicUsage() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <Button
          as={"a"}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"pink.400"}
          href={"#"}
          _hover={{
            bg: "pink.300",
          }}
          onClick={onOpen}
        >
          <Flex justifyContent='space-around' alignItems={"center"} w='100%'>
            <svg
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
            >
              <path d='M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z' />
            </svg>
            <Text pl={"7px"}>Sign In/Sign Up</Text>
          </Flex>
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />

          <Text w={"90%"} m='auto' fontSize={"11px"}>
            Sign in so you can save items to your wishlists, track your orders,
            and check out faster!
          </Text>
          <ModalBody>
            <Text mt={"10px"}>Email*</Text>
            <Input placeholder='Email' size='md' />
            <Checkbox mt='10px' defaultChecked>
              <Text fontSize={"14px"}>Keep me signed in</Text>
            </Checkbox>
            <br />
            <Button
              mt='22px'
              colorScheme='blue'
              width={"100%"}
              onClick={onClose}
            >
              Next
            </Button>
            <br />
          </ModalBody>

          <ModalFooter>
            <hr />
            <Flex w={"100%"} direction='column'>
              <Text fontSize={"19px"} fontWeight='semibold'>
                Sign Up
              </Text>
              <Text fontSize={"11px"} mt='9px'>
                Welcome! It&apost;s quick and easy to set up an account
              </Text>
              <Button mt='15px' variant='outline'>
                CREATE AN ACCOUNT
              </Button>

              <Text> Or sing up with</Text>
              <Box textAlign={'center'}>
              <button className="btn btn-link btn-floating-mx-1"
              type='button'
                onClick={()=>signIn('google')}
              >
                <HStack>
                <FcGoogle/>
                <Text>Google</Text>
                </HStack>
              </button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

}


export default Navbar