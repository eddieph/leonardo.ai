import {
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image'
import { Media } from '../_ graphql/queries/anilist';
import { IMAGE_PLACEHOLDER_LARGE } from '../constants';
import { getImageAlt } from '../_lib/util';

export default function MediaGrid({ selectedItem, isOpen, onClose }: { selectedItem: Media, isOpen: boolean, onClose: () => void }) {
  return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{selectedItem.title.english}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Center>
          <Image src={selectedItem.coverImage.large} alt={getImageAlt(selectedItem.title)} loading='lazy' placeholder={IMAGE_PLACEHOLDER_LARGE} width={230} height={350}/>
        </Center>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}
