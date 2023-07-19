import {
  Card as ChakraCard,
  CardBody,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react'


interface ICardProps {
  cat: any
}

const Card: React.FC<ICardProps> = ({ cat }) => {

  return (
    <ChakraCard shadow={'md'} border={'1px'} borderColor={'gray.200'}>
      <CardBody>
        <Image
          src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
          w={'full'}
          h={'sm'}
          objectFit={'contain'}
          alt={cat.name}
        />
        <Accordion allowToggle mt={5}>
          <AccordionItem border={'none'}>
            <AccordionButton>
              <Text fontWeight={'bold'} fontSize={'xl'} as="span" flex='1' textAlign='left'>
                {cat.name}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text mb={2} fontWeight={'bold'} color={'GrayText'}>Origin : {cat.origin}</Text>
              <Text>
                {cat.description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </ChakraCard>
  )
}

export default Card