'use client'
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Avatar,
  FormControl,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/app/_hooks/useUserInfo';

const UserInfo = () => {
  const router = useRouter();
  const { user, setUser} = useUserInfo();
  const [username, setUsername] = useState(user?.username ?? '');
  const [jobTitle, setJobTitle] = useState(user?.jobTitle ?? '');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ username, jobTitle });
    router.push('/')
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">User infomation</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Job title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UserInfo;