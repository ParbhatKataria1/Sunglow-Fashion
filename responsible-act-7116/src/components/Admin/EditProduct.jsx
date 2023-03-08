import React, { ReactNode, useEffect } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Grid,
  Button,
  HStack,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import {GiAmpleDress, GiDress, GiSonicShoes}  from 'react-icons/gi';
import {SiPowerpages}  from 'react-icons/si';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {
    Container,
    SimpleGrid,
    Image,
    Heading,
    
    Stack,
    StackDivider,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getOrderData, updateOrderData, deleteOrderData} from '../../redux/order/order.action'


const LinkItems= [
  { name: 'Orders', icon: FiHome, link:'/orders' },
  { name: 'Clothing', icon: GiAmpleDress, link:'/clothing' },
  { name: 'Dresses', icon: GiDress, link:'/dresses' },
  { name: 'Shoes', icon: GiSonicShoes, link:'/shoes' },
  { name: 'CartPage', icon: FiStar, link:'/cartpage' },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const orders = useSelector(state=>state.orderReducer.orderData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getOrderData());
  },[])

  console.log(orders, 'data')



  return (
    <Box  w='100%' minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Grid  alignItems='center'  w='100%' templateColumns='repeat(2, 1fr)' gap={6}  p="4">        
      {
          orders.map((el)=>{
            return <SplitWithImage data ={el}/>
          })
        }
      </Grid>
    </Box>
  );
}


// const SidebarContent = ({ onClose, ...rest }) => {
//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>

//       {LinkItems.map((link) => (
//         <Link href={link.link} textDecoration='none'  >
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//         </Link>
//       ))}
//     </Box>
//   );
// };


// const NavItem = ({ icon, children, ...rest }) => {
//   return (
//     <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// const MobileNav = ({ onOpen, ...rest }) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent="flex-start"
//       {...rest}>
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Logo
//       </Text>
//     </Flex>
//   );
// };


const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export  function SplitWithImage({data}) {
    const {image, id,title,  price, productdetails, status, details, qty } = data;
    const orders = useSelector(state=>state.orderReducer.orderData);
    const dispatch = useDispatch();

    function handleStatus(){
      dispatch(updateOrderData(id, {...data, status:!status}));
    }
    function handleDelete(){
      dispatch(deleteOrderData(id));
    }
    return (
      <Container bg='white' borderRadius="9px"  maxW={'1xl'} py={18}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'white'}
              fontWeight={600}
              fontSize={'sm'}
              bg={status?useColorModeValue('green.300', 'green.900'):useColorModeValue('red.300', 'red.800')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Status : {status?' Delivered':'Pending'}
            </Text>
            <Text fontSize={'23px'}>{title}</Text>
            <Text color={'gray.500'} fontSize={'lg'}>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z"/></svg>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Price : $'+price}
              />
              <Feature
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 19.5c0-3.59 2.91-6.5 6.5-6.5l.5.025v-7.025h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h12.816c-1.123-1.168-1.816-2.752-1.816-4.5zm-5-15.5c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm-4 4h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4h-14v-4zm15.5 7c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Quantity: '+qty} 
              />
              <Feature
                icon={
                  <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 5c0-.478-.379-1-1-1h-18c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h18c.478 0 1-.379 1-1zm-18.5.5h17v13h-17zm5.5 2c0-.276-.224-.5-.5-.5s-.5.224-.5.5v9c0 .276.224.5.5.5s.5-.224.5-.5zm8 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v9c0 .276.224.5.5.5s.5-.224.5-.5zm2 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v9c0 .276.224.5.5.5s.5-.224.5-.5zm-13.25-.5c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm5.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3-.013c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75z" fill-rule="nonzero"/></svg>
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'# OrderNo : '+id}
              />
              <Flex>
              <Button onClick={handleStatus} color={'black'}  variant='solid'>Toggle Status</Button>
              <Button ml='5px' onClick={handleDelete} color={'black'}  variant='solid'> Delete Item</Button>
              </Flex>
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
        <HStack  mt={'20px'} bg='orange.50' borderRadius={'10px'} p='10px'>
        <Stack
            width={{
              base: '100%',
              md: '20%',
            }}
            alignItems={'flex-start'}>
            <Heading size={'sm'}>
              <Text color="purple.400">Address</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '80%',
            }}>
            <Text >
              {details.firstname+" "+details.lastname+", "+ details.street_address+", " +details.city+", " + details.postCode}
            </Text>
          </Stack>
          </HStack>
      </Container>
    );
  }