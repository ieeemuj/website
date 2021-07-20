import React,{useState} from "react"
import {
    Tag,
    TagLabel,
    TagCloseButton,
    useBoolean,
    Divider,
    Box,
    Text,
    Heading
  } from "@chakra-ui/react"
  import Styles from "../../../styles/TagsFilter.module.css"

  import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
const TagsFilter=()=>{
    const[tags,setTag]=useState([])
    const [flag, setFlag] = useBoolean()

    //add tags

    const addTag=(e)=>{
        console.log(e.target)
        if(e.target.value!==""){
            setTag([...tags,e.target.value]);
            e.target.style.display='none'
           
        }
    }

    //remove tags
    const removeTag=index=>{
        let option=tags[index]
        setTag([...tags.filter((tag)=>tags.indexOf(tag)!==index)])
        if(option!==null)
        document.getElementById(option).style.display="block"       
    }

    //Mock Events data
    const MockEvent=[
        {
            title:"IEEE SB",
            events:["opt1","opt2"]
        },
        {
            title:"IEEE CS",
            events:["opt3"]
        },
        {
            title:"IEEE WIE",
            events:["opt4","opt5","opt6"]
        }
    ]

    
    
    return(
       <Box bg="white" p={2.5} borderRadius={10} minW="22vw" boxShadow="md" position="absolute" zIndex="dropdown">
        <Box className="tags-input" display="flex" bg="white" flexWrap="wrap"
        alignItems="center">
           <Box>
                {tags.map((tag, index) => (
                    <Tag 
                    size="lg"
                    key={index}
                    borderRadius="full"
                    variant="solid"
                    bg="#0087ca"
                    m={1}>
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={()=>removeTag(index)}/>
                    </Tag>
                ))}
                </Box>
                <Text onClick={setFlag.toggle} color="gray.500" cursor="pointer"
                 alignItems="center">Add Filters</Text>

                {
                    flag?<BiCaretUp style={{marginLeft:"auto" , color:"gray"}}/>:<BiCaretDown style={{marginLeft:"auto", color:"gray"}}/>
                }
                </Box>
            {
                flag?(
                    <Box bg="white" cursor="pointer" id="BoxSelect">

                    {
                        MockEvent.map(Evt=>(
                            <>
                            <Heading as="h5" size="sm" textDecoration="underline" color="#1A202C" textDecorationColor="inherit">{Evt.title}</Heading>
                            {
                                Evt.events.map(opt=>(
                                    <option id={opt} className={Styles.Option} onClick={(event)=>addTag(event)} value={opt}>
                                     {opt}
                                     </option>
                                ))
                            }
                            <Divider/>
                            </>
                        ))
                    }
                    </Box>
                ):""
            }
            
            </Box>
        
    );
}
export default TagsFilter