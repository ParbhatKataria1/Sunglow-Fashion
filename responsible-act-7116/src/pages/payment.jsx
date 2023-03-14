import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Select } from "antd";
import { useRouter } from "next/router";
import Footer from "@/components/footer";

let userDummy = {
  firstname: "",
  lastname: "",
  country: "",
  street_address: "",
  address: "",
  city: "",
  postCode: "",
  mobile: "",
  mode: "",
};

const Payment = () => {
  const [orderData, setorderdata] = useState({});
  let [userdata, setuserdata] = useState({ ...userDummy });
  let cartData = useSelector((store) => store.cartReducer);
  cartData = cartData.cartData;
  const router = useRouter();

  useEffect(() => {
    let temp1 = JSON.parse(sessionStorage.getItem("order-data"));
    setorderdata(temp1);
    let temp2 = JSON.parse(sessionStorage.getItem("user-details"));
    setuserdata(temp2);
  }, []);

  const {
    firstname,
    lastname,
    country,
    street_address,
    address,
    city,
    postCode,
    mobile,
    mode,
  } = userdata || {};

  const { subtotal, tax, totalPrice } = orderData || {};

  function handle() {
    router.push("/paymentOption");
  }

  return (
    <>
      <Box pb={"80px"} pt={"20px"} w="90%" m="auto">
        <Breadcrumb mb={"30px"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Ship or Pick Up</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Payment</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Review</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent={"space-between"}>
          <Box w={"65%"}>
            <Box>
              <Text>Shipping to parbhat kataria</Text>
              <Flex
                mt={"10px"}
                justifyContent={"space-between"}
                bg="gray.200"
                p={"14px"}
                borderRadius="12px"
              >
                <Box>
                  <Text>{firstname + " " + lastname}</Text>
                  <Text>{street_address}</Text>
                  <Text>{city + " " + postCode}</Text>
                  <Text>Country - {country}</Text>
                  <Text>Mobile No. {mobile}</Text>
                </Box>
                <Flex>
                  <Flex alignItems={"center"}>
                    <CheckCircleIcon />
                    <Text>Add a Gift Message</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Divider />
            <Text mt={"20px"} mb="20px">
              Express and Overnight orders placed after 1 PM ET typical ship the
              next business day
            </Text>
            <Divider />
            <Box bg="gray.200" p={"14px"} borderRadius="12px">
              <Text fontWeight={"semibold"}>7-12 busniess days - $60.00</Text>
              <Text mt={"10px"}>Standard International</Text>
              <Text mt={"10px"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                voluptatibus asperiores voluptate quasi neque, minima reiciendis
                perferendis, dolore similique id repellat eveniet inventore?
              </Text>
            </Box>
            <Divider />
            <Box p={"10px"} mt="30px">
              <Flex
                justifyContent={"space-between"}
                border={"1px solid lightgray"}
                p="10px"
                borderRadius={"8px"}
              >
                <Box w="20%">
                  <Text>Image</Text>
                </Box>
                <Box w={"40%"}>
                  {" "}
                  <Text>Description</Text>{" "}
                </Box>
                <Box>
                  <Text>Item Price</Text>
                </Box>
                <Box>
                  <Text>Quanitity</Text>
                </Box>
                <Box>
                  <Text>Total Price</Text>
                </Box>
              </Flex>

              {cartData.map((cartItem) => {
                return (
                  <Box key={cartItem.id} mb={"10px"}>
                    <Flex
                      justifyContent={"space-between"}
                      borderTop={"1px solid lightgray"}
                      borderBottom={"1px solid lightgray"}
                      p="10px"
                    >
                      <Box w="20%">
                        <Flex>
                          <Image
                            w={"100%"}
                            src={cartItem.image.furl}
                            alt={cartItem.title}
                          ></Image>
                        </Flex>
                      </Box>
                      <Box w={"35%"}>
                        <Text fontWeight={500}>{cartItem.title}</Text>
                        <Text>style: {cartItem.productdetails.styleno}</Text>
                        <Text>Color : BLUE MOTIF</Text>
                        <Text>Size Set of 4</Text>
                      </Box>
                      <Box>
                        {/* <Text>Item Price</Text> */}
                        <Text>{cartItem.price}</Text>
                      </Box>
                      <Box>
                        {/* <Text>Quanitity</Text> */}
                        <Select
                          placeholder={cartItem.qty}
                          onChange={(e) => {
                            changeTheData(e.target.value);
                          }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                        </Select>
                      </Box>
                      <Box>
                        {/* <Text>Total Price</Text> */}
                        <Text>{parseInt(cartItem.price) * +cartItem.qty}</Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* ************* order */}
          <Box w={"30%"}>
            <Box border={"1px solid lightgray"} borderRadius="5px" p={"15px"}>
              <Text mb={"20px"} fontSize="18px">
                Order Summary
              </Text>
              <Flex direction="column">
                <Flex mb={"15px"} justifyContent={"space-between"}>
                  <Text>SubTotal</Text>
                  <Text>${subtotal}</Text>
                </Flex>
                <Divider mb={"15px"} />
                <Flex mb={"15px"} justifyContent={"space-between"}>
                  <Text>Shipping</Text>
                  <Text>TBD</Text>
                </Flex>
                <Divider mb={"15px"} />
                <Flex mb={"15px"} justifyContent={"space-between"}>
                  <Text>Estimated Tax</Text>
                  <Text>${tax}</Text>
                </Flex>
                <Divider mb={"15px"} />
                <Flex mb={"15px"} justifyContent={"space-between"}>
                  <Text>Total</Text>
                  <Text>${totalPrice}</Text>
                </Flex>
                <Divider mb={"15px"} />
                <Button onClick={handle} mb={"15px"}>
                  Continue To Payment
                </Button>
                {/* <Divider/> */}
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Promo
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <HStack>
                        <Input placeholder="Enter Your Code" />
                        <Button>Apply</Button>
                      </HStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Payment;
