import React from 'react';
import { Image, Box, Icon } from "@chakra-ui/react";
import ResponsiveContainer from '../../../components/Layout/ResponsiveContainer';
import { Heading, Text, Button, Stack, HStack, VStack } from "@chakra-ui/react";
import { CalendarIcon, BellIcon } from '@chakra-ui/icons';
import { BiLaptop } from 'react-icons/bi';

const Event = () => (
    <ResponsiveContainer>
        <Box  marginTop="100px" rounded="md">
            <Stack direction={["column", "row"]} spacing="10">

                <VStack position="relative" overflow="hidden" spacing="2" align="left"paddingTop="5px" paddingLeft="40px">
                    <Box>
                        <Heading marginBottom="20px" paddingBottom="5px" as="h2" size="lg">
                            Worshop on Computer Vision
                        </Heading>
                    </Box>

                    <Text fontSize="md" fontWeight="bold" color="gray.500"><CalendarIcon marginRight="10px" />July, 20</Text>
                    <Text fontSize="md" fontWeight="bold" color="gray.500"><BellIcon marginRight="10px" />11:00-12:00</Text>
                    <Text fontSize="md" fontWeight="bold" color="gray.500"><Icon as={BiLaptop} marginRight="10px" />Microsoft Teams</Text>
                    <br/>
                    <Button colorScheme="blackAlpha" isDisabled= "true">REGISTER</Button>
                </VStack>
                    
                <Box size="xl" width="auto">
                    <Image
                        src="/imgs/image 1.png"
                        marginTop="12px"
                        borderRadius="10px"
                    />
                </Box>

            </Stack>
        </Box>

        <br />
        <Heading marginTop="50px" as="h2" size="lg" isTruncated>
            Lorem ipsum
        </Heading>
        <br />
        <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque natus illo, amet debitis recusandae quae alias, minima fugit ut laboriosam aspernatur facilis adipisci possimus voluptatum eius praesentium pariatur. Porro molestias, blanditiis dolorem laboriosam ipsa perferendis quis cumque sunt placeat quasi consequatur dignissimos unde quisquam commodi. In veniam facilis facere id vel reprehenderit ex, consequuntur doloremque consequatur iste iusto neque, doloribus assumenda, possimus quia officia laudantium atque nam? Hic ab est blanditiis laudantium omnis laboriosam odit ad autem, repudiandae mollitia eveniet, voluptates esse fugiat error, excepturi commodi? Eum nihil consequuntur sequi aliquid ad ratione? Non nobis sed porro sit neque illo sapiente ipsam rem sint minus aperiam architecto unde quaerat modi dignissimos..</Text>
        <br />

    </ResponsiveContainer>
);

export default Event;