'use client'
import React from 'react';
import Link from 'next/link'
import { Flex, Heading, Text } from '@chakra-ui/react';
import { useUserInfo } from '../_hooks/useUserInfo';

export default function Header() {
  const { user } = useUserInfo();
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      bg="teal.500"
      color="white"
      px={4}
      py={2}
    >
      <Heading size="md">My App</Heading>
      <Link href="/userinfo" passHref>
      <Text>{user ? `${user.username} (${user.jobTitle})`: ``} </Text>
      </Link>
    </Flex>
  );
}