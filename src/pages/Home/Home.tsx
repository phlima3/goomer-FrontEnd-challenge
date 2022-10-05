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
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Search } from "../../components/Icons/Search";
import { RestaurantCardButton } from "../../components/RestaurantCardButton/RestaurantCardButton";
import { Restaurant } from "../../interfaces/interface.restaurant";
import { api } from "../../services/api";

export const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get("restaurants").then((response) => {
        return response.data;
      });
      setRestaurants(data);
      return data;
    };

    fetchData().catch(console.error);
  }, []);

  const filteredRestaurants =
    search.length > 0
      ? restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

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
              <Input
                type="search"
                placeholder="Buscar estabelecimento"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
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
            {search.length > 0 ? (
              <>
                {filteredRestaurants.map((restaurant: Restaurant) => {
                  const hours = restaurant.hours;
                  const arrDays = hours.flatMap((hours) => {
                    return hours.days;
                  });

                  return (
                    <RestaurantCardButton
                      key={restaurant.id}
                      data={restaurant}
                      hours={arrDays}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {restaurants.map((restaurant: Restaurant) => {
                  const hours = restaurant.hours;
                  const arrDays = hours.flatMap((hours) => {
                    return hours.days;
                  });
                  return (
                    <RestaurantCardButton
                      key={restaurant.id}
                      data={restaurant}
                      hours={arrDays}
                    />
                  );
                })}
              </>
            )}
          </Grid>
        </Flex>
      </Flex>
    </div>
  );
};
/*  {restaurants.map((restaurant: Restaurant) => {
              const hours = restaurant.hours;
              const arrDays = hours.map((hours: number) => {
                return hours.days;
              });
              const openHours = arrDays.map((days: number) => {
                return days;
              });

              return (
                <RestaurantCardButton
                  key={restaurant.id}
                  data={restaurant}
                  hours={openHours}
                />
              );
            })} */
