import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export const Home = () => {
  useEffect(() => {
    api.get("restaurants").then((response) => console.log(response.data));
  });

  return (
    <>
      <Header />
    </>
  );
};
