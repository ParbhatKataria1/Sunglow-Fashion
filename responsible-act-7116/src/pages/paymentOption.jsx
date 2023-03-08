import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Divider,
    Button,
    HStack,
    Input,
    Text,Radio, RadioGroup, Stack, Checkbox, Image,
  } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { postOrderData } from '@/redux/order/order.action';
import { deleteCartData } from '@/redux/cart/cart.action';
import axios from 'axios';

  let userDummy = {
    firstname:'',
    lastname:"",
    country:"",
    street_address:"",
    address:"",
    city:"",
    postCode:"",
    mobile:"",
    mode:"",
}

const PaymentOption = () => {
    const [card, setcard] = useState(false);
    const [cod, setcod] = useState(false);
    const [orderData, setorderdata] = useState({});
    const [cardDetails, setCardDetails] = useState({});
    const [orderType, setorderType] = useState('')
    const router = useRouter();
    const dispatch = useDispatch();
    const cartData = useSelector(state=>state.cartReducer.cartData);
    let [cardDetail, setcarddetail] = useState({
        cardnumber:'',
        cvv:''
    })
    function just(){
        axios.post('https://weak-ruby-bass-kit.cyclic.app/orderList',{tis:'4'})
    }

    function transerData(){
        console.log(cartData);
        cartData.map((el)=>{
            let obj = {...el};
            let temp = obj.id;
            delete obj.id;
            obj.status = false;
            dispatch(postOrderData(obj)).then(()=>{
                dispatch(deleteCartData(temp))
            });
        })
    }

    function changeTheData(key, value){
        
        let temp = {
          ...shipData,
          [key]:value
        }
        setCardDetails(temp);
      }

      function handleSubmit(){
        let temp = false;
        console.log(cardDetail)
        if(orderType!='cod')
        for(let key in cardDetail){
            if(cardDetail[key].trim().length==0){
                temp = true;
                break;
            }
        }
        if(temp){
            alert('please enter the card details')
        }
        else {
            transerData()
            router.push('/successpage')
        }
        console.log('1', cardDetail)
      }


    useEffect(()=>{
        let temp1 = JSON.parse(sessionStorage.getItem('order-data'));
        setorderdata(temp1);
    },[])
    const {subtotal, tax, totalPrice} = orderData || {};
    
    
  return (
    <Box pb={'80px'} pt={'20px'} w='90%' m='auto'>
          <Breadcrumb  mb={'30px'}>
            <BreadcrumbItem>
            <BreadcrumbLink href='/shipping'>Ship or Pick Up</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
            <BreadcrumbLink href='/payment/option'>Payment</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='/payment'>Review</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>

        <Flex justifyContent={'space-between'}>
            <Box  w={'65%'} >
            <Accordion>
                <AccordionItem>
                    <h2>
                    <AccordionButton onClick={()=>setcard(prev=>{
                        setcod(false);
                        return true
                    })}>
                        <Box as="span" flex='1' textAlign='left'>
                        <Radio onClick={()=>{setorderType('card'),just()}} value='1' isChecked={card} p='5px'></Radio>
                        Credit Card
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <CreditCard  cardDetail={cardDetail} setcarddetail={setcarddetail}  />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton onClick={()=>setcod(prev=>{
                        setcard(false);
                        return true;
                    })}>
                        <Box as="span" flex='1' textAlign='left'>
                        <Radio onClick={()=>{setorderType('cod')}} value='2' isChecked={cod} p='5px'></Radio>
                        Cash On Delivery
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <CashOnDelivery/>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
            </Box>


            {/* *******order********8 */}
            <Box w={'30%'}>
                    <Box border={'1px solid lightgray'} borderRadius='5px' p={'15px'}  >
                        <Text mb={'20px'} fontSize='18px'>Order Summary</Text>
                        <Flex direction='column'>
                        <Flex mb={'15px'} justifyContent={'space-between'}>
                            <Text>SubTotal</Text>
                            <Text>{subtotal}</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Flex mb={'15px'} justifyContent={'space-between'}>
                            <Text>Shipping</Text>
                            <Text>TBD</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Flex mb={'15px'} justifyContent={'space-between'}>
                            <Text>Estimated Tax</Text>
                            <Text>${tax}</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Flex mb={'15px'} justifyContent={'space-between'}>
                            <Text>Total</Text>
                            <Text>${totalPrice}</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Button onClick={handleSubmit} mb={'15px'}>Continue To Payment</Button>
                        {/* <Divider/> */}
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                            <h2>
                                <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Promo
                                </Box>
                                <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack>
                            <Input placeholder='Enter Your Code' />
                            <Button>Apply</Button>
                            </HStack>
                            </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                        </Flex>
                    </Box>
            </Box>
        </Flex>


    </Box>
  )
}

export default PaymentOption

function CreditCard({cardDetail, setcarddetail}){
    let [userdata, setuserdata] = useState({...userDummy});
    


    function changeCardData(key, value){
        console.log(value)
        let temp = {
            ...cardDetail,
            [key]:value
        }
        setcarddetail(temp);
    }




    useEffect(()=>{
        let temp2 = JSON.parse(sessionStorage.getItem('user-details'));
        setuserdata(temp2)
    },[])
    const {firstname, lastname, country, street_address, address, city, postCode, mobile, mode} = userdata || {};
    return (
        <Box bg={'gray.100'} p='15px' borderRadius={'8px'}>
            <Flex mb={'8px'}>
                <Box>
                    <Text>CARD NUMBER*</Text>
                    <Input type={'number'} onChange={(e)=>{
                        changeCardData('cardnumber', e.target.value)
                    }} border={'1px solid lightgray'}></Input>
                </Box>
                <Box>
                    <Text>Expiration Date*</Text>
                    <Input 
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        border={'1px solid lightgray'}
                    />
                </Box>
                <Box>
                    <Text>CVV*</Text>
                    <Input
                    type={'number'}
                    onChange={(e)=>{
                        changeCardData('cvv', e.target.value)
                    }}
                        placeholder="Select Date and Time"
                        size="md"
                        border={'1px solid lightgray'}
                    />
                </Box>
            </Flex>
            <Divider border={'gray.600'}/>
            <Text mt={'13px'}>Billing Address</Text>
            <Text mt={'13px'}>{userdata?.firstname}</Text>
            <Text mt={'13px'}>{street_address}</Text>
            <Text mt={'13px'}>{city+" "+postCode}</Text>
            <Text mt={'13px'}>Country : {country}</Text>
            <Text mt={'13px'}>{mobile}</Text>
        </Box>
    )
}

function CashOnDelivery(){
    let [userdata, setuserdata] = useState({...userDummy});
    useEffect(()=>{
        let temp2 = JSON.parse(sessionStorage.getItem('user-details'));
        setuserdata(temp2)
    },[])
    const {firstname, lastname, country, street_address, address, city, postCode, mobile, mode} = userdata || {};
    return (
        <Flex bg={'gray.100'} p='15px' borderRadius={'8px'} justifyContent='space-between'>
            <Box>
                <Text mt={'13px'}>Billing Address</Text>
                <Text mt={'13px'}>{userdata?.firstname}</Text>
            <Text mt={'13px'}>{street_address}</Text>
            <Text mt={'13px'}>{city+" "+postCode}</Text>
            <Text mt={'13px'}>Country : {country}</Text>
            <Text mt={'13px'}>{mobile}</Text>
            </Box>
            <Image borderRadius={'9px'} w='200px' src='https://serving.photos.photobox.com/66232980d40147cdee77e3ba00340d4f6788f30bc5ce3b9f0f4d229ee96f6fef05e0f469.jpg'></Image>
        </Flex>
    )
}