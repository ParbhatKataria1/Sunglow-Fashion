
import React, { useEffect, useState } from 'react'
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
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
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Search2Icon
} from '@chakra-ui/icons';

import { BsFillCartFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';






const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
    <Box>
      <SimpleSlider/>
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
            <Image w={'140px'} h='100px' objectFit={'cover'} layout='fill' src='logo.png' />

          

        </Flex>
        

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          alignItems='center'
          spacing={6}>
              <InputGroup w='md' >
            <Input  type='tel' placeholder='Search' />
            <InputRightElement
            
              pointerEvents='none'

              children={<Search2Icon color='gray.300' />}

            />
          </InputGroup>
          <svg fill='gray' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
             
            <BasicUsage/>
          </Button>
          
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



const DesktopNav = ({NAV_ITEMS}) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

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
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
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
    </Link>
  );
};





const NAV_ITEMS1 = [
  {
    label: 'New!',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];
const NAV_ITEMS2 = [
  {
    label: 'not inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];

export class SimpleSlider extends Component {
  render() {
    const settings = {
      lazyLoad: true,
      autoplaySpeed: 3000,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
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
          <Box bg='red.300'>
            <Center>FROCKS FULL OF SUNSHINE these spring favorites had us at yellow shop the new collection</Center>
          </Box>
          <Box bg='gray.400'>
            <Center>2</Center>
          </Box>
          <Box bg='blue.300'>
            <Center>3</Center>
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
            <Button
              mt='15px'
              colorScheme='blue'
              width={"100%"}
              variant='outline'
            >
              USE MOBILE NUMBER INSTEAD
            </Button>
          </ModalBody>

          <ModalFooter>
            <hr />
            <Flex w={"100%"} direction='column'>
              <Text fontSize={"19px"} fontWeight='semibold'>
                Sign Up
              </Text>
              <Text fontSize={"11px"} mt='9px'>
                Welcome! It's quick and easy to set up an account
              </Text>
              <Button mt='15px' variant='outline'>
                CREATE AN ACCOUNT
              </Button>

            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

}


export default Navbar