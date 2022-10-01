import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Search } from "../../components/Icons/Search";
import { RestaurantCardButton } from "../../components/RestaurantCardButton/RestaurantCardButton";
import { Restaurant } from "../../interfaces/interface.restaurant";
import { api } from "../../services/api";

export const Home = () => {
  const [restaurant, setRestaurant] = useState([]);

  async function getRestaurants() {
    const restaurant = await api.get("restaurants").then((res) => {
      return res.data;
    });
    setRestaurant(restaurant);
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div>
      <Header />
      <Flex px="80px">
        <Flex
          w="100%"
          justify="center"
          align="center"
          mt={8}
          fontWeight="medium"
          direction="column"
        >
          <Text fontSize="24px">Bem-vindo ao Lista Rango</Text>
          <Box w="60%" mt={8}>
            <InputGroup boxShadow="lg" rounded="lg">
              <Input type="search" placeholder="Buscar estabelecimento" />
              <InputRightElement>
                <Search />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Grid
            mt={12}
            w="100%"
            h="200px"
            templateColumns={{
              lg: "repeat(3, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
            }}
            gap={8}
          >
            <>
              {restaurant.map((restaurant: Restaurant) => {
                return (
                  <RestaurantCardButton key={restaurant.id} data={restaurant} />
                );
              })}
            </>
          </Grid>
        </Flex>
      </Flex>
    </div>
  );
};
