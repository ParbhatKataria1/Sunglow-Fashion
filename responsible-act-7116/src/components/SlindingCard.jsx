import { Box, Text,Flex,Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React,{useState,useEffect} from "react";
import { ChevronLeftIcon,ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import './SlindindCard.module.css'


const SlindingCard = ({ something, prodVal = 5 }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: prodVal,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  const [imageState, setImageState] = useState(0);
    const [imageSrc, setImageSrc] = useState(something[imageState].image);
    const [crauserDesignation, setCrauserDesignation] = useState(
      something[imageState].designation
    );

    const rightClick = () =>{
      
      if (imageState == something.length-1) {
        setImageState(0);
      }else{
         setImageState(imageState + 1);
      }
     
    }
    const leftClick = ()=> {
      if (imageState == 0) {
        setImageState(something.length - 1);
      }else{
          setImageState(imageState - 1);
      }
    }

   useEffect(() => {
     const id = setInterval(() => {
      //  console.log(imageState);
       if (imageState == something.length - 1) {
         setImageState(0);
       } else {
         setImageState(imageState + 1);
       }
     }, 1000);
     return () => {
       clearInterval(id);
     };
   }, [{imageState}]);

    useEffect(()=>{
          setImageSrc(something[imageState].image);
         
          setCrauserDesignation(something[imageState].designation);
    },[{imageState}])

  // console.log(imageState)

  return (
    <Box borderRadius={'10px'} bg="white" p="1rem" id="main_Client"
    bgPosition={"center"}
    bgRepeat={"no-repeat"}>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={100}
        keyBoardControl={true}
        customTransition="300ms"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {something.map((e, i) => (
          <Box
            h={"100%"}
            p="0.5rem"
            key={i}
            textAlign="left"
            borderRadius="5px"
            ml={"1rem"}
            cursor="pointer"
            marginTop={"0px"}
          >
            <Box >
              <Box textAlign={"center"} justifyContent={"center"} className="container">
                <Box w="100%">
                  <Box 
                    borderRadius="lg" 
                    overflow="hidden"  
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    
                    >
                    <ChakraLink textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <Box 
                        className="imgS" 
                        transform="scale(1.0)"  
                        objectFit="contain"
                        width="100%"
                          transition=".4s ease-in-out"
                          _hover={{
                            transform: 'scale(1.2)',
                          }}
                          >
                            <Link href='dresses' >
                        <Image height={204} width={700}  src={e.img1} alt="image"/>
                        </Link>
                      </Box>
                    </ChakraLink>
                  </Box>           
                </Box>
              <Box className="overlay overlay-bottom"
                  position={"absolute"}
                  transition={"all 0.3s ease"}
                  opacity= {0}
                  background-color={"blue"}
                  color={"white"}
                  width={"100%"}
                  height={0}
                  bottom= {0}
                  left={0}
                  _hover={{ height: "23%",opacity: "1"}}
                  
              >
                <Box 
                  className="text"
                  color= {"black"}
                  display={"flex"}
                  background-color={"blue"}
                  margin-left={"1rem"}

                  top= {"1rem"}
                  gap={"35px"}
                  position={"absolute"}
                  translate={"translate(-50%, -50%)"}
                >
                  <Box 
                    className="wishlist"
                    padding= {"5px 4rem"}
                    background-color={"blue"}
                    color={"black"}
                    border={"0.5px solid grey"}
                    cursor={"pointer"}
                    font-size= {"12px"}
                  >
                    Add Card
                  </Box>
                </Box>
              </Box>
             </Box>
            </Box>
            <Box>
              <Text p={'10px'} fontSize={"15px"}>{e.name}</Text>
            </Box>
          </Box>
        ))}
        <Flex mb={5}>
          <Button id="left-btn" onClick={leftClick} bg={"transparent"} >
            <ChevronLeftIcon boxSize={10} marginBottom={"320px"} marginLeft={"50px"}/>
          </Button>
          <Button id="right-btn" onClick={rightClick} bg={"transparent"}>
            <ChevronRightIcon boxSize={10} marginBottom={"320px"} marginLeft={"120px"}/>
          </Button>
        </Flex>
      </Carousel>
    </Box>
  );
};

export default SlindingCard;
