import Accordion1 from '@/components/Accordion1'
import { Box, Flex, Grid, Heading, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Shoes = () => {
    const [data,setData]=useState([])
    const getData=async()=>{
      let res=await axios.get('https://apiserver-no4z.onrender.com/shoes')
      .then(res=>setData(res.data))
    }
    useEffect(()=>{
      getData()
    },[])
    // console.log(data)
    return (
      <>
               
        <Box w={'98%'} m={'auto'} mt={'40px'} >
            <Flex gap={'10px'} justifyContent={'center'} textAlign={"center"} >
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/2fzUgZMXWUPrC84rgBxaSY/9193a3ee06dc32835f6707ca130b9999/5_Shoe_Topper.jpg?w=630&q=80&fm=webp)'}>5 - 5.5</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/2qYKuPxJVyKb7n60A4xu6T/25a590f8599449559c65b0daec39eb8b/6_Shoe_Topper.jpg?w=630&q=80&fm=webp)'}>6 - 6.5</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/4mYgaZvDjiMO0ogglhyGvJ/46fdad07bb955e7ecbb14acc7e045581/7_Shoe_Topper.jpg?w=630&q=80&fm=webp)'}>7 - 7.5</Box>
              <Box cursor={'pointer'} pt={'20px'} fontSize={"small"} w={'170px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/3iNdIE0LZbZPDYuR6nD8Ez/03c286802421cd10b65eed004a59c0a3/8_Shoe_Topper.jpg?w=630&q=80&fm=webp)'}>8 - 8.5</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/5irHE9rTk9tLXZbUCxtNow/681f9fe4f6d062d8cff812f913c1ca93/9_Shoe_Topper.jpg?w=630&q=80&fm=webp)'}>9 - 9.5</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/61AjzQ71WgOAQfYooxFzaQ/59d06b09fb9334e99c0db1f02f5fb16c/10-11_Shoe_Topper.jpg?w=630&q=80&fm=webp)'}>10 - 11</Box>
            </Flex>
                <Flex w={'80%'} m={'40px 0px 20px 250px'}  justifyContent={'space-between'} >
                <Heading fontSize={'xl'} display={'flex'} gap={'30px'} alignItems={'center'} > Women's Shoes:<Text fontSize={'small'} fontWeight={'normal'}>{data.length} products</Text> </Heading>
                    <Flex alignItems={'center'} gap={'7px'}>
                        <Text>Sort:</Text>
                        <Select placeholder='Featured'>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                            <option>Best Selling</option>
                            <option>Ratings: High to Low</option>
                        </Select>
                    </Flex>
                </Flex>
            <Flex w={'94%'} m={'auto'} mt={'0px'} justifyContent={'space-between'} > 
              <Flex flexDir={'column'} w={'15%'} mt={'-60px'}>
                  <Text fontSize={'small'} mb={'10px'} borderBottom={'1px solid grey'}>Browse by:</Text>
                  <Flex flexDir={'column'} mb={'40px'}>
                  <Text fontSize={'xx-small'} mb={'10px'}>New</Text>
                  <Text fontSize={'xx-small'} mb={'10px'}>Top-Rated</Text>
                  <Text fontSize={'xx-small'} mb={'10px'}>Boots & Booties</Text>
                  <Text fontSize={'xx-small'} mb={'10px'}>Cold Weather Boots</Text>
                  <Text fontSize={'xx-small'} mb={'10px'}>Flat</Text>
                  <Text fontSize={'xx-small'} mb={'10px'}>Heels & Wedges</Text>
                  <Text fontSize={'xx-small'} mb={'10px'}>Mules  & Clogs</Text>
                  <Text fontSize={'xx-small'} mb={'10px'}>Sandals & Sleepers</Text>
                  </Flex>
                  <Flex flexDir={'column'}>
                  <Text fontSize={'xx-small'} mb={'10px'}>Filter by:</Text>
                  <Flex flexDir={'column'}>
                      <Accordion1 data={data} setData={setData}/>
                  </Flex>
                  </Flex>
              </Flex>
              
              <Grid w={'80%'} gridTemplateColumns={'repeat(3,1fr)'} gap={'30px'}>
                  {
                    data.map((ele)=>(
                      // console.log(ele)
                        <Flex flexDir={'column'} key={ele.id}>
                          {/* <Flex flexDir={'column'}> */}
                            <Image id='hoverimg' onMouseOver={e=>e.target.srcset=`${ele.image.furl+ele.image.version.v3+ele.image.burl}`} onMouseOut={e=>e.target.srcset=`${ele.image.furl+ele.image.version.v1+ele.image.burl}`} src={ele.image.furl+ele.image.version.v1+ele.image.burl} style={{cursor:'pointer',}} width={450} height={300} alt={'img1'}/>
                            <Text fontSize={'small'} >{ele.title}</Text>
                          {/* </Flex> */}
                            <Text>${ele.price}</Text>
                            <Flex gap={'10px'} h={'20px'} alignItems={'center'} >
                            {
                                ele.color.map((ele)=>(
                                    <Image style={{borderRadius:'50%'}} width={20} height={20} src={ele.colorimg} alt={ele.alt}/>
                                ))
                            }
                            <Text display={'flex'} gap={'5px'}>{ele.color.length} <Text>colors</Text></Text>
                            </Flex>
                        </Flex>
                      ))
                  }
              </Grid>
            </Flex>
        </Box>
      </>
    )
  }

export default Shoes