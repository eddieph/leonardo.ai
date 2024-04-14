'use client'
import { Suspense, useState } from 'react';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Card, Center, Container, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import withAuth from "../_lib/withAuth";
import { AniListData, GET_ANI_LIST, Media } from '../_ graphql/queries/anilist';
import { getImageAlt, isInteger } from '../_lib/util';
import Pagination from './pagination';
import Skeleton from './skeleton';
import MediaGrid from './modal';
import { IMAGE_PLACEHOLDER, QUERY_PER_PAGE } from '../constants';

function List() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedItem, setSelectedItem] = useState<Media>(null!);
  const searchParams = useSearchParams();
  const currentPage = isInteger(searchParams.get('page')) ? Number(searchParams.get('page')) : 1
  const variables = {
    search: "naruto",
    page: currentPage,
    perPage: QUERY_PER_PAGE
  };

  const { data } = useSuspenseQuery<AniListData>(GET_ANI_LIST, {
    variables
  });

  const { pageInfo, media } = data.Page

  const handleCardClick = (item: Media) => {
    setSelectedItem(item);
    onOpen();
  };

  return <Container maxW='7xl'>
    <Pagination currentPage={pageInfo.currentPage} hasNextPage={pageInfo.hasNextPage} lastPage={pageInfo.lastPage} />
    <SimpleGrid minChildWidth='120px' spacing='40px'>
      {media.map((item) => (
        <Card key={item.id} p={4} shadow="md" borderRadius="lg" onClick={() => handleCardClick(item)} cursor="pointer">
          <Center>
            <Image src={item.coverImage.medium} alt={getImageAlt(item.title)} width={110} height={160} loading='lazy' placeholder={IMAGE_PLACEHOLDER}/>
          </Center>
        </Card>
      ))}
    </SimpleGrid>
    <Pagination currentPage={pageInfo.currentPage} hasNextPage={pageInfo.hasNextPage} lastPage={pageInfo.lastPage} />
    {selectedItem && <MediaGrid selectedItem={selectedItem} isOpen={isOpen} onClose={onClose} />}
  </Container>
}

const Page = () => {
  return <Suspense fallback={<Skeleton />}>
    <List />
  </Suspense>
};

export default withAuth(Page);