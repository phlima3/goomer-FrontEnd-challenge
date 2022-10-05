//@ts-nocheck
import { Button, Circle, Flex, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { Hour, Restaurant } from "../../interfaces/interface.restaurant";

interface RestaurantProps {
  data: Restaurant;
  hours: number[];
}

export const RestaurantCardButton = ({ data, hours }: RestaurantProps) => {
  const [today, setToday] = useState(0);
  const [valid, setValid] = useState([]);
  const momentToday = moment().format("dddd").toString().toLowerCase();

  useEffect(() => {
    switch (momentToday) {
      case "sunday":
        setToday(1);
        break;
      case "monday":
        setToday(2);
        break;
      case "tuesday":
        setToday(3);
        break;
      case "wednesday":
        setToday(4);
        break;
      case "thursday":
        setToday(5);
        break;
      case "friday":
        setToday(6);
        break;
      case "saturday":
        setToday(7);
        break;
      default:
        setToday(0);
    }
    const openHours = hours.flatMap((hour) => hour);
    setValid(openHours);
  }, []);

  const verifyValid = () => {
    if (valid.includes(today)) {
      return true;
    } else false;
  };

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
        bg={
          verifyValid()
            ? "background.tertiary.500"
            : "background.quaternary.500"
        }
        size="48px"
        position="absolute"
        top="-5"
        right="-5"
      >
        <Flex align="center" justify="center" direction="column">
          {verifyValid() ? (
            <>
              <Text fontSize={8} color="white">
                Aberto
              </Text>
              <Text fontSize={8} color="white">
                agora
              </Text>
            </>
          ) : (
            <Text fontSize={8} color="white">
              Fechado
            </Text>
          )}
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
