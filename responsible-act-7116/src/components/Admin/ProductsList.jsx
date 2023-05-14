import { getAllProductData } from "@/redux/allProduct/allProduct.action";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListGenerator } from "../../utils/function";
import { base_url } from "../../utils/url";
import Accordion1 from "../accordion1";
import Footer from "../footer";
import ProductItem from "./productItem";

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
  const [type, settype] = useState("allproduct");

  const [update, setupdate] = useState(false);

  function justUpdate() {
    setupdate((prev) => !prev);
  }

  // const update = useSelector(state=>state);
  // console.log("there is an update");
  // const params = useSearchParams();
  const router = useRouter();
  let temp = router?.query?.page || 1;
  // console.log(temp)
  const [page, setpage] = useState(temp);
  let totalPages = Math.ceil(data.length / 5);
  // console.log(temp, 'this is ', router?.query?.page)
  //
  // router.query.page = "page"
  // router.push(router)

  // console.log(params,'tihsifidas')
  const getData = async () => {
    let res = await axios
      .get(`https://apiserver-no4z.onrender.com/${type}`)
      .then((res) => setData(res.data));
    setpage(temp);
  };
  useEffect(() => {
    getData();
  }, [temp, type]);

  function changePage(e) {
    let temp = typeof e != "number" ? Number(e.target.innerText) : e;
    // console.log(e.target.innerText)
    router.query.page = temp;
    router.push(router);
    // console.log(router.query, 'dagdafda')
    setpage(temp);
  }

  const handleChange = (e) => {
    let temp = [...data];
    if (e.target.value === "lth") {
      setData(temp.sort((a, b) => parseInt(a.price) - parseInt(b.price)));
      // console.log('sorting')
    } else if (e.target.value === "htl") {
      setData(temp.sort((a, b) => +b.price - +a.price));
    }
    // console.log(data)
  };

  const handleItemType = (value) => {
    // console.log(value);
    settype(value);
  };
  // console.log(data)

  let newdata = data;
  if (data.length > 0) {
    // console.log(data, page)
    newdata = data.filter((el, ind) => {
      return 5 * (+page - 1) <= ind && ind < +page * 5;
    });
  }
  // console.log(newdata, data, "change");
  useEffect(() => {}, [update]);
  return (
    <>
      <Box>
        <Flex w={"98%"} m={"auto"}>
          <Box w="100%">
            <Flex
              zIndex="10"
              w={"100%"}
              bg="white"
              p="20px"
              justifyContent={"space-between"}
            >
              <Heading
                fontSize={"xl"}
                display={"flex"}
                gap={"30px"}
                alignItems={"center"}
              >
                {" "}
                Women&sbquo;s Dresses:
                <Text fontSize={"small"} fontWeight={"normal"}>
                  {data.length} products
                </Text>{" "}
              </Heading>
              <Flex alignItems={"center"} gap={"7px"}>
                <Text>Sort:</Text>
                <Select
                  placeholder="Featured"
                  onChange={(e) => handleChange(e)}
                >
                  <option value={"lth"}>Price: Low to High</option>
                  <option value={"htl"}>Price: High to Low</option>
                </Select>
              </Flex>
              <Flex w="24%" alignItems={"center"} gap={"7px"}>
                <Text w="200px">Product Type:</Text>
                <Select
                  placeholder="Choose Type"
                  onChange={(e) => handleItemType(e.target.value)}
                >
                  <option value={"allproduct"}>All Products</option>
                  <option value={"dresses"}>Dresses</option>
                  <option value={"clothing"}>Clothing</option>
                  <option value={"shoes"}>Shoes</option>
                </Select>
              </Flex>
            </Flex>
            <Flex m={"auto"}>
              <Flex>
                <Grid
                  w={"100%"}
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap={"30px"}
                >
                  {newdata.map((el) => {
                    return (
                      <ProductItem
                        key={el.id}
                        type={type}
                        justUpdate={justUpdate}
                        {...el}
                        // getData={getData}
                        // url={url}
                      />
                    );
                  })}
                </Grid>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Flex
          alignItems={"center"}
          w={"98%"}
          justifyContent={"center"}
          m={"auto"}
        >
          {
            <Button
              isDisabled={page !== 1 ? false : true}
              className="prevBtn"
              data-testid="prevBtn"
              onClick={() => changePage(page - 1)}
            >
              Prev
            </Button>
          }

          {/* render the buttons here, directly. Ensure, each button has the "data-testid='btn'" prop. Add the className, activeBtn, if the current button is the activePage*/}

          {Array(totalPages)
            .fill(-1)
            .map((el, ind) => {
              return (
                <Button
                  isDisabled={ind + 1 == page ? true : false}
                  m="9px"
                  onClick={changePage}
                  key={ind + 1}
                >
                  {ind + 1}
                </Button>
              );
            })}

          {
            <Button
              isDisabled={page != totalPages ? false : true}
              className="nextBtn"
              data-testid="nextBtn"
              onClick={() => changePage(page + 1)}
            >
              Next
            </Button>
          }
        </Flex>
      </Box>
    </>
  );
};

export default ProductsList;
