import React from "react";
import { Box, Button, Flex, Text, Wrap } from "@chakra-ui/react";
import PromptCard from "./promptCard";
import { BsArrowRight } from "react-icons/bs";

const LandingDesc = () => {
  const options = [
    {
      color: "FFD503",
      desc: "A perfect comeback for every A##h%e out there",
      emoji: "🤬",
      type: "COMEBACKS",
    },
    {
      color: "F78166",
      desc: "Nothing helps better in life than a terrible advice",
      emoji: "🫤",
      type: "TERRIBLE ADVICE",
    },
    {
      color: "F480E5",
      desc: 'Stop being a boomer and finally "GET" a joke!',
      emoji: "🧐",
      type: "EXPLAIN A JOKE",
    },
    {
      color: "8AEC80",
      desc: "You suck at a lot of things, ever wondered why?",
      emoji: "🥶",
      type: "WHY DO YOU SUCK AT...?",
    },
    {
      color: "C4D4F8",
      desc: "A perfect way to stop a BOOOOORING chat!",
      emoji: "😶‍🌫️",
      type: "HOW TO END A CONVERSATION",
    },
    {
      color: "E3EC80",
      desc: "HOW TO ASK SOMEONE TO F#@K OFF, POLITELY? IS IT EVEN POSSIBLE?!",
      emoji: "😤",
      type: "INSULT IN A COMPLIMENT",
    },
  ];
  return (
    <Box mx="10%" mt="9%" display="flex" flexDirection="column">
      <Text fontFamily="highman" fontSize="5.25rem" color="#308CF8">
        what all you can do?
      </Text>
      <Wrap spacing="3rem" pb="3rem">
        {options.map((option) => (
          <PromptCard
            key={option.desc.length}
            color={`#${option.color}`}
            desc={option.desc}
            emoji={option.emoji}
            type={option.type}
          />
        ))}
      </Wrap>
      <Button
        alignSelf="end"
        mr="2.5rem"
        backgroundColor="#308CF8"
        borderRadius="4px"
        px="3.125rem"
        py="1.5rem"
        border="2px"
        borderColor="black"
        boxShadow="4px 5px #000"
      >
        <Flex alignItems="center">
          <Text fontFamily="highman" fontSize="2rem" color="white" mr="4px">
            Try it now
          </Text>
          <BsArrowRight size="1.5rem" color="white" />
        </Flex>
      </Button>
    </Box>
  );
};

export default LandingDesc;
