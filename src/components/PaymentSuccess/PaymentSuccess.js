import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");

  return (
    <ChakraProvider>
      <Box>
        <VStack h="100vh" justifyContent={"center"}>
          <Heading textTransform={"uppercase"}>Welcome to Pahel Family</Heading>

          <Text>Reference No.{referenceNum}</Text>
          <Link to="/">
            <button className="font-medium text-indigo-600 hover:text-indigo-500">
              Go To Pahel
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </Link>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default PaymentSuccess;
