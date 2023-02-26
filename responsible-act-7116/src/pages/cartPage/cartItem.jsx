import { Box, Flex, Image, Select, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'

const CartItem = () => {

    return (
        <Box mb={'10px'}>
            <Flex justifyContent={'space-between'}
                borderTop={'1px solid lightgray'}
                borderBottom={'1px solid lightgray'}
                p='10px'>
                <Box w='20%'>
                    <Flex>
                        <Image w={'100%'} src='https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=360' ></Image>

                    </Flex>
                </Box>
                <Box w={'35%'} >
                    
                    <Text>Lorem ips</Text>
                    <Text>style: #kd89sa9</Text>
                    <Text>Color : BLUE MOTIF</Text>
                    <Text>Size Set of 4</Text>
                </Box>
                <Box>
                    {/* <Text>Item Price</Text> */}
                    <Text>$ 56.30</Text>
                </Box>
                <Box>
                    {/* <Text>Quanitity</Text> */}
                    <Select>
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
                    <Text>$65.09</Text>
                </Box>
            </Flex>
        </Box>
    )
}


export default CartItem