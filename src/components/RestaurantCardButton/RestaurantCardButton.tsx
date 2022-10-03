import { Button, Circle, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Restaurant } from "../../interfaces/interface.restaurant";

interface RestaurantProps {
  data: Restaurant;
}

export const RestaurantCardButton = ({ data }: RestaurantProps) => {
  const [days, setDays] = useState([]);

  function verifyData() {
    const date = new Date();

    const Days = data.hours.map((day: any) => {
      return day.days;
    });
    Days.map((day: any) => {
      setDays(day);
    });

    /*     console.log(days);
    if (days.includes(date.getDay())) {
      return console.log(true);
    } else false; */
  }
  /*   useEffect(() => {
    verifyData(data);
  }, [data]);
 */
  return (
    <Button
      w="100%"
      h="100px"
      rounded="md"
      boxShadow="md"
      bg="white"
      position="relative"
      pl="0"
    >
      <Circle
        bg="background.tertiary.500"
        size="48px"
        position="absolute"
        top="-5"
        right="-5"
      >
        <Flex align="center" justify="center" direction="column">
          <Text fontSize={8} color="white">
            Aberto
          </Text>
          <Text fontSize={8} color="white">
            agora
          </Text>
        </Flex>
      </Circle>
      <Flex w="100%" align="center" justify="between" textAlign="center">
        <Image
          src={data.image}
          boxSize="100px"
          objectFit="cover"
          borderRadius={8}
        />
        <Flex direction="column" ms="2rem" gap={2} textAlign="left">
          <Text fontSize={16}>{data.name}</Text>
          <Text fontSize={12}>{data.address}</Text>
        </Flex>
      </Flex>
    </Button>
  );
};
