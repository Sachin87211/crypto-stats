import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import pic from "../assests/pic.jpeg"

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the crypto trading app in from India.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={pic}/>
          <a href="https://www.linkedin.com/in/sachin-bhoker-433520219/" target={'_blank'} rel="noreferrer" style={{cursor:"pointer"}}>Developer</a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;