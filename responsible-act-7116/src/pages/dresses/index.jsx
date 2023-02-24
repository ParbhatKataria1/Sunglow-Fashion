import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
// import axios from 'axios'
import React from 'react'
// import { useEffect } from 'react'

const Dresses = () => {

  return (
    <>
      <Box w={'98%'} m={'auto'} mt={'40px'} >
          <Flex gap={'10px'} justifyContent={'center'} textAlign={"center"} >

            <Box cursor={'pointer'} pt={'5px'} fontSize={"small"} w={'202px'} h={'50px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/54JigepSuZ2XyUc23wRjO3/b28c3fc1698914dd898dbe7ebcbd88c1/Dress_Toppers_Casual_Live_Text.jpg?w=630&q=80&fm=webp)'}>WEDDING GUEST DRESSES</Box>
            <Box cursor={'pointer'} pt={'12px'} fontSize={"small"} w={'200px'} h={'50px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/6IfiRiqCR8n6Qtx499wHhk/045c88beb8c368c4ea7fa3c40174b796/Dress_Toppers_Wedding_Live_Text.jpg?w=630&q=80&fm=webp)'}>CASUAL DRESSES</Box>
            <Box cursor={'pointer'} pt={'12px'} fontSize={"small"} w={'200px'} h={'50px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/4IFhnhWQZpy0mGYEQeDwyZ/7f5135fc723f65cebb8463a4a2d677b8/Dress_Toppers_Party_Live_Text.jpg?w=630&q=80&fm=webp)'}>PARTY DRESSES</Box>
            <Box cursor={'pointer'} pt={'12px'} fontSize={"small"} w={'200px'} h={'50px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/2ELHKaXeyUADzPjC50Pvwb/f2d5b7b073cbdadb782a81677da28c4f/Dress_Toppers_White_Live_Text.jpg?w=630&q=80&fm=webp)'}>WORK DRESSES</Box>
            <Box cursor={'pointer'} pt={'12px'} fontSize={"small"} w={'200px'} h={'50px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/3QIqqv5gyl0Fn7LnO3AOw3/89ea89e1fb2fbadf64fa35da2a0ecdd8/Dress_Toppers_Black_Live_Text.jpg?w=630&q=80&fm=webp)'}>VACATION DRESSES</Box>
            <Box cursor={'pointer'} pt={'12px'} fontSize={"small"} w={'200px'} h={'50px'} bgImg={'url(https://images.ctfassets.net/5de70he6op10/4djTq9S22vqPWjObvUHDCE/2d9f1cc9d091a32a665fc00f52b5ebd2/Dress_Toppers_Formal_Live_Text.jpg?w=630&q=80&fm=webp)'}>FORMAL DRESSES</Box>

            
          </Flex>
          <Flex w={'85%'} m={'auto'} mt={'40px'} justifyContent={'space-between'} > 
            <Flex flexDir={'column'} w={'15%'}>
                <Text fontSize={'small'} mb={'10px'} borderBottom={'1px solid grey'}>Browse by:</Text>
                <Flex flexDir={'column'} mb={'40px'}>
                <Text fontSize={'xx-small'} mb={'10px'}>Cocktail & Party Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Lounge & Casual Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Little Black Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Little White Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Maxi Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Midi Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Mini & Tunic Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Jumpsuits</Text>
                <Flex flexDir={'column'} alignItems={'flex-start'} pl={'20px'}>
                <Text fontSize={'xx-small'} mb={'10px'}>Black Tie Wedding</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Cocktail Wedding</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Casual Wedding</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Beach Wedding</Text>
                </Flex>
                <Text fontSize={'xx-small'} mb={'10px'}>Formal Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Petite Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Plus Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Bridesmaid Dresses</Text>
                <Text fontSize={'xx-small'} mb={'10px'}>Wedding Dresses</Text>
                </Flex>
                <Flex flexDir={'column'}>
                <Text fontSize={'xx-small'} mb={'10px'}>Filter by:</Text>
                <Flex flexDir={'column'}>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Color</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Style</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Sleeve Length</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Length</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Occasion</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Neckline</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Size</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Size Type</Text>
                      <Text>+</Text>
                    </Flex>
                    <Flex borderTop={'1px solid grey'} justifyContent={'space-between'} h={'50px'} alignItems={'center'} pl={'3px'} pr={'3px'} fontSize={'x-small'} fontWeight={'500px'}>
                      <Text>Price</Text>
                      <Text>+</Text>
                    </Flex>
                </Flex>
                </Flex>
            </Flex>
            <Flex border={'1px solid black'} w={'80%'}>

            </Flex>
          </Flex>
      </Box>
    </>
  )
}

export default Dresses



