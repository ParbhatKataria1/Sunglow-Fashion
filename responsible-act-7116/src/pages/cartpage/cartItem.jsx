import { Box, Flex, Image, Select, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'

const CartItem = ({cartItem}) => {
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
                    <Text>{cartItem.price }</Text>
                </Box>
            </Flex>
        </Box>
    )
}


export default CartItem