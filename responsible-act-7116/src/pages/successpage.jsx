import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Info() {
  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"blue.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Payment is Successfull
        </Heading>
        <Text color={"gray.500"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
        <Button m={"30px"}>
          <Link href="/">Go To Home Page</Link>
        </Button>
      </Box>
      <Footer />
    </>
  );
}
