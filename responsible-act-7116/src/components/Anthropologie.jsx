import { StarIcon } from '@chakra-ui/icons';
import { Button, Flex,Box,Grid,  SimpleGrid, Stack, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import SlindingCard from './SlindingCard';
import Link from 'next/Link'

// ---------------------------- NavbarTwo ------------------------------
import {
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
//   useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
// import { store } from '@/redux/store';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getNavItems } from '@/redux/nav/nav.action';

const ChakraLinks = ['New!', 'Furniture', 'Decor', 'Kitchen & Dining', 'Candles', 'Bedding', 'Bath', 'Outdoor', 'Stationery', 'Kids', 'Gifts', 'Sale'];

const NavChakraLink = ({ children }) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
        color:"teal",
        textDecoration: "underline"
    }}
    href={'#'}>
    {children}
  </ChakraLink>
);

export function NavbarTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"#f4f4f4"} px={4} width={"90%"} margin={"auto"} fontFamily={"sans-serif"} fontSize={"13px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
             >
              {ChakraLinks.map((ChakraLink) => (
                <NavChakraLink key={ChakraLink}>{ChakraLink}</NavChakraLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
        <hr/>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {ChakraLinks.map((ChakraLink) => (
                <NavChakraLink key={ChakraLink}>{ChakraLink}</NavChakraLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}


{/*-------------------------------------Anthropologie ---------------------------------*/}

export const Line=()=>{
        for(let i=0;i<26;i++){
          return <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    }
}

export const youMayALsoLike = [
    {
      img1: "https://images.urbndata.com/is/image/Anthropologie/49170905_097_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
      img2: "https://images.urbndata.com/is/image/Anthropologie/49170905_097_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
      name:"Capri Blue Diffuser Oil"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/45362452AN_000_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100",
        img2: "https://images.urbndata.com/is/image/Anthropologie/45362452AN_000_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Matte Latte Bowls, Set of 6"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/79759627_027_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/79759627_027_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Wiggle Switch Plate"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/45549696AA_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/45549696AA_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Calle Vase"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/64865355_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/64865355_006_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"On Cloud 5 Terry Sneakers"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_a10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Grecian Bust Pot"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/65276503_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/65276503_000_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Butterfly Basket"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/4112210690147_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/4112210690147_066_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Eva Franco Lace Floral Blouse"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/78930120_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/78930120_010_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"New Balance 327 Sneakers"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/48548598_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/48548598_060_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Grecian Bust Pot"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/64865355_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/64865355_006_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"On Cloud 5 Terry Sneakers"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/65276503_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/65276503_000_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Butterfly Basket"
    },
  ];

  export const RecentlyViewed = [
    {
      img1: "https://images.urbndata.com/is/image/Anthropologie/81591992_030_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
      img2: "https://images.urbndata.com/is/image/Anthropologie/49170905_097_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
      name:"Super Mini Slouchy Bag"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/45362452AN_000_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"The Colette Cropped Wide-Leg Pants"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/58028085_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/79759627_027_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Capri Blue Volcano Matte Black Jar Candle"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/4111916210042_015_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/45549696AA_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"New Balance 327 Sea Salt Sneakers"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/64784432_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/64865355_006_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Pilcro Spliced Henley Top"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/76124932_266_a?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Capri Blue Pink Shimmer Jar Candle"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b2?$an-category$&qlt=80&fit=constrain",
        img2: "https://images.urbndata.com/is/image/Anthropologie/65276503_000_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Capri Blue Capiz Jar Candle"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/4130578570023_041_b2?$an-category$&qlt=80&fit=constrain",
        img2: "https://images.urbndata.com/is/image/Anthropologie/4112210690147_066_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"The Somerset Maxi Dress: Embroidered Edition"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b20?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/78930120_010_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Tiled Margot Monogram Mug"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/60456498_040_b10?$an-category$&qlt=80&fit=constrain",
        img2: "https://images.urbndata.com/is/image/Anthropologie/48548598_060_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Capri Blue Reed Diffuser Oil"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/64865355_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/64865355_006_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"On Cloud 5 Terry Sneakers"
    },
    {
        img1: "https://images.urbndata.com/is/image/Anthropologie/65276503_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
        img2: "https://images.urbndata.com/is/image/Anthropologie/65276503_000_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",     
        name:"Butterfly Basket"
    },
  ];

export default function LandingPage() {
    // const data = useSelector((store)=>store.navdata);
    // const dispatch= useDispatch();
    // console.log(data);
    // useEffect(()=>{
    //     dispatch(getNavItems());
    // }, [])
  return (
    <Box bg={"#f4f4f4"}>
    <Grid 
        gap={7} 
        gridTemplateColumns={"repeat(5,1fr)"}
        margin ={"auto"} 
        width={"90%"} 
        marginTop={5} 
        fontFamily={"Times New Roman"}
    >
        <Box border={"1px solid #DBAC07"} >
            <Button
                flex={1}
                fontWeight={"400"}
                px={"92px"}
                py={"25px"}
                fontSize={'lg'}
                borderRadius={"15px"}
                bg={'#f7f6f2'}
                color={'black'}
                border={"1px solid #DBAC07"}
            >
                to the <span style={{fontWeight:"900", marginLeft:"5px"}}> TOP(s)</span>
            </Button>
        </Box>
        <Box border={"1px solid #DBAC07"} cursor={'pointer'}>
            <Button
                flex={2}
                fontWeight={"400"}
                px={"92px"}
                py={"25px"}
                fontSize={'lg'}
                borderRadius={"15px"}
                bg={'#f7f6f2'}
                color={'black'}
                border={"1px solid #DBAC07"}
            >
            <span style={{fontWeight:"900", marginRight:"5px"}}>JEANS,</span> please
            </Button>
        </Box>
        <Box border={"1px solid #DBAC07"}>
            <Button
                flex={3}
                fontWeight={"400"}
                px={"92px"}
                py={"25px"}
                fontSize={'lg'}
                borderRadius={"15px"}
                bg={'#f7f6f2'}
                color={'black'}
                border={"1px solid #DBAC07"}
            >
            <span style={{fontWeight:"900", marginRight:"5px"}}>PANTS</span> preferred
            </Button>
        </Box>
        <Box border={"1px solid #DBAC07"}>
            <Button
                flex={4}
                fontWeight={"400"}
                px={"92px"}
                py={"25px"}
                fontSize={'lg'}
                borderRadius={"15px"}
                bg={'#f7f6f2'}
                color={'black'}
                border={"1px solid #DBAC07"}
            >
            the <span style={{fontWeight:"900", marginLeft:"5px"}} >DECOR</span> edit
            </Button>
        </Box>
    </Grid>
    <Link href={`/dresses`}>
    <Box width={"90%"} margin={"auto"} marginTop={"40px"} position={"relative"}>
        <Image src='https://images.ctfassets.net/5de70he6op10/3eri4S7CUYNA223W694QUo/890cffce3e1cc21308f3051be0a76baa/473929293-ls_m1.jpg?w=2694&q=80&fm=webp' alt='Dan Abramov'
        width={1357} height={1200} />
        <Button
            size='md'
            height='38px'
            width='150px'
            borderColor='white'
            position={"absolute"}
            top={"92%"}
            left={"48%"}
            transform="translate(-50%, -50%)"
            fontSize={"12px"}
            padding={"10px 20px"}
            curson={"pointer"}
            textAlign={"center"}
            _hover={
                {
                    textDecoration: "underline"
                }
            }

        >
        shop dresses
        </Button>
    </Box>
    </Link>

    <Box marginTop={"40px"} position={"relative"}>
        <Grid templateColumns='repeat(5, 1fr)' gap={7} width={"90%"} margin={"auto"}  zIndex={0}>
        <Link href={'/clothing'} >
            <Box w='433px' h='10'>
            <Image src='https://images.ctfassets.net/5de70he6op10/24XjZK35JsGCP4fmCO8580/6d8469a59dd0fea277acaa832dac4786/473929297-ls_m2a.jpg?w=856&q=80&fm=webp' alt='Dan Abramov'
            width={700} height={200} />
            <Button
                size='md'
                height='38px'
                width='150px'
                borderColor='white'
                position={"absolute"}
                top={"560px"}
                left={"15%"}
                // transform="translate(-50%, -50%)"
                fontSize={"12px"}
                padding={"10px 20px"}
                curson={"pointer"}
                textAlign={"center"}
                zIndex={1}
                _hover={
                    {
                        textDecoration: "underline"
                    }
                }

            >
            shop new clothing
            </Button>
            </Box>
            </Link>


            <Link href='/clothing'>
            <Box w='435px' h='10'>
            <Image src='https://images.ctfassets.net/5de70he6op10/3i7R768ERr5ciI56znod56/151bbbbe9b52ff4c5fca01f76720fcbe/473929303-ls_m2b.jpg?w=856&q=80&fm=webp' alt='Dan Abramov'
            width={700} height={200} />
            <Button
                size='md'
                height='38px'
                width='150px'
                borderColor='white'
                position={"relative"}
                top={"-75px"}
                left={"35%"}
                fontSize={"12px"}
                padding={"10px 20px"}
                curson={"pointer"}
                textAlign={"center"}
                _hover={
                    {
                        textDecoration: "underline"
                    }
                }

            >
            the gataway shop
            </Button>
            </Box>
            </Link>

            <Link href='/clothing' >
            <Box w='435px' h='10'>
            <Image src='https://images.ctfassets.net/5de70he6op10/EO7OfU3ZWf8n7njPYNrCo/097740c34d53fbad8d6bbae669514b4a/473929312-ls_m2c.jpg?w=856&q=80&fm=webp' alt='Dan Abramov'
            width={500} height={200} />
            <Button
                size='md'
                height='38px'
                width='150px'
                borderColor='white'
                position={"relative"}
                top={"-80px"}
                left={"35%"}
                // transform="translate(-50%, -50%)"
                fontSize={"12px"}
                padding={"10px 20px"}
                curson={"pointer"}
                textAlign={"center"}
                _hover={
                    {
                        textDecoration: "underline"
                    }
                }

            >
            shop swimwear
            </Button>
            </Box>
            </Link>
        </Grid>
    </Box>
    
    <Line/>
    
    <Box marginTop={"40px"} position={"relative"}>
        <Grid templateColumns='repeat(5, 1fr)' gap={7} width={"90%"} margin={"auto"}  zIndex={0}>
        <Link href='/clothing' >
            <Box w='670px' h='10'>
            <Image src='https://images.ctfassets.net/5de70he6op10/5SpSw7RKfexkiiBBqnTSz0/020ab583c49d60f3053868bbaf0ed2e8/473929316-ls_m3a.jpg?w=1302&q=80&fm=webp' alt='Dan Abramov'
            width={700} height={200} />
            <Button
                size='md'
                height='38px'
                width='150px'
                borderColor='white'
                position={"absolute"}
                top={"540px"}
                left={"23%"}
                fontSize={"12px"}
                padding={"10px 20px"}
                curson={"pointer"}
                textAlign={"center"}
                zIndex={1}
                _hover={
                    {
                        textDecoration: "underline"
                    }
                }

            >
            shop new clothing
            </Button>
            </Box>

            </Link>

            <Link href='/clothing' >
                <Box w='663px' h='10'>
                <Image src='https://images.ctfassets.net/5de70he6op10/6VLdLozl8tBTMYC7Bjy39f/29875f9e1e26ad89cd2a502f70dc9eba/473929321-ls_m3b.jpg?w=1302&q=80&fm=webp' alt='Dan Abramov'
                width={700} height={200} />
                <Button
                    size='md'
                    height='38px'
                    width='150px'
                    borderColor='white'
                    position={"relative"}
                    top={"-70px"}
                    left={"40%"}
                    fontSize={"12px"}
                    padding={"10px 20px"}
                    curson={"pointer"}
                    textAlign={"center"}
                    _hover={
                        {
                            textDecoration: "underline"
                        }
                    }

                >
                the gataway shop
                </Button>
                </Box>
            </Link>
        </Grid>
    </Box>

    <Line/>

    <Box marginTop={"40px"} position={"relative"}>
        <Grid templateColumns='repeat(5, 1fr)' gap={7} width={"90%"} margin={"auto"}  zIndex={0}>
        <Link href='/dresses'>
            <Box w='433px' h='10'>
            <Image src='https://images.ctfassets.net/5de70he6op10/wH3s9ULThzua1X1ZTzDMx/3a9607dc9e8636eb96ca159919afa542/473929336-ls_m4a.jpg?w=856&q=80&fm=webp' alt='Dan Abramov'
            width={700} height={200} />
            <Button
                size='md'
                height='38px'
                width='150px'
                borderColor='white'
                position={"absolute"}
                top={"560px"}
                left={"15%"}
                fontSize={"12px"}
                padding={"10px 20px"}
                curson={"pointer"}
                textAlign={"center"}
                zIndex={1}
                _hover={
                    {
                        textDecoration: "underline"
                    }
                }

            >
            shop spring entertaining essentials
            </Button>
            </Box>
            </Link>

            <Link href='/clothing' >
            <Box w='435px' h='10'>
            <Image src='https://images.ctfassets.net/5de70he6op10/2ABHGD0yJQ3NHq6iiJWTUw/194b56bf722572e79d65a9ed6293bb46/473929340-ls_m4b.jpg?w=856&q=80&fm=webp' alt='Dan Abramov'
            width={700} height={200} />
            <Button
                size='md'
                height='38px'
                width='150px'
                borderColor='white'
                position={"relative"}
                top={"-75px"}
                left={"35%"}
                fontSize={"12px"}
                padding={"10px 20px"}
                curson={"pointer"}
                textAlign={"center"}
                _hover={
                    {
                        textDecoration: "underline"
                    }
                }

            >
            shop tops
            </Button>
            </Box>
            </Link>

            <Link href='/clothing' >
            <Box w='435px' h='10'>
            <Image src='https://images.ctfassets.net/5de70he6op10/7yrEmAMeP6Kx7XthafpP8b/cb1869eb48809f1b667c1b1262cc8085/473929343-ls_m4c.jpg?w=856&q=80&fm=webp' alt='Dan Abramov'
            width={500} height={200} />
            <Button
                size='md'
                height='38px'
                width='150px'
                borderColor='white'
                position={"relative"}
                top={"-80px"}
                left={"35%"}
                fontSize={"12px"}
                padding={"10px 20px"}
                curson={"pointer"}
                textAlign={"center"}
                _hover={
                    {
                        textDecoration: "underline"
                    }
                }

            >
            shop dresses
            </Button>
            </Box>
            </Link>
        </Grid>
    </Box>

    <Line/>

    <Link href='/clothing' >
    <Box width={"90%"} margin={"auto"} marginTop={"40px"} position={"relative"}>
        <Image src='https://images.ctfassets.net/5de70he6op10/BYqngT4RGr1qC07s5Stvm/45ac7c1b8ee7fc4ba75a71c5bae96223/473929345-ls_m5_bhldn.jpg?w=2694&q=80&fm=webp' alt='Dan Abramov'
        width={1357} height={1200} />
        <Button
            size='md'
            height='38px'
            width='150px'
            borderColor='white'
            position={"absolute"}
            top={"92%"}
            left={"48%"}
            transform="translate(-50%, -50%)"
            fontSize={"12px"}
            padding={"10px 20px"}
            curson={"pointer"}
            textAlign={"center"}
            _hover={
                {
                    textDecoration: "underline"
                }
            }

        >
        shop weddings
        </Button>
    </Box>
    </Link>

    <Box width={"90%"} margin={"auto"} px={4} marginTop={"40px"}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} fontSize={"20px"}>
      <Box>Top-Rated Picks</Box>
      <Button
        size='md'
        bg="#f4f4f4"
        border='none'
        fontSize={"16px"}
        curson={"pointer"}
        textDecoration="underline"
        color={"blue.300"}
        _hover={
            {
                textDecoration: "none"
            }
        }
      >
        Shop All
    </Button>

      
    </Flex>
  </Box>
 <Box width={"90%"} margin={"auto"}><hr/></Box>
  

  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' width={"90%"} margin={"auto"} marginTop={"20px"}>
    
    <Box maxW='sm'  >
            <Link href='/dresses'>
                <Image src='https://images.ctfassets.net/5de70he6op10/1h9gkbrJB6rfKMEsrQsrlE/75fdaefe631d2d0e38d24b5e5d68ec10/473929238-ls_customerfave_a.jpg?w=630&q=80&fm=webp' alt='Dan Abramov'
                width={357} height={200} />
            </Link>
            <Stack h='250px' mb={'50px'}  justify={'space-between'} mt='6' spacing='3'>
            <Text pt='2' fontSize='sm' fontFamily={"times romer"}>
                CUSTOMER FAVORITE
            </Text>
            <Heading fontSize='22px' fontWeight={400} fontFamily={"times romer"}>The Marais Chiffon Maxi Dress</Heading>
            <Grid gridTemplateColumns={"repeat(5,13px)"} fontSize={"10px"}>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Grid>
            <Text>
                Love - I have this in three colors. Why? Because you can throw it on, and the fit is seamless, it’s comfy it’s breezy.
            </Text>
            <Link href='/dresses' >
            <Button 
                textDecoration={"underline"} 
                color={"blue.300"} 
                bg={"white"} 
                textAlign="left"
                justifyContent={"left"} 
                fontSize={"13px"} 
                _hover={{
                    textDecoration:"none"
                }}
            >
                shop now
            </Button>
            </Link>
            </Stack>
        
    </Box>


    <Box maxW='sm'>
    <Link href='/dresses'>
            <Image src='https://images.ctfassets.net/5de70he6op10/2bvup8dYlhV23fJF8JWtBi/f007eb7c84134bfe87c3dd3669ffd06f/473929242-ls_customerfave_b.jpg?w=630&q=80&fm=webp' alt='Dan Abramov'
            width={1357} height={1200} /></Link>
            <Stack h='250px' mb={'50px'} justify={'space-between'}  mt='6' spacing='3'>
            <Text pt='2' fontSize='sm' fontFamily={"times romer"}>
                CUSTOMER FAVORITE
            </Text>
            <Heading fontSize='22px' fontWeight={400} fontFamily={"times romer"}>The Super Mini Slouchy Bag</Heading>
            <Grid gridTemplateColumns={"repeat(5,13px)"} fontSize={"10px"}>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Grid>
            <Text>
            Super cute, perfect little crossbody. Holds your phone, money, lipstick and keys.
            </Text>
            <Link href='/dresses' >
            <Button 
                textDecoration={"underline"} 
                color={"blue.300"} 
                bg={"white"} 
                textAlign="left"
                justifyContent={"left"} 
                fontSize={"13px"} 
                _hover={{
                    textDecoration:"none"
                }}
            >
                shop now
            </Button>
            </Link>
            </Stack>
        
    </Box>


    <Box maxW='sm'>
    <Link href='/dresses'>
            <Image src='https://images.ctfassets.net/5de70he6op10/7e6CTKkxyvEGN65qcfAD6e/833ca12cd46657912e24e81a42fc086a/473929246-ls_customerfave_c.jpg?w=630&q=80&fm=webp' alt='Dan Abramov'
            width={1357} height={1200} /></Link>
            <Stack h='250px' mb={'50px'} justify={'space-between'} mt='6' spacing='3'>
            <Text pt='2' fontSize='sm' fontFamily={"times romer"}>
                CUSTOMER FAVORITE
            </Text>
            <Heading fontSize='22px' fontWeight={400} fontFamily={"times romer"}>The Bennet Buttondown Shirt</Heading>
            <Grid gridTemplateColumns={"repeat(5,13px)"} fontSize={"10px"}>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Grid>
            <Text>
            Oversized in the best way...its a perfect cotton shirt.
            </Text>
            <Link href='/dresses' >
            <Button 
                textDecoration={"underline"} 
                color={"blue.300"} 
                bg={"white"} 
                textAlign="left"
                justifyContent={"left"} 
                fontSize={"13px"} 
                _hover={{
                    textDecoration:"none"
                }}
            >
                shop now
            </Button>
            </Link>
            </Stack>
        
    </Box>


    <Box maxW='sm'>
    <Link href='/dresses'>
            <Image src='https://images.ctfassets.net/5de70he6op10/IRIRM5boIBRZTPtM9RGo2/d5a954acdea330f877f48ee00b9dd9e7/473929254-ls_customerfave_d.jpg?w=630&q=80&fm=webp' alt='Dan Abramov'
            width={1357} height={1200} /></Link>
            <Stack h='250px' justify={'space-between'} mt='6' spacing='3'>
            <Text pt='2' fontSize='sm' fontFamily={"times romer"}>
                CUSTOMER FAVORITE
            </Text>
            <Heading fontSize='22px' fontWeight={400} fontFamily={"times romer"}>The Colette Wide-Leg Pants</Heading>
            <Grid gridTemplateColumns={"repeat(5,13px)"} fontSize={"10px"}>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Grid>
            <Text>
            I LOVE THESE PANTS! They feel good on, whether I`m standing, sitting, or walking. Overall 10/10 would recommend!
            </Text>
            <Link href='/dresses' >
            <Button 
                textDecoration={"underline"} 
                color={"blue.300"} 
                bg={"white"} 
                textAlign="left"
                justifyContent={"left"} 
                fontSize={"13px"} 
                _hover={{
                    textDecoration:"none"
                }}
            >
                shop now
            </Button>
            </Link>
            </Stack>
        
    </Box>
  </SimpleGrid >

  <Box  fontFamily="Aqleema- Regular, sans-serif" width={"95%"} margin={"auto"}>
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"700"} fontSize={"22px"} >
            You May Also Like
          </Text>
        </Box>
        <SlindingCard something={youMayALsoLike} />
    </Box>
    <Box fontFamily="Aqleema- Regular, sans-serif" width={"95%"} margin={"auto"}>
    <Box
    mt={'50px'}
      display="flex"
      justifyContent="space-between"
      px="2rem"
      mb="0.5rem"
    >
      <Text fontWeight={"700"} fontSize={"22px"} >
        Recently Viewed
      </Text>
    </Box>
    <SlindingCard something={RecentlyViewed} />
</Box>

<Box width={"90%"} margin={"auto"}><hr/></Box>

<Box width={"90%"} margin={"auto"} fontFamily={"sans-serif"} marginTop={"30px"}>
   <Heading fontSize={"25px"}>About Us</Heading>
        <Text noOfLines={[1,2]} marginTop={"20px"}>
        Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our dresses shop to find styles and fits perfect for any occasion, from cocktail party dresses to wedding guest dresses to casual daytime silhouettes. Shop BHLDN and take a look at our selection of wedding dresses and bridesmaids dresses. Browse party skirts, wide-leg pants and jeans, and blouses that will turn heads. Complete your look with uncommon accessories—think only-here slides and head-turning totes. Discover our expansive home collections, from furniture to curtains, decorative pillows to duvets, wall art to Moroccan-inspired rugs. Looking for a housewarming gift? Try a coffee table book, original glassware or a set of coasters.
        </Text>
        <Button textDecoration={"underline"} color={"blue.300"} border={"none"} bg={"#f4f4f4"} marginLeft={0}>Read More...</Button>
    </Box>


    
    </Box>
  );
}
