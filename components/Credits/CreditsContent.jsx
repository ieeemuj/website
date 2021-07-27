
import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react"
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const CreditsContent = ({name, title, linkedIn, insta, facebook}) => {
    return(
        <Box display="inline-block" marginLeft={["4.5em", "8em", "5.4em","6.5em","8em"]} marginY="2em">
            <Box marginLeft = "4">
                <Avatar 
                    marginBottom= "4"
                    marginLeft = "5"
                    size="xl" 
                    src= "https://bit.ly/code-beast"
                />
                <Heading as="h4" size="md">
                    {name}
                </Heading>
            </Box>
            <Text fontSize="lg" color = "#8a9494" fontWeight="medium">{title}</Text>
            <Box marginLeft = "6">
                <IconButton variant="ghost" aria-label= {`Linkedin link of ${name}`} icon= {<FaLinkedinIn />} colorScheme="linkedin" />
                <IconButton variant="ghost" aria-label= {`Instagram link of ${name}`} icon= {<FaInstagram />}   colorScheme="pink"/>
                <IconButton variant="ghost" aria-label= {`Linkedin link of ${name}`} icon= {<FaFacebookF />} colorScheme="facebook"/>
            </Box>
        </Box >
    )
}

export default CreditsContent;