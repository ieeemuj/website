import { Box, Heading, Text, Image, Link, Button} from "@chakra-ui/react";
import {FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa';

const SocietiesContent = ({titleQues, alignImg, alignText, twitterUrl, instaUrl, linkedInUrl, imgSrc, altText, imgMarginTop, imgMarginRight}) => (
    <Box>
        <Box
            width= "md" 
            float = {alignText}
            // marginTop = "9"
            marginX="4"
        >
        <Heading
            size= "md"
            marginBottom ="2"
        >
            {titleQues}?
        </Heading>
        <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Velit nisi eligendi doloremque facere aspernatur deleniti, totam odio. 
            Asperiores praesentium quisquam nobis aut, odio cupiditate nulla fugit porro eligendi ipsum earum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio iure ducimus quod perferendis quo. Officia deleniti sunt at deserunt,
            odit quas eaque exercitationem, nemo facere repellat quidem et quo adipisci.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            
        </Text>
        <Box 
            float ={alignText}
            marginTop ="3em"
        >
            <Link href= {twitterUrl}>
                <Button colorScheme="twitter" size="lg"><FaTwitter /> </Button>
            </Link>
            <Link href = {instaUrl}>
                <Button marginX="4" colorScheme="pink" size="lg"><FaInstagram /></Button>           
            </Link>
            <Link href = {linkedInUrl}>
                <Button colorScheme="linkedin" size="lg"><FaLinkedinIn /></Button>
            </Link>
        </Box>
        </Box>
        <Box float={alignImg}>
            <Image
                marginTop={imgMarginTop}
                marginRight ={imgMarginRight}
                borderRadius = "md"
                src={imgSrc}
                alt= {`${altText} logo`}
            />
        </Box>
    </Box>
)

export default SocietiesContent;