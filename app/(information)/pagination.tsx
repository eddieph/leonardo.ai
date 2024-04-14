'use client';

import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({
  currentPage,
  hasNextPage,
  lastPage
}: {
  currentPage: number;
  hasNextPage: boolean;
  lastPage: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Generate some page numbers - current, one before, one after
  let pagesToShow = [currentPage];
  if (currentPage > 1) pagesToShow.unshift(currentPage - 1);
  if (currentPage < lastPage) pagesToShow.push(currentPage + 1);

  return (
    <Flex align="center" justify="center" gap="4" py="8">
      {/* Previous Page Link */}
      <Link href={createPageURL(Math.max(1, currentPage - 1))} passHref>
        <Button isDisabled={currentPage === 1} aria-label="Previous Page">
          &lt; Previous
        </Button>
      </Link>

      {/* Page Numbers */}
      {pagesToShow.map((page) => (
        <Link href={createPageURL(page)} key={page} passHref>
          <Button isActive={page === currentPage}>
            {page}
          </Button>
        </Link>
      ))}

      {/* Next Page Link */}
      <Link href={createPageURL(currentPage + 1)} passHref>
        <Button isDisabled={!hasNextPage} aria-label="Next Page">
          Next &gt;
        </Button>
      </Link>
    </Flex>
  );
}
