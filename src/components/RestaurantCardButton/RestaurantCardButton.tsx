import { Button, Circle, Flex, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { Restaurant } from "../../interfaces/interface.restaurant";

interface RestaurantProps {
  data: Restaurant;
}

export const RestaurantCardButton = ({ data }: RestaurantProps) => {
  const [days, setDays] = useState([]);
  const [today, setToday] = useState(0);
  const momentToday = moment().format("dddd").toString().toLowerCase();

  switch (momentToday) {
    case "sunday":
      return setToday(1);
      break;
    case "monday":
      return setToday(2);
      break;
    case "tuesday":
      return setToday(3);
      break;
    case "wednesday":
      return setToday(4);
      break;
    case "thursday":
      return setToday(5);
      break;
    case "friday":
      return setToday(6);
      break;
    case "saturday":
      return setToday(7);
      break;
    default:
      setToday(0);
  }
  console.log(today);

  function verifyData() {
    const dataDays = data.hours.map((day: any) => {
      return day.days;
    });
    dataDays.map((arr) => {
      const arrDays = arr.values();

      for (let day of arrDays) {
        setDays(day);
      }
    });

    /*     if(today === days.toString()) {
      console.log('é hoje')
    }else {
      console.log('não é hoje')
    } */
  }

  useEffect(() => {
    verifyData();
  }, []);

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
