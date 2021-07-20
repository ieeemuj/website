import React from "react";
import { SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import ReasonCard from "../ReasonCard";

const TextSection = () => (

<SimpleGrid columns={['1','1','1','2','2']} spacing="2" justifyItems="center" alignItems="center">
    <ReasonCard/>
    <ReasonCard/>
    <ReasonCard/>
    <ReasonCard/>
</SimpleGrid>
);
export default TextSection;
