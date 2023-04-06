import { getCartData } from '@/redux/cart/cart.action';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
    AccordionButton,
    AccordionItem, AccordionPanel, Box,
    Flex,
    Divider,
    Button,
    HStack,
    Input,
    Text, Image, Accordion, Heading
} from '@chakra-ui/react'

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import CartItem from './cartItem';

import { updateCartData } from '@/redux/cart/cart.action';
import {  Select, TagLabel } from '@chakra-ui/react'

let init = {
    totalPrice : 0,
    subtotal:0,
    tax:0
}

const PaymentOption = ({tem}) => {
    const router = useRouter();
    let cartData = useSelector((store) => store.cartReducer)
    cartData = cartData.cartData;
    console.log(cartData)

    const [promo, setpromo] = useState('');
    const [coupen, setcoupen] = useState({...init});
    // console.log(cartData);
    let subtotal = 0;
        cartData.forEach((el)=>{
            subtotal+=parseInt(el.price)*(+el.qty);
            // console.log(coupen.subtotal, 'this', el.price, el.qty, parseInt(el.price)*(+el.qty));
        })
        let tax = Math.floor(subtotal/13);
        let totalPrice = subtotal+tax;
       

        // console.log(coupen)
    // }
        
    
    
    function submit(){
        sessionStorage.setItem('order-data',JSON.stringify({
            subtotal, tax, totalPrice
        }))
        router.push('/shipping')
    }
    function usePromo(){
        console.log('promo')
        if(promo == 'sunglow'){
            console.log(coupen);
            let temp = Math.floor(coupen.subtotal*(.85));
            let ttax = Math.floor(temp/13);
            let obj = {
                subtotal:Math.floor(temp),
                tax:ttax,
                totalPrice:temp+ttax
            }
            console.log(obj, 'tis');
            setpromo('');
            setcoupen({...obj});
        }
    }
    console.log(coupen, 'thisi is coutpen')
    return (
        // <Box pb={'80px'} pt={'20px'} w='90%' m='auto'>
        // <Flex justifyContent={'space-between'}>
        <Box w={'25%'}>
            <Heading mb={'20px'} fontSize='18px' fontWeight={500}>Order Summary</Heading>
            <Box border={'1px solid lightgray'} borderRadius='5px' p={'15px'}  >
                <Flex direction='column'>
                    <Flex mb={'12px'} justifyContent={'space-between'}>
                        <Text>SubTotal</Text>
                        <Text>${subtotal}</Text>
                    </Flex>
                    <Divider mb={'12px'} />
                    <Flex mb={'12px'} justifyContent={'space-between'}>
                        <Text>Shipping</Text>
                        <Text>TBD</Text>
                    </Flex>
                    <Divider mb={'12px'} />
                    <Flex mb={'12px'} justifyContent={'space-between'}>
                        <Text>Estimated Tax</Text>
                        <Text>${tax}</Text>
                    </Flex>
                    <Divider mb={'12px'} />
                    <Flex mb={'12px'} justifyContent={'space-between'}>
                        <Text>Total</Text>
                        <Text>${totalPrice}</Text>
                    </Flex>
                    <Divider mb={'12px'} />
                    <Button borderRadius='0px'
                        fontWeight='normal'
                        mb={'20px'}
                        bgColor={'rgb(75,86,102)'}
                        color='white'
                        border="1px solid rgb(75,86,102)"
                        _hover={{ bg: 'white', border: "1px solid rgb(75,86,102)", color: 'rgb(75,86,102)' }}
                        onClick={submit}
                        >PROCEED TO CHECKOUT </Button>
                    <Button
                        borderRadius='5px'
                        fontWeight='normal'
                        mb={'20px'}
                        bgColor="white"
                        color='white'
                        border="1px solid rgb(75,86,102)"
                    > <Image w={100} src='data:image/png;base64,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'
                        alt='paypal' /> </Button>
                    {/* <Divider/> */}
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Promo Code
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>

                                    <AccordionPanel pb={4}>
                                        <HStack>
                                            <Input value={promo} 
                                            onChange={(e)=>{setpromo(e.target.value)}}
                                            placeholder='Enter Your Code' />
                                            <Button onClick={usePromo}>Apply</Button>
                                        </HStack>
                                        <Box p={'8px'} pt='14px' fontSize='13px'>Use My Promo - sunglow</Box>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                    </Accordion>
                </Flex>
            </Box>
        </Box>
        // {/* </Flex> */}
        // </Box>
    )
}

const Cart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector((store) => store.cartReducer)
    // console.log(cartData.cartData);

    useEffect(() => {
        dispatch(getCartData())
    }, [])

    return (
        <Box pt={'20px'} w='95%' m='auto'>
            <Flex justifyContent={'space-between'}>
                <Box w={'70%'}>
                    <Box p={'10px'} mt='30px'>
                        <Flex justifyContent={'space-between'}
                            borderTop={'1px solid lightgray'}
                            borderBottom={'1px solid lightgray'}
                            m="10px" p='10px 10px'>
                            <Box w='20%'>
                                <Text>Item</Text>
                            </Box>
                            <Box w={'40%'} > <Text>Description</Text> </Box>
                            <Box>
                                <Text>Item Price</Text>
                            </Box>
                            <Box>
                                <Text>Quanitity</Text>
                            </Box>
                            <Box>
                                <Text>Total Price</Text>
                            </Box>
                        </Flex>
                        {cartData?.cartData.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <CartItem cartItem={item} />
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <PaymentOption cartData = {cartData} />

            </Flex>
        </Box>

    )
}

export default Cart;



const CartItem = ({cartItem}) => {
    console.log(cartItem)
    console.log('cartItem')
    const [item, setitem ] = useState({...cartItem, qty:1});
    const dispatch = useDispatch();
    function changeTheData(qty){
        let newdata = {
            ...cartItem,
            qty:+qty

        }
        delete newdata.id;
        dispatch(updateCartData(cartItem.id, newdata)).then(()=>{
            console.log('gdafdagda')
            setitem(newdata)
        })

    }
console.log(cartItem);
    return (
        <Box mb={'10px'}>
            <Flex justifyContent={'space-between'}
                borderTop={'1px solid lightgray'}
                borderBottom={'1px solid lightgray'}
                p='10px'>
                <Box w='20%'>
                    <Flex>
                        <Image w={'100%'} src={cartItem.image.furl} alt={cartItem.title} ></Image>

                    </Flex>
                </Box>
                <Box w={'35%'} >

                    <Text fontWeight={500}>{cartItem.title }</Text>
                    <Text>style: {cartItem.productdetails.styleno }</Text>
                    <Text>Color : BLUE MOTIF</Text>
                    <Text>Size Set of 4</Text>
                </Box>
                <Box>
                    {/* <Text>Item Price</Text> */}
                    <Text>{ cartItem.price}</Text>
                </Box>
                <Box>
                    {/* <Text>Quanitity</Text> */}
                    <Select placeholder={cartItem.qty} onChange={(e)=>{changeTheData(e.target.value)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </Select>
                </Box>
                <Box>
                    {/* <Text>Total Price</Text> */}
                    <Text>{parseInt(item.price)*(+item.qty) }</Text>  
                </Box>
            </Flex>
        </Box>
    )
}
