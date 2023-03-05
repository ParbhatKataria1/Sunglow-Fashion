import Accordion1 from '@/components/accordion1'
import { Box, Flex, Grid, Heading, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'

const Clothing = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
      getData()
    },[])
    const getData=async()=>{
      let res=await axios.get('https://apiserver-no4z.onrender.com/clothing')
      .then(res=>setData(res.data))
    }
    
    console.log(data)
    const handleChange=(e)=>{
      let temp = [...data];
      if(e.target.value==='lth'){
        setData(temp.sort((a,b)=>(parseInt(a.price))-parseInt(b.price)))
        console.log('sorting')
      }else if(e.target.value==='htl'){
        setData(temp.sort((a,b)=>(+b.price)-(+a.price)))
      }
      console.log(data)
    }
    return (
      <>
               
        <Box w={'98%'} m={'auto'} mt={'40px'} >
            <Flex gap={'10px'} justifyContent={'center'} textAlign={"center"} >
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/7jG36MSbANK4JfVQhSjRtF/6426c0e02280da606c21e1ccef9fc2e5/Fall_Site_Topper_1_LS.jpg?w=630&q=80&fm=webp)'}>DRESSES</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/558fy5SfamJIIkBQa3MARu/46185b890b51825214d5f74c4fbc9e8e/Fall_Site_Topper_2_LS.jpg?w=630&q=80&fm=webp)'}>PANTS</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/2UDMcMxjbqwmwqFrGqKyz2/e4b6e269594e14ee1d677276b00fe4c4/Fall_Site_Topper_3_LS.jpg?w=630&q=80&fm=webp)'}>JEANS</Box>
              <Box cursor={'pointer'} pt={'20px'} fontSize={"small"} w={'170px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/63Bfse1VxFdjpyMH2w6i9m/385bd1c59648fd2373c30fae3ad1dcf9/Fall_Site_Topper_4_LS.jpg?w=630&q=80&fm=webp)'}>GETAWAY & RESORT WEAR</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/5v6fF2cEEnm45LRtoyYqNQ/63f35631b4ff5c6afeb1558a75b13967/Fall_Site_Topper_5_LS.jpg?w=630&q=80&fm=webp)'}>TOPS</Box>
              <Box cursor={'pointer'} pt={'25px'} fontSize={"small"} w={'200px'} h={'70px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/3WeHfkSEoOeCAnfmxsaHbr/d512eb559e1766178e269b0b6c229246/Fall_Site_Topper_6_LS.jpg?w=630&q=80&fm=webp)'}>INTIMATES</Box>
            </Flex>
                <Flex w={'80%'} m={'40px 0px 20px 250px'}  justifyContent={'space-between'} >
                <Heading fontSize={'xl'} display={'flex'} gap={'30px'} alignItems={'center'} > Women&apos;s Clothing:<Text fontSize={'small'} fontWeight={'normal'}>{data.length} products</Text> </Heading>
                    <Flex alignItems={'center'} gap={'7px'}>
                        <Text>Sort:</Text>
                        <Select placeholder='Featured' onChange={(e)=>handleChange(e)} >
                            <option value={'lth'}>Price: Low to High</option>
                            <option value={'htl'}>Price: High to Low</option>
                        </Select>
                    </Flex>
                </Flex>
            <Flex w={'94%'} m={'auto'} mt={'0px'} justifyContent={'space-between'} > 
              <Flex flexDir={'column'} w={'15%'} mt={'-60px'}>
                  <Text fontSize={'small'} mb={'10px'} borderBottom={'1px solid grey'}>Browse by:</Text>
                  
                  <Flex flexDir={'column'}>
                  <Text fontSize={'sm'} mb={'10px'}>Filter by:</Text>
                  <Flex flexDir={'column'}>
                      <Accordion1 data={data} setData={setData}/>
                  </Flex>
                  </Flex>
              </Flex>
              
              <Grid w={'80%'} gridTemplateColumns={'repeat(3,1fr)'} gap={'30px'}>
                  {
                    data.map((ele,i)=>(
                      <Link key={ele.id} href={`/clothing/${ele.id}`}>
                        <Flex flexDir={'column'} key={i}>
                          {/* <Flex flexDir={'column'}> */}
                            <Image id='hoverimg' onMouseOver={e=>e.target.srcset=`${ele.image.furl+ele.image.version.v3+ele.image.burl}`} onMouseOut={e=>e.target.srcset=`${ele.image.furl+ele.image.version.v1+ele.image.burl}`} src={ele.image.furl+ele.image.version.v1+ele.image.burl} style={{cursor:'pointer',}} width={450} height={300} alt={'img1'}/>
                            <Text fontSize={'small'} >{ele.title}</Text>
                          {/* </Flex> */}
                            <Text>${ele.price}</Text>
                            <Flex gap={'10px'} h={'20px'} alignItems={'center'} >
                            {
                                ele.color.map((ele)=>(
                                    <Image key={ele.id} style={{borderRadius:'50%'}} width={20} height={20} src={ele.colorimg} alt={ele.alt}/>
                                ))
                            }
                            <Text display={'flex'} gap={'5px'}>{ele.color.length} <Text>colors</Text></Text>
                            </Flex>
                        </Flex>
                        </Link>
                      ))
                  }
              </Grid>
            </Flex>
        </Box>
      </>
    )
  }
  

export default Clothing