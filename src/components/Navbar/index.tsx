import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { LuCat, LuSearch } from "react-icons/lu";

interface INavbarProps {
    val: string;
    handleChange: (e : React.ChangeEvent<HTMLInputElement>) => void
}

const Navbar : React.FC<INavbarProps> = ({val,handleChange}) => {
    return (
        <Flex flexDirection={['column', 'column', "row"]} justifyContent={'space-between'} alignItems={'center'} py={'4'} gap={'2'} shadow={'md'} px={5}>
            <Flex backgroundColor={'orange.400'} px='3' py={'2'} rounded={'full'} >
                <Text fontSize={['xl', '3xl']} color={'white'}>
                    <LuCat />
                </Text>
                <Text fontSize={['sm', 'xl']} fontWeight={'bold'} color={'white'}>
                    BVK Cat App
                </Text>
            </Flex>
            <InputGroup w={['full', 'xl']}>
                <InputLeftElement pointerEvents='none'>
                    <LuSearch color='gray' />
                </InputLeftElement>
                <Input type='text' placeholder='Search' value={val} onChange={handleChange} />
            </InputGroup>
            <Box w={'20'} display={['none', "block"]} />
        </Flex>
    )
}

export default Navbar