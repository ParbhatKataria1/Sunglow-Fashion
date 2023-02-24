import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import { useToast } from '@chakra-ui/react'

import Image from 'next/image';
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    const toast = useToast({
        position: 'top',
        title: 'Email successfully subscribed!',
        containerStyle: {
          width: '50%',
          maxWidth: '100%',
        },
      })
    return (
      <Box
        bg={"#f7f6f2"}
        color={useColorModeValue('gray.700', 'gray.200')} fontFamily={"sans-serif"} fontSize={"12px"}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 2fr' }}
            spacing={8} >
            <Stack align={'flex-start'}>
              <ListHeader>Help</ListHeader>
              <Link href={'#'}>Track your Order</Link>
              <Link href={'#'}>Start A Return Or Exchange (US + CA)</Link>
              <Link href={'#'}>Returns & Exchanges</Link>
              <Link href={'#'}>Customer Service</Link>
              <Link href={'#'}>Current Promotions</Link>
              <Link href={'#'}>Product Recalls</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>About Us</ListHeader>
              <Link href={'#'}>Our Story</Link>
              <Link href={'#'}>A Greater Good</Link>
              <Link href={'#'}>Diversity & Inclusive</Link>
              <Link href={'#'}>Stories</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Services</ListHeader>
              <Link href={'#'}>AnthroPerks</Link>
              <Link href={'#'}>Gift Cards</Link>
              <Link href={'#'}>AnthroLiving Designer & Trade Program</Link>
              <Link href={'#'}>Store Pickup & Collection Points</Link>
              <Link href={'#'}>Klarna</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Connect</ListHeader>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Stay Connected</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Styling Serices</Link>
              <Link href={'#'}>Request A Catalog</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Sign Up for Email</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  onClick={() => {
                    toast()}}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={'center'}
            align={'center'}>
            <Stack direction={'row'}  spacing={6}>
            <Box bg={"#f7f6f2"} width={"120px"}><Image height={204} width={700}  src={"https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"} alt="image"/></Box>
            
                <SocialButton label={'Twitter'} href={'#'} >
                    < FaTwitter/>
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                    <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                    <FaInstagram />
                </SocialButton>
            </Stack>
        </Container>

        <Box bg={"#f7f6f2"} width={"90%"} margin={"auto"}><Image height={204} width={3000}  src={"https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/103ccf34ec8f615dab367fa63ac9c326/467884464-jan2023_sitefootbanners_update_downloadtheapp_ls.jpg"} alt="image"/></Box>

        <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={'center'}
            align={'center'} 
            marginTop={"40px"}
            >
            <Stack direction={'row'}  spacing={6}>            
            <Link href={'#'}>US <span>|</span></Link>
            <Link href={'#'}>France <span>|</span></Link>
            <Link href={'#'}>Germany <span>|</span></Link>
            <Link href={'#'}>Italy <span>|</span></Link>
            <Link href={'#'}>Spain <span>|</span></Link>
            <Link href={'#'}>UK</Link>
            </Stack>
        </Container>
        <Container
        as={Stack}
        maxW={'8xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        marginTop={"20px"}
        >
        <Stack direction={'row'} spacing={6} color={"blue.300"}>
          <Link href={'#'}>Privacy <span>|</span></Link>
          <Link href={'#'}>Terms of Use <span>|</span></Link>
          <Link href={'#'}>CA Transparency <span>|</span></Link>
          <Link href={'#'}>Accessibility <span>|</span></Link>
          <Link href={'#'}>URBN.com  <span>|</span></Link>
          <Link href={'#'}>For CA Residents<span>|</span></Link>
        </Stack>
        <Text>2023 URBN.com. All Rights Reserved.</Text>
      </Container>
        
        
      </Box>
    );
  }