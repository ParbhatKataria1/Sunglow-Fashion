import Accordion1 from "@/components/accordion1";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Footer from "@/components/footer";

const Dresses = () => {
  const [data, setData] = useState([]);
  // const params = useSearchParams();
  const router = useRouter();
  let temp = router?.query?.page || 1;
  console.log(temp);
  const [page, setpage] = useState(temp);
  let totalPages = Math.ceil(data.length / 5);
  console.log(temp, "this is ", router?.query?.page);
  //
  // router.query.page = "page"
  // router.push(router)

  // console.log(params,'tihsifidas')
  const getData = async () => {
    let res = await axios
      .get("https://apiserver-no4z.onrender.com/dresses")
      .then((res) => setData(res.data));
    setpage(temp);
  };
  useEffect(() => {
    getData();
  }, [temp]);

  function changePage(e) {
    let temp = typeof e != "number" ? Number(e.target.innerText) : e;
    console.log(e.target.innerText);
    router.query.page = temp;
    router.push(router);
    console.log(router.query, "dagdafda");
    setpage(temp);
  }

  const handleChange = (e) => {
    let temp = [...data];
    if (e.target.value === "lth") {
      setData(temp.sort((a, b) => parseInt(a.price) - parseInt(b.price)));
      console.log("sorting");
    } else if (e.target.value === "htl") {
      setData(temp.sort((a, b) => +b.price - +a.price));
    }
    console.log(data);
  };
  // console.log(data)

  let newdata = data;
  if (data.length > 0) {
    console.log(data, page);
    newdata = newdata.filter((el, ind) => {
      return 5 * (+page - 1) <= ind && ind < +page * 5;
    });
  }

  return (
    <>
      <Flex w={"98%"} m={['100px auto auto auto','100px auto auto auto','100px auto auto auto','50px auto auto auto']}>
        <Flex w={["0%",'25%','25%','25%']}>
          <Flex
            flexDir={"column"}
            fontSize={['sm','md','xl','xl']}
            w="100%"
            m="10px"
            p={"29px"}
            bg="white"
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
            h="600px"
            overflow={"auto"}
          >
            <Text fontSize={['sm','sm','md','md']} mb={"10px"} borderBottom={"1px solid grey"}>
              Browse by:
            </Text>
            <Flex flexDir={"column"} mb={"40px"}>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                New
              </Text>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Top-Rated
              </Text>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Boots & Booties
              </Text>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Cold Weather Boots
              </Text>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Flat
              </Text>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Heels & Wedges
              </Text>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Mules & Clogs
              </Text>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Sandals & Sleepers
              </Text>
            </Flex>
            <Flex flexDir={"column"}>
              <Text fontSize={['sm','sm','md','md']} mb={"10px"}>
                Filter by:
              </Text>
              <Flex flexDir={"column"}>
                <Accordion1 data={data} setData={setData} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box w="100%">
          <Flex
            zIndex="10"
            w={"100%"}
            bg="white"
            p="20px"
            justifyContent={"space-between"}
          >
            <Heading
              fontSize={['sm','md','md','xl']}
              display={"flex"}
              gap={"30px"}
              alignItems={"center"}
            >
              {" "}
              Women's Dresses:
              <Text fontSize={"small"} fontWeight={"normal"}>
                {data.length} products
              </Text>{" "}
            </Heading>
            <Flex alignItems={"center"} gap={"7px"}>
              <Text>Sort:</Text>
              <Select placeholder="Featured" onChange={(e) => handleChange(e)}>
                <option value={"lth"}>Price: Low to High</option>
                <option value={"htl"}>Price: High to Low</option>
              </Select>
            </Flex>
          </Flex>
          <Flex m={"auto"}>
            <Flex>
              <SimpleGrid
                w={"100%"}
                columns={[1,2,3,4]}
                gap={"30px"}
              >
                {newdata.map((ele) => (
                  // console.log(ele)

                  <Card key={ele.id} maxW="sm" textAlign="center" alignItems={'center'}>
                    <CardBody>
                      <Link href={`/dresses/${ele.id}`}>
                        <Image
                          id="hoverimg"
                          onMouseOver={(e) =>
                            (e.target.srcset = `${
                              ele.image.furl +
                              ele.image.version.v3 +
                              ele.image.burl
                            }`)
                          }
                          onMouseOut={(e) =>
                            (e.target.srcset = `${
                              ele.image.furl +
                              ele.image.version.v1 +
                              ele.image.burl
                            }`)
                          }
                          src={
                            ele.image.furl +
                            ele.image.version.v1 +
                            ele.image.burl
                          }
                          objectFit="scale-down"
                          style={{ cursor: "pointer" }}
                          width={250}
                          height={"340px"}
                          alt={"img1"}
                        />
                      </Link>

                      <Stack mt="6">
                        <Heading size="sm">{ele.title}</Heading>
                        <Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Eos incidunt quae veniam?
                        </Text>

                        <Text color="blue.600" fontSize="md">
                          ${ele.price}
                        </Text>
                      </Stack>
                    </CardBody>
                    {/* <Divider /> */}
                    <CardFooter>
                      <ButtonGroup>
                        <Button variant="solid" size="sm" colorScheme="blue">
                          Buy now
                        </Button>
                        <Link href={`/dresses/${ele.id}`}>
                          <Button variant="ghost" size="sm" colorScheme="blue">
                            View Details
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                ))}
              </SimpleGrid>
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
            isDisabled={page === 1}
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
      <Footer />
    </>
  );
};

export default Dresses;
