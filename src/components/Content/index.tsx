import { Box, Container, Grid, GridItem, Spinner } from '@chakra-ui/react'
import React, { useState, useEffect, useMemo } from 'react'
import { getAllCats } from '../../api/call'
import Card from '../Card'
import { useInView } from 'react-intersection-observer'


interface IContentProps {
    search:string;
}

const Content: React.FC<IContentProps> = ({search}) => {
    const PAGE_LIMIT = 10
    const [cats, setCats] = useState([])
    const [limit, setLimit] = useState<number>(PAGE_LIMIT)
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false)
    const { ref, inView, entry } = useInView({threshold:1})

    useEffect(() => {
        const getCats = async () => {
            try {
                const data = await getAllCats()
                setCats(data)
                setFilteredData(data)
            } catch (error) {
                console.log(error);
            }
        }

        getCats()
        console.log(cats);

    }, [])


    const displaydata = useMemo(() => filteredData.slice(0, limit), [limit, filteredData])


    useEffect(() => {
        const handleLoadMore = () => {
            setLoading(true)
            
            setTimeout(() => {
                setLimit(prev => prev + PAGE_LIMIT)
                setLoading(false)
            }, 2000);
        }

        if (inView) {
            if (displaydata.length === cats.length || displaydata.length === filteredData.length) {
                return
            }

            handleLoadMore()
        }
    }, [inView])
    

    useEffect(() => {
        const filtered = cats.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );
          setFilteredData(filtered);
          setLimit(PAGE_LIMIT)
    }, [search])
    
    
    
    
    return (
        <Container maxW='container.xl' pb={'10'} minH={'100vh'}>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} pt={'5'}>
                {
                    displaydata.map((cat: any, i: number) => (
                        <GridItem w='100%' key={i}>
                            <Card cat={cat} />
                        </GridItem>
                    ))
                }
            </Grid>
            <Box ref={ref}  />
            {loading && 
            (<Box display={'flex'} justifyContent={'center'} mt={'5'}>
                <Spinner size={'xl'} color='orange.500' />
            </Box>)}
        </Container>
    )
}

export default Content