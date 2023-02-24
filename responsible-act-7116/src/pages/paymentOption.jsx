import React, { useState } from 'react'
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

const PaymentOption = () => {
    const [card, setcard] = useState(false);
    const [cod, setcod] = useState(false);
  return (
    <Box pb={'80px'} pt={'20px'} w='90%' m='auto'>
          <Breadcrumb  mb={'30px'}>
            <BreadcrumbItem>
            <BreadcrumbLink href='#'>Ship or Pick Up</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
            <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Review</BreadcrumbLink>
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
                        <Radio value='1' isChecked={card} p='5px'></Radio>
                        Credit Card
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <CreditCard/>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton onClick={()=>setcod(prev=>{
                        setcard(false);
                        return true;
                    })}>
                        <Box as="span" flex='1' textAlign='left'>
                        <Radio value='2' isChecked={cod} p='5px'></Radio>
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
                            <Text>$432.2</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Flex mb={'15px'} justifyContent={'space-between'}>
                            <Text>Shipping</Text>
                            <Text>TBD</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Flex mb={'15px'} justifyContent={'space-between'}>
                            <Text>Estimated Tax</Text>
                            <Text>$43.2</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Flex mb={'15px'} justifyContent={'space-between'}>
                            <Text>Total</Text>
                            <Text>$492.2</Text>
                        </Flex>
                        <Divider mb={'15px'}/>
                        <Button mb={'15px'}>Continue To Payment</Button>
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

function CreditCard(){
    return (
        <Box bg={'gray.100'} p='15px' borderRadius={'8px'}>
            <Flex mb={'8px'}>
                <Box>
                    <Text>CARD NUMBER*</Text>
                    <Input border={'1px solid lightgray'}></Input>
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
                        placeholder="Select Date and Time"
                        size="md"
                        border={'1px solid lightgray'}
                    />
                </Box>
            </Flex>
            <Divider border={'gray.600'}/>
            <Text mt={'13px'}>Billing Address</Text>
            <Text mt={'13px'}>parbhat kataria</Text>
            <Text mt={'13px'}>#890</Text>
            <Text mt={'13px'}>Amritsar, 149001, 1234</Text>
            <Text mt={'13px'}>Country : IN</Text>
            <Text mt={'13px'}>9432-422-432</Text>
        </Box>
    )
}

function CashOnDelivery(){
    return (
        <Flex bg={'gray.100'} p='15px' borderRadius={'8px'} justifyContent='space-between'>
            <Box>
                <Text mt={'13px'}>Billing Address</Text>
                <Text mt={'13px'}>parbhat kataria</Text>
                <Text mt={'13px'}>#890</Text>
                <Text mt={'13px'}>Amritsar, 149001, 1234</Text>
                <Text mt={'13px'}>Country : IN</Text>
                <Text mt={'13px'}>9432-422-432</Text>
            </Box>
            <Image borderRadius={'9px'} w='200px' src='https://serving.photos.photobox.com/66232980d40147cdee77e3ba00340d4f6788f30bc5ce3b9f0f4d229ee96f6fef05e0f469.jpg'></Image>
        </Flex>
    )
}