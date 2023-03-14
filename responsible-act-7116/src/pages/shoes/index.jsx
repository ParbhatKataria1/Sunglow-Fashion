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
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Footer from "@/components/footer";

const Shoes = () => {
  const [data, setData] = useState([]);
  // const params = useSearchParams();
  const router = useRouter();
  let temp = router?.query?.page || 1;
  console.log(temp);
  const [page, setpage] = useState(temp);
  let totalPages = Math.ceil(data.length / 5);

  //
  // router.query.page = "page"
  // router.push(router)

  // console.log(params,'tihsifidas')
  const getData = async () => {
    let res = await axios
      .get("https://apiserver-no4z.onrender.com/shoes")
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
    setpage(temp);
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
      <Flex w={"98%"} m={"auto"}>
        <Flex w={"25%"}>
          <Flex
            flexDir={"column"}
            w="100%"
            m="10px"
            p={"29px"}
            bg="white"
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
            h="600px"
            overflow={"auto"}
          >
            <Text fontSize={"md"} mb={"10px"} borderBottom={"1px solid grey"}>
              Browse by:
            </Text>
            <Flex flexDir={"column"} mb={"40px"}>
              <Text fontSize={"md"} mb={"10px"}>
                New
              </Text>
              <Text fontSize={"md"} mb={"10px"}>
                Top-Rated
              </Text>
              <Text fontSize={"md"} mb={"10px"}>
                Boots & Booties
              </Text>
              <Text fontSize={"md"} mb={"10px"}>
                Cold Weather Boots
              </Text>
              <Text fontSize={"md"} mb={"10px"}>
                Flat
              </Text>
              <Text fontSize={"md"} mb={"10px"}>
                Heels & Wedges
              </Text>
              <Text fontSize={"md"} mb={"10px"}>
                Mules & Clogs
              </Text>
              <Text fontSize={"md"} mb={"10px"}>
                Sandals & Sleepers
              </Text>
            </Flex>
            <Flex flexDir={"column"}>
              <Text fontSize={"md"} mb={"10px"}>
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
              fontSize={"xl"}
              display={"flex"}
              gap={"30px"}
              alignItems={"center"}
            >
              {" "}
              Women&sbquo;s Shoes:
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
              <Grid
                w={"100%"}
                gridTemplateColumns={"repeat(4,1fr)"}
                gap={"30px"}
              >
                {newdata.map((ele) => (
                  // console.log(ele)

                  <Card key={ele.id} maxW="sm">
                    <CardBody>
                      <Link href={`/shoes/${ele.id}`}>
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
                        <Link href={`/shoes/${ele.id}`}>
                          <Button variant="ghost" size="sm" colorScheme="blue">
                            View Details
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>

                  // <Link key={ele.id} href={`/shoes/${ele.id}`}>
                  //   <Flex flexDir={'column'} key={ele.id}>
                  //     {/* <Flex flexDir={'column'}> */}
                  //       <Image id='hoverimg' onMouseOver={e=>e.target.srcset=`${ele.image.furl+ele.image.version.v3+ele.image.burl}`} onMouseOut={e=>e.target.srcset=`${ele.image.furl+ele.image.version.v1+ele.image.burl}`} src={ele.image.furl+ele.image.version.v1+ele.image.burl} style={{cursor:'pointer',}} width={450} height={300} alt={'img1'}/>
                  //       <Text fontSize={'small'} >{ele.title}</Text>
                  //     {/* </Flex> */}
                  //       <Text>${ele.price}</Text>
                  //       <Flex gap={'10px'} h={'20px'} alignItems={'center'} >
                  //       {
                  //           ele.color.map((ele)=>(
                  //               <Image key={ele.id} style={{borderRadius:'50%'}} width={20} height={20} src={ele.colorimg} alt={ele.alt}/>
                  //           ))
                  //       }
                  //       <Text display={'flex'} gap={'5px'}>{ele.color.length} <Text>colors</Text></Text>
                  //       </Flex>
                  //   </Flex>
                  //   </Link>
                ))}
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
      <Footer />
    </>
  );
};

export default Shoes;
