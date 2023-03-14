import React, { useEffect, useState } from "react";
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
  BreadcrumbSeparator,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Footer from "@/components/footer";

const Shipping = () => {
  const { data: session, status } = useSession();
  let profileImage = session?.user?.image;
  let profileName = session?.user?.name;
  let [orderSummary, setordersummary] = useState({});

  useEffect(() => {
    const obj = JSON.parse(sessionStorage.getItem("order-data"));
    setordersummary(obj);
  }, []);
  const { subtotal, tax, totalPrice } = orderSummary;
  console.log(subtotal, tax, totalPrice);

  const [shipData, setShipData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    street_address: "",
    address: "",
    city: "",
    postCode: "",
    mobile: "",
  });

  function changeTheData(key, value) {
    let temp = {
      ...shipData,
      [key]: value,
    };
    setShipData(temp);
  }

  function handle(e) {
    e.preventDefault();
    console.log("feagd");
  }

  return (
    <>
      <Box pb={"80px"} pt={"20px"} w="90%" m="auto">
        <Breadcrumb>
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
        <Flex justifyContent={"space-between"} mt={"30px"}>
          <Box w={"65%"}>
            <Box>
              <HStack
                justifyContent={"space-between"}
                bg="gray.200"
                p={"10px"}
                borderRadius="12px"
              >
                <Box>
                  <Text>Already Have an Account?</Text>
                  <Text mt={"20px"} fontSize={"12px"}>
                    Sign in to check out faster.
                  </Text>
                </Box>
                {profileImage ? (
                  <Button>Already SignedIn</Button>
                ) : (
                  <Button>SignIn</Button>
                )}
              </HStack>
            </Box>

            <FormControl onSubmit={handle}>
              <Box mt={"40px"}>
                <Text>Shipping Address</Text>
                <Text mt={"20px"} fontSize={"13px"}>
                  Country/Region*
                </Text>
                <Select
                  onChange={(e) => {
                    changeTheData("country", e.target.value);
                  }}
                  placeholder="Select option"
                >
                  <option value="option1">U.S.A</option>
                  <option value="option2">INDIA</option>
                  <option value="option3">BANGLADESH</option>
                </Select>
                <HStack mt={"20px"}>
                  <Box w={"50%"}>
                    <Text fontSize={"13px"}>First Name*</Text>
                    <Input
                      onChange={(e) => {
                        changeTheData("firstname", e.target.value);
                      }}
                      variant="outline"
                      placeholder="Outline"
                    />
                  </Box>
                  <Box w={"50%"}>
                    <Text fontSize={"13px"}>Last Name*</Text>
                    <Input
                      onChange={(e) => {
                        changeTheData("lastname", e.target.value);
                      }}
                      variant="outline"
                      placeholder="Outline"
                    />
                  </Box>
                </HStack>
                <Box mt={"20px"}>
                  <Text fontSize={"13px"}>Street Address*</Text>
                  <Input
                    onChange={(e) => {
                      changeTheData("street_address", e.target.value);
                    }}
                    placeholder="35 character limit, continue below."
                    variant="outline"
                  />
                </Box>
                <Box mt={"20px"}>
                  <Text fontSize={"13px"}>Address 2*</Text>
                  <Input
                    onChange={(e) => {
                      changeTheData("address", e.target.value);
                    }}
                    placeholder="Building, Suite or Apartment Number"
                    variant="outline"
                  />
                  <Checkbox mt={"10px"}>
                    <Text fontSize={"12px"}>PO Box</Text>
                  </Checkbox>
                </Box>

                <Box mt={"20px"}>
                  <Text fontSize={"13px"}>City*</Text>
                  <Input
                    onChange={(e) => {
                      changeTheData("city", e.target.value);
                    }}
                    placeholder="Building, Suite or Apartment Number"
                    variant="outline"
                  />
                </Box>

                <Box mt={"20px"}>
                  <Text fontSize={"13px"}>PostCode*</Text>
                  <Input
                    onChange={(e) => {
                      changeTheData("postCode", e.target.value);
                    }}
                    placeholder="Building, Suite or Apartment Number"
                    variant="outline"
                  />
                </Box>

                <Box mt={"20px"}>
                  <Text fontSize={"13px"}>Mobile Number*</Text>
                  <InputGroup>
                    {/* <InputLeftAddon children='+91' />   deployement comment */}
                    <Input
                      onChange={(e) => {
                        changeTheData("mobile", e.target.value);
                      }}
                      type="tel"
                      placeholder="phone number"
                    />
                  </InputGroup>
                </Box>
                {/* <Input type='submit'></Input> */}
              </Box>
            </FormControl>

            <Flex mt={"10px"} justifyContent="space-between">
              {/* <Button mt={'30px'} w={'45%'} colorScheme='blue'>SHIP</Button>
            <Button  mt={'30px'} w={'45%'}colorScheme='blue' variant='outline'>PICK UP</Button> */}

              <RadioGroup defaultValue="1" mt={"20px"}>
                <Stack spacing={4} direction="row">
                  <Radio value="1">
                    <Box
                      onClick={() => {
                        changeTheData("mode", "SHIP");
                      }}
                      px={"70px"}
                      color="white"
                      py="5px"
                      borderRadius={"5px"}
                      bg="blue.500"
                      colorScheme="blue"
                    >
                      SHIP
                    </Box>
                  </Radio>
                  <Radio value="2">
                    <Box
                      onClick={() => {
                        changeTheData("mode", "PICK");
                      }}
                      px={"70px"}
                      color="white"
                      py="5px"
                      borderRadius={"5px"}
                      bg="blue.500"
                      colorScheme="blue"
                    >
                      PICK UP
                    </Box>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </Box>

          {/* order */}

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
                <ToastExample shipData={shipData} msg={"SHIP TO THE ADDRESS"} />

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

function ToastExample({ shipData, msg }) {
  const toast = useToast();
  const router = useRouter();

  function handle() {
    let temp = false;
    for (let key in shipData) {
      if (shipData[key].trim().length == 0) {
        temp = true;
        break;
      }
    }
    if (temp) {
      return toast({
        title: "Order Failed",
        description: "Please Enter All The Details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      sessionStorage.setItem("user-details", JSON.stringify(shipData));
      router.push("/paymentOption");
    }
  }
  return <Button onClick={handle}>{msg}</Button>;
}

export default Shipping;
