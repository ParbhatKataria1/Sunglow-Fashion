import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    Checkbox,
    Divider,
    Flex,
    HStack,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Table,
    TableCaption,
    TableContainer,
    TagLabel,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
  } from '@chakra-ui/react'

const Shipping = () => {
  return (
    <>
    <Box pb={'80px'} pt={'20px'} w='90%' m='auto'>
      <Breadcrumb>
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
      <Flex justifyContent={'space-between'} mt={'30px'}>
        <Box w={'65%'}>
          <Box>
          <HStack justifyContent={'space-between'} bg='gray.200' p={'10px'} borderRadius='12px'>
            <Box>
              <Text>Already Have an Account?</Text>
              <Text mt={'20px'} fontSize={'12px'}>Sign in to check out faster.</Text>
            </Box>
            <Button>SIGN IN</Button>
          </HStack>
          </Box>


          <Box mt={'30px'} >
            <HStack justifyContent={'space-between'} bg='gray.100' p={'10px'} borderRadius='9px'>
              <Box>
                <Text>Check out as a guest</Text>
                <Text mt={'20px'} fontSize='14px'>Email Address*</Text>
                <Input border={'black'} variant='outline' placeholder='Outline' />
                <Checkbox mt={'10px'} >
                  <Text  fontSize={'13px'}> Please send me Anthropologie offers, promotions, and other commercial messages. (You may unsubscribe at any time.)</Text></Checkbox>
              </Box>
              {/* <Button>SIGN IN</Button> */}
            </HStack>
          </Box>
          <Flex  mt={'10px'} justifyContent='space-between'>
            <Button mt={'30px'} w={'45%'} colorScheme='blue'>SHIP</Button>
            <Button  mt={'30px'} w={'45%'}colorScheme='blue' variant='outline'>PICK UP</Button>
          </Flex>

          <Box mt={'40px'}>
            <Text>Shipping Address</Text>
            <Text mt={'20px'} fontSize={'13px'}>Country/Region*</Text>
            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <HStack mt={'20px'}>
              <Box w={'50%'}>
              <Text fontSize={'13px'}>First Name*</Text>
              <Input variant='outline' placeholder='Outline' />
              </Box>
              <Box w={'50%'}>
              <Text fontSize={'13px'}>Last Name*</Text>
              <Input variant='outline' placeholder='Outline' />
              </Box>
            </HStack>
            <Box mt={'20px'}>
              <Text fontSize={'13px'}>Street Address*</Text>
              <Input placeholder='35 character limit, continue below.' variant='outline'  />
            </Box>
            <Box mt={'20px'}>
              <Text fontSize={'13px'}>Address 2*</Text>
              <Input placeholder='Building, Suite or Apartment Number' variant='outline'  />
              <Checkbox mt={'10px'}><Text fontSize={'12px'}>PO Box</Text></Checkbox>
            </Box>

            <Box mt={'20px'}>
              <Text fontSize={'13px'}>City*</Text>
              <Input placeholder='Building, Suite or Apartment Number' variant='outline'  />
            </Box>

            <Box mt={'20px'}>
              <Text fontSize={'13px'}>PostCode*</Text>
              <Input placeholder='Building, Suite or Apartment Number' variant='outline'  />
            </Box>

            <Box mt={'20px'}>
              <Text fontSize={'13px'}>Mobile Number*</Text>
              <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='phone number' />
              </InputGroup>
            </Box>

          </Box>
          
        </Box>

        {/* order */}
  
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
                  <Button mb={'15px'}>SHIP TO THE ADDRESS</Button>
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
    </>

  )
}

export default Shipping