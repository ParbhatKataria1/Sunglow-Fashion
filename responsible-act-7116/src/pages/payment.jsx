import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, HStack, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {CheckCircleIcon} from '@chakra-ui/icons'

const Payment = () => {
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
            <Box  w={'65%'}>
                <Box >
                <Text>Shipping to parbhat kataria</Text>
            <Flex mt={'10px'} justifyContent={'space-between'}  bg='gray.200' p={'14px'} borderRadius='12px'>
                <Box>
                    <Text>parbhat kataira</Text>
                    <Text>#534</Text>
                    <Text>Amritsar, 148001 143001</Text>
                    <Text>Country - IN</Text>
                    <Text>6528-453-856</Text>
                </Box>
                <Flex >
                    <Flex alignItems={'center'}>
                        <CheckCircleIcon/>
                        <Text>Add a Gift Message</Text>
                    </Flex>
                </Flex>
                
            </Flex>
            </Box>
            <Divider/>
            <Text mt={'20px'}mb='20px'>Express and Overnight orders placed after 1 PM ET typical ship the next business day</Text>
            <Divider/>
            <Box   bg='gray.200' p={'14px'} borderRadius='12px'>
                <Text fontWeight={'semibold'}>7-12 busniess days - $60.00</Text>
                <Text mt={'10px'}>Standard International</Text>
                <Text mt={'10px'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus asperiores voluptate quasi neque, minima reiciendis perferendis, dolore similique id repellat eveniet inventore?</Text>
            </Box>
            <Divider/>
            <Box p={'10px'} mt='30px'>
            <Flex justifyContent={'space-between'} border={'1px solid lightgray'} p='10px' borderRadius={'8px'}>
                    <Box  w='20%'>
                        <Text>Image</Text>
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



                <Flex justifyContent={'space-between'} border={'1px solid lightgray'} p='10px' borderRadius={'8px'}>
                    <Box  w='20%'>
                        <Flex>
                            <Image w={'100%'} src='https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=360' ></Image>
                            
                        </Flex>
                    </Box>
                    <Box w={'40%'} >
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero accusamus autem.</Text>
                                <Text>#kd89sa9</Text>
                                <Text>Color : BLUE MOTIF</Text>
                                <Text>Size Set of 4</Text>
                            </Box>
                    <Box>
                        <Text>Item Price</Text>
                        <Text>$ 56.30</Text>
                    </Box>
                    <Box>
                        <Text>Quanitity</Text>
                        <Text>1</Text>
                    </Box>
                    <Box>
                        <Text>Total Price</Text>
                        <Text>$65.09</Text>
                    </Box>
                </Flex>
            </Box>
            </Box>

            {/* ************* order */}
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

export default Payment