import { Button, Image as ChakraImage, Text, Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const ImageItem = () => {
    const [shopButton, setShopButton] = useState(false);
  return (
    <Box w='100%' p={'10px'} position={'relative'} onMouseLeave={()=>setShopButton(false)} onMouseEnter={()=>setShopButton(true)}>
                            <ChakraImage src='https://images.ctfassets.net/5de70he6op10/24XjZK35JsGCP4fmCO8580/6d8469a59dd0fea277acaa832dac4786/473929297-ls_m2a.jpg?w=856&q=80&fm=webp' alt='Dan Abramov'
                            width='100%' />
                            {
                                shopButton && <Button
                                variant={'outline'}
                                bg='gray.200'
                                alignItems={'center'}
                                size='sm'
                                // height='20px'
                                opacity={shopButton?'1':'0'}
                                width={'90%'}
                                borderColor='white'
                                position={"absolute"}
                                left='50%'
                                top='90%'
                                transition={'opacity 2s'}
                                transform="translate(-50%, -50%)"
                                fontSize={"12px"}
                                zIndex={1}
                                _hover={
                                    {
                                        textDecoration: "underline"
                                    }
                                }
                            >
                            <Text opacity={'1'} >shop new clothing</Text>
                            </Button>
                            }
                            </Box>
  )
}

export default ImageItem