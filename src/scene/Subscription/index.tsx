import { Flex, SimpleGrid, Container,Checkbox, Skeleton, Title, Text, Card, Group, Badge, Button,Center } from "@mantine/core";
import { Sidebar } from "@/global/Sidebar"




const PRIMARY_COL_HEIGHT = 600;

const Subscription = () => {
    return (
      <Flex>
        <Sidebar />
        <Container my="xl" fluid  bg="var(--mantine-color-blue-light)">
          <Container>
            <Text>
            🎉 Big Promotion Alert! 🎉 
            </Text>
          </Container>
          
            <SimpleGrid cols={3} spacing="lg" >
            <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={500} mt={100} pt={60}>
                    <Title order={2} style={{ textAlign: 'center' }}>
                     Free
                    </Title>
                    <Center> 
                        <Text style={{ textAlign: 'center' }} size="xl" w={500} mt="sm">
                        $0 / month
                        </Text>
                    </Center>
                  
                    <Center  mt="md" mb="xs">
                        <Badge color="green">Basic Features</Badge>
                    </Center>

                      <Text size="sm" color="dimmed" style={{ textAlign: 'center' }}>
                      Access to limited features. Suitable for beginners.
                      </Text>

                    <Center mt="md" pt="md" p={20}>
                      <ul>

                        <li>Basic Support</li>
                        <li>5 Projects</li>
                        <li>1 GB Storage</li>
                      </ul>
                    </Center>
                    

                    <Button fullWidth mt="50">
                      Upgrade to Pro
                    </Button>
              </Card>
             </div>
             <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={500} mt={100} pt={60}>
                    <Title order={2} style={{ textAlign: 'center' }}>
                      Pro
                    </Title>
                    <Center> 
                        <Text style={{ textAlign: 'center' }} size="xl" w={500} mt="sm">
                        $10 / month
                        </Text>
                    </Center>
                  
                    <Center  mt="md" mb="xs">
                        <Badge color="blue">Advanced Features</Badge>
                    </Center>

                      <Text size="sm" color="dimmed" style={{ textAlign: 'center' }}>
                        Perfect for growing teams with advanced needs.
                      </Text>

                    <Center mt="md" pt="md" p={20}>
                      <ul>

                        <li>Priority Support</li>
                        <li>50 Projects</li>
                        <li>10 GB Storage</li>
                      </ul>
                    </Center>
                    

                    <Button fullWidth mt="50" variant="filled">
                      Upgrade to Pro
                    </Button>
              </Card>
             </div>


          <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={500} mt={100} pt={60}>
                    <Title order={2} style={{ textAlign: 'center' }}>
                      Premium
                    </Title>
                    <Center> 
                        <Text style={{ textAlign: 'center' }} size="xl" w={500} mt="sm">
                        $15 / month
                        </Text>
                    </Center>
                  
                    <Center  mt="md" mb="xs">
                        <Badge color="blue">All Features</Badge>
                    </Center>

                      <Text size="sm" color="dimmed" style={{ textAlign: 'center' }}>
                      Best for large teams or organizations.
                      </Text>

                    <Center mt="md" pt="md" p={30} >
                      <ul>
                        <li>Unlimited Projects</li>
                        <li>50 GB Storage</li>
                        <li>Advanced Analytics</li>
                      </ul>
                    </Center>
                    

                    <Button fullWidth mt="50" variant="filled">
                    Upgrade to Premium
                    </Button>
              </Card>
             </div>
            </SimpleGrid>
        </Container>
    </Flex>
   
    )
}

export default Subscription