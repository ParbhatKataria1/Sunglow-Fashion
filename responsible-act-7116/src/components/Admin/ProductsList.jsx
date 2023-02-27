import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { productListGenerator } from "../../Utils/function";
import { base_url } from "../../Utils/url";
import Accordion1 from "../Accordion1";
import ProductItem from "./ProductItem";

// const categories = [
//   { id: 1, category: "Mobiles" },
//   { id: 2, category: "Tablets" },
//   { id: 3, category: "TV" },
//   { id: 4, category: "Laptops" },
//   { id: 5, category: "Washing Mach..." },
//   { id: 6, category: "Refrigerators" },
// ];
// const starRating = [
//   { id: 1,star:2 },
//   { id: 2,star:3 },
//   { id: 3,star:4 },
//   { id: 4,star:5,}

// ];

const url = `${base_url}/allproduct`;

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);
  const getData = async () => {
    axios
      .get(`${url}`)
      .then((res) => {
        setData(res.data);
        setProductList(productListGenerator(res.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("getData", getData);
  console.log("url", url);
  return (
    <Box pos={"relative"} border={"0px solid green"} marginLeft={"-90px"}>
      <Flex gap={"10px"} justifyContent={"center"} textAlign={"center"}>
        <Box
          cursor={"pointer"}
          pt={"5px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/54JigepSuZ2XyUc23wRjO3/b28c3fc1698914dd898dbe7ebcbd88c1/Dress_Toppers_Casual_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          WEDDING GUEST DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/6IfiRiqCR8n6Qtx499wHhk/045c88beb8c368c4ea7fa3c40174b796/Dress_Toppers_Wedding_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          CASUAL DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/4IFhnhWQZpy0mGYEQeDwyZ/7f5135fc723f65cebb8463a4a2d677b8/Dress_Toppers_Party_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          PARTY DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/2ELHKaXeyUADzPjC50Pvwb/f2d5b7b073cbdadb782a81677da28c4f/Dress_Toppers_White_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          WORK DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/3QIqqv5gyl0Fn7LnO3AOw3/89ea89e1fb2fbadf64fa35da2a0ecdd8/Dress_Toppers_Black_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          VACATION DRESSES
        </Box>
        <Box
          cursor={"pointer"}
          pt={"12px"}
          fontSize={"small"}
          w={"40%"}
          h={"50px"}
          bgImg={
            "url(https://images.ctfassets.net/5de70he6op10/4djTq9S22vqPWjObvUHDCE/2d9f1cc9d091a32a665fc00f52b5ebd2/Dress_Toppers_Formal_Live_Text.jpg?w=630&q=80&fm=webp)"
          }
        >
          FORMAL DRESSES
        </Box>
      </Flex>
      <Flex w={"98%"} m={"20px 0px 5px 150px"} justifyContent={"space-between"}>
        <Heading
          fontSize={"xl"}
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
        >
          {" "}
          Dresses:
          <Text fontSize={"small"} fontWeight={"normal"}>
            {data.length} products
          </Text>{" "}
        </Heading>
        <Flex alignItems={"center"} gap={"7px"}>
          <Text>Sort:</Text>
          <Select placeholder="Featured">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Best Selling</option>
            <option>Ratings: High to Low</option>
          </Select>
        </Flex>
      </Flex>
      <Flex
        w={"98%"}
        m={"auto"}
        mt={"0px"}
        justifyContent={"space-between"}
        fontSize={"15px"}
      >
        <Flex flexDir={"column"} w={"55%"} mt={"-50px"} fontSize={"10px"}>
          <Text fontSize={"lg"} mb={"10px"} borderBottom={"1px solid grey"}>
            Browse by:
          </Text>
          <Flex flexDir={"column"} mb={"40px"} fontSize={"13px"}>
            <Text mb={"10px"}>Cocktail & Party Dresses</Text>
            <Text  mb={"10px"}>
              Lounge & Casual Dresses
            </Text>
            <Text  mb={"10px"}>
              Little Black Dresses
            </Text>
            <Text  mb={"10px"}>
              Little White Dresses
            </Text>
            <Text  mb={"10px"}>
              Maxi Dresses
            </Text>
            <Text  mb={"10px"}>
              Midi Dresses
            </Text>
            <Text  mb={"10px"}>
              Mini & Tunic Dresses
            </Text>
            <Text  mb={"10px"}>
              Jumpsuits
            </Text>
            <Flex flexDir={"column"} alignItems={"flex-start"} pl={"20px"}>
              <Text  mb={"10px"}>
                Black Tie Wedding
              </Text>
              <Text  mb={"10px"}>
                Cocktail Wedding
              </Text>
              <Text  mb={"10px"}>
                Casual Wedding
              </Text>
              <Text  mb={"10px"}>
                Beach Wedding
              </Text>
            </Flex>
            <Text  mb={"10px"}>
                      </Text>
            <Text  mb={"10px"}>
              Petite Dresses
            </Text>
            <Text  mb={"10px"}>
              Plus Dresses
            </Text>
            <Text  mb={"10px"}>
              Bridesmaid Dresses
            </Text>
            <Text  mb={"10px"}>
              Wedding Dresses
            </Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text fontSize={"xx-small"} mb={"10px"}>
              Filter by:
            </Text>
            <Flex flexDir={"column"}>
              <Accordion1 data={data} setData={setData} />
            </Flex>
          </Flex>
        </Flex>

        <GridItem p={{ base: 1, sm: 1, md: 1 }}>
          <Flex justifyContent={"flex-end"} mb={59}></Flex>
          <Grid
            w={"95%"}
            margin={"auto"}
            gridTemplateColumns={"repeat(4,1fr)"}
            gap={"5px"}
            marginTop={"-60px"}
          >
            {data.map((el) => {
              return (
                <ProductItem
                  key={el.id}
                  {...el}
                  // getData={getData}
                  // url={url}
                />
              );
            })}
          </Grid>
        </GridItem>
      </Flex>
    </Box>
  );
};

export default ProductsList;
