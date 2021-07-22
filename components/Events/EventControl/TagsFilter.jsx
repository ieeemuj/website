import React, { useState } from 'react';
import {
  Tag,
  TagLabel,
  TagCloseButton,
  useBoolean,
  Divider,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import Styles from '../../../styles/TagsFilter.module.css';
import MockEvent from '../../../constants/TagFilterMockData';

const TagsFilter = () => {
  const [tags, setTag] = useState([]);
  const [flag, setFlag] = useBoolean();

  // add tags

  const addTag = (e) => {
    // console.log(e.target)
    if (e.target.value !== '') {
      setTag([...tags, e.target.value]);
      e.target.style.display = 'none';
    }
  };

  // remove tags
  const removeTag = (index) => {
    const option = tags[index];
    setTag([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    if (option !== null) document.getElementById(option).style.display = 'block';
  };

  return (
    <Box bg="white" p={2.5} borderRadius={10} minW="22vw" boxShadow="md" position="absolute" zIndex="dropdown">
      <Box
        className="tags-input"
        display="flex"
        bg="white"
        flexWrap="wrap"
        alignItems="center"
      >
        <Box>
          {tags.map((tag, index) => (
            <Tag
              size="lg"
              key={tag}
              borderRadius="full"
              variant="solid"
              bg="#0087ca"
              m={1}
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => removeTag(index)} />
            </Tag>
          ))}
        </Box>
        <Text
          onClick={setFlag.toggle}
          color="gray.500"
          cursor="pointer"
          alignItems="center"
        >
          Add Filters
        </Text>

        {flag
          ? <BiCaretUp style={{ marginLeft: 'auto', color: 'gray' }} />
          : <BiCaretDown style={{ marginLeft: 'auto', color: 'gray' }} />}
      </Box>

      <Box
        bg="white"
        cursor="pointer"
        id="BoxSelect"
        display={flag ? 'block' : 'none'}
      >

        {MockEvent.map((Evt) => (
          <>
            <Heading as="h5" size="sm" textDecoration="underline" color="#1A202C" textDecorationColor="inherit">{Evt.title}</Heading>
            {Evt.events.map((opt) => (
              <option
                id={opt.name}
                className={Styles.Option}
                onClick={(event) => addTag(event)}
                value={opt.name}
                style={opt.dis ? { display: 'block' } : { display: 'none' }}
              >
                {opt.name}
              </option>
            ))}
            <Divider />
          </>
        ))}
      </Box>
    </Box>

  );
};
export default TagsFilter;
