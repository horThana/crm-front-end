import { Grid, Skeleton, Container,SimpleGrid, Flex,rem } from '@mantine/core';
import { Sidebar } from "@/global/Sidebar"




const PRIMARY_COL_HEIGHT = rem(200);
const Package = () => {
   

    return (
    <Flex>
        <Sidebar />
        <Container my="xl" style={{ width: '100%', height: '100%', }}>
            <SimpleGrid>
                <Grid>
                    <Grid.Col>
                        <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur iste exercitationem quam odio vitae quidem magni veritatis illo aliquid iure, tempore explicabo corrupti optio eligendi sequi deleniti in voluptates quod.</h1>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>
    </Flex>
      
       
    )
}

export default Package