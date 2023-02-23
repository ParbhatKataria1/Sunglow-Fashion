import { Box, Button, Center, Container, Divider, Flex, Grid, GridItem, Heading, HStack, ListItem, Radio, RadioGroup, Select, Stack, Text, UnorderedList, useRadio, useRadioGroup } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import {Image as ChakraImage} from '@chakra-ui/react'
import Link from 'next/link'
import ReactImageMagnify from 'react-image-magnify';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageItem from '@/components/ImageItem'
import SlindingCard from './Home/SlindingCard'
import { RecentlyViewed } from './Home/LandingPage'
import { Component } from "react";
import Slider from "react-slick";

const ItemDetails = () => {
    const [shopButton, setShopButton] = useState(false);
  return (
    <Box mb={'100px'}>
        <Heading textAlign={'center'}>FurnitureShop / All Furniture</Heading>
        <Flex w={'90%'} justifyContent='space-around' m={'auto'}  mt={'40px'}>
            <Box width={'50%'} justifyContent='center' >
        
            
            {/* <Image width={400} height={400} src={`${dummy.image.furl}${dummy.image.version.v2}${dummy.image.burl}`}></Image> */}
            <VerticalSwipeToSlide/>
            <Box mt={'30px'}>
                
                <Text  fontSize={'18px'}>Complete The Look</Text>
                <hr />
                <HStack>
                <Box marginTop={"40px"} position={"relative"}>
                        <Grid templateColumns='repeat(3, 1fr)' gap={5} width={"100%"} margin={"auto"}  zIndex={0}>
                            <ImageItem/>
                            <ImageItem/>
                            <ImageItem/>
                        </Grid>
                    </Box>
                </HStack>
            </Box>
                


            </Box >



            <Box w={'40%'}>
                <Text fontSize={'18px'} m={'10px'}>{dummy.title}</Text>
                <Text m={'10px'}>Price : ${dummy.price}</Text>
                <Box >
                    <HStack >
                        <Text m={'10px'}>Colors Available:</Text>
                    
                    {dummy.color.map((el, ind)=>{
                        return <Text m={'10px'} key={ind+1}>{el.alt}</Text>
                    })}
                    </HStack>
                    <RadioGroup defaultValue='2'>
                        <Stack spacing={5} direction='row'>
                            
                    
                    {dummy.color.map((el, ind)=>{
                        return <Radio ml={'10px'} mb='10px' key={ind+1} colorScheme={`${el.alt.toLowerCase()}.300`} bg={el.alt.toLowerCase()} value={el.alt.toLowerCase()}>
                        </Radio>
                        
                    })}
                        </Stack>
                    </RadioGroup>
                    <Box>
                        <Text m={'10px'}>Size**</Text>
                        <HStack ml={'10px'}  mt={'18px'}>
                            
                            <Example value={dummy.size.map((el)=>{return el.s})} />
                        </HStack>
                    </Box>
                    <Box>
                        <Text m={'10px'} mt='20px'>Qty**</Text>
                        <Select m={'10px'} placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                    <Button m={'10px'} mt={'20px'} zIndex='0' colorScheme='teal' w={'100%'}>
                        Add To Basket
                    </Button>
                    <HStack textDecoration={'underline'} justifyContent={'space-between'} m={'10px'}>
                        <Link  href={'#'} >Add To Registry</Link>
                        <Link href={'#'} >Add to Wish List</Link>
                    </HStack>

                    <Box mt={'30px'}>
                        <Text m={'10px'}>Product Details</Text>
                        <Text m={'10px'}>Style No. 82979535; Color Code: 071</Text>
                        <Text m={'10px'}>Reminiscent of the umbrellas that line the Amalfi Coast, this mixed-upholstered sofa features classic touches with hints of modern design. Its antique legs and elegant, scrolled arms beautifully highlight the striped two-cushion seat.</Text>
                        <Text m={'10px'}>For ordering assistance and more, please contact us. For aesthetic advice and tips to help decorate your space, enjoy our complimentary home styling services.</Text>
                        <Text m={'10px'}>For more information on the materials and techniques of this piece, click here.</Text>

                        <UnorderedList>
                            <ListItem>Beaufort Boucle upholstery (56% acrylic, 37% cotton, 7% polyester) and Linen</ListItem>
                            <ListItem>Two seat cushions; down feather fill</ListItem>
                            <ListItem>Sinuous spring seat construction</ListItem>
                            <ListItem>This piece is intended for indoor use</ListItem>
                        </UnorderedList>
                    </Box>

                </Box>

            </Box>
        </Flex>
            <Box w='90%' m={'auto'}>
            <Box  m='auto'>
                <Box mt={'70px'}>
                <Text>Others Also Viewed</Text>
                <Divider/>
                    <MultipleItems/>
                </Box>
            </Box>
                <HStack mt={'70px'} justifyContent={'space-between'}>
                    <Text>Ratings & Reviews</Text>
                    <Text>Write a Review</Text>
                </HStack>

                <Grid mt={'20px'} templateColumns='repeat(3, 1fr)' gap={1}>
                    <GridItem  w='100%' h='20' bg='orange.100'>
                    <Center direction='column' h={'100%'}>
                        <Text>4.5 stars | 2 Reviews</Text>
                        <br />
                    <HStack>
                    <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                    <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                    <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                    <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                    <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                    <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033v11.904l4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z" fill-rule="nonzero"/></svg>
                    </HStack>
                    </Center>
                    </GridItem>
                    <GridItem w='100%' h='20' bg='orange.100'>
                    <Center h={'100%'}>100% Recommended</Center>

                    </GridItem>
                    <GridItem w='100%' h='20' bg='orange.100'>

                    <Center h={'100%'}>Customers say True to Size</Center>
                    </GridItem>
                </Grid>
                <HStack>
                </HStack>
                <Divider/>
                <Box>
                <Text>Others Also Viewed</Text>
                <Box mt={'70px'}>
                <Text>Trending Now</Text>
                <Divider/>
                    <MultipleItems/>
                </Box>
            </Box>
                    
            
            </Box>
            
            
    </Box>
  )
}

export default ItemDetails

export class VerticalSwipeToSlide extends Component {
    render() {
      const settings = {
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // vertical: true,
        // verticalSwiping: true,
        swipeToSlide: true,
        lazyLoad: true,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
      return (
        <div height='400px'>
          <Slider {...settings}>
            {
                Array(4).fill('').map((el, ind)=>{
                    const v = 'v'+(ind+1);
                    return <div w={'200px'} zIndex='100' >
                    <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                width: 400,
                                height: 600,
                                src:`${dummy.image.furl}${dummy.image.version[v]}${dummy.image.burl}`
                            },
                            largeImage: {
                                src: `${dummy.image.furl}${dummy.image.version[v]}${dummy.image.burl}`,
                                width: 1200,
                                height: 1500,
                            },
                        }} />
                        </div>
                })
            }
          </Slider>
        </div>
      );
    }
  }

// ******** size selector**************
  // 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label' 
      alignItems={'center'}
      >
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  function Example({value}) {
    const options = value;
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'react',
      onChange: console.log,
    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }



const dummy =
    {
        "id": 1,
        "image": {
          "furl": "https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b",
          "version": {
            "v1": "",
            "v2": "2",
            "v3": "3",
            "v4": "4"
          },
          "burl": "?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=360",
          "surl": "?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100"
        },
        "title": "By Anthropologie Strapless Mini Dress",
        "price": "160.00",
        "color": [
          {
            "colorimg": "https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_s?fit=constrain&hei=56&qlt=75",
            "alt": "YELLOW"
          }
        ],
        "fit": [
          {
            "title": "Standard",
            "choosed": true
          },
          {
            "title": "Petite",
            "choosed": false
          },
          {
            "title": "Plus",
            "choosed": false
          }
        ],
        "size": [
          {
            "s": "XXS"
          },
          {
            "s": "XS"
          },
          {
            "s": "S"
          },
          {
            "s": "M"
          },
          {
            "s": "L"
          },
          {
            "s": "XL"
          }
        ]
}


export class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <ImageItem/>
          </div>
          <div>
          <ImageItem/>
          </div>
          <div>
          <ImageItem/>
          </div>
          <div>
          <ImageItem/>
          </div>
          <div>
          <ImageItem/>
          </div>
          <div>
          <ImageItem/>
          </div>
          <div>
          <ImageItem/>
          </div>
        </Slider>
      </div>
    );
  }
}
