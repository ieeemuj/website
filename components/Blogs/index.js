import React from "react"
import{
    Image,
    Heading,
    Text,
    Flex,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    
}
from "@chakra-ui/react"

import { DateTime ,toRelative} from "luxon"
const BlogComponent=({props})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
     <>
        <Flex wrap="wrap" m={3} onClick={onOpen} ref={btnRef} cursor="pointer" _hover={{
          boxShadow:"5px 5px 30px 1px"
        }}
        rounded="xl" p={5}>
             <Image src={props.img} alt="Blog image" w="320px" rounded="2xl" objectFit="cover"/>
            <Flex p={4} flexDir="column" flex="1">
             <Heading as="h2" size="md" fontFamily="poppins">{props.title}</Heading>
             <Text variant="body2" color="GrayText" fontFamily="poppins">By {props.author}</Text>
             <Text fontSize="md" noOfLines={[4,5,6]} fontFamily="poppins">
                   {props.content}
                </Text>
             </Flex>                  
        </Flex>


        <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="poppins">{props.title}
          <Text  variant="body3" color="GrayText" fontWeight="200" fontSize="sm" fontFamily="poppins">By {props.author}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image src={props.img} alt="Blog image"/>
          <br/>
          <Text variant="body1" fontFamily="poppins">{props.content}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</>
 
    )
}

export default BlogComponent
