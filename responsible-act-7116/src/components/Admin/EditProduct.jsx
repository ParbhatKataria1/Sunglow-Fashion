import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

import { getProduct, patchProduct } from "../../utils/apiFunction";
import { base_url } from "../../utils/url";
import { updateAllProductData } from "@/redux/allProduct/allProduct.action";
import { useDispatch, useSelector } from "react-redux";
import { getOrderData } from "@/redux/order/order.action";


const intitialData = {
  
};

const EditProduct = ({id}) => {
  const orderData = useSelector(state=>state.orderReducer.orderData);
  const dispatch = useDispatch();
  console.log(orderData)
  useEffect(()=>{
    dispatch(getOrderData());
  },[])

  return (
    <>
    <Box>
      <Flex>
        <Box>
          {/* <Image src= ></Image> */}
        </Box>
      </Flex>
    </Box>
    
    </>
    
  );
};

export default EditProduct;
