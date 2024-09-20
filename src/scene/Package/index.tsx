import { Grid, Container,SimpleGrid, Flex,rem, Image } from '@mantine/core';
import { Sidebar } from "@/global/Sidebar"



const PRIMARY_COL_HEIGHT = rem(200);
const Package = () => {
   

    return (
    <Flex>
        <Sidebar />
        <Container my="xl" style={{ width: '100%', height: '100%', }}>
            <SimpleGrid>
                <Grid>
                    <Grid.Col mt="xl">
                        <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        🎉 Big Promotion Alert! 🎉<br/>

                            🚀 Upgrade Your Experience with Our Subscription Plans! 🚀<br/>

                            ✨ Free Plan – Get started at $0!
                            Enjoy basic features, perfect for beginners or casual users.<br/>

                            ✨ Pro Plan – Unlock advanced features for only $10/month!
                            Ideal for growing teams, with more storage, projects, and priority support.<br/>

                            ✨ Premium Plan – Go all out for just $15/month!
                            Get unlimited projects, 24/7 support, and advanced analytics for your business.<br/>

                            💥 Limited Time Offer – Sign up today and get a 10% discount on Pro and Premium plans! 💥<br/>

                            👉 Don't miss out! Upgrade now and take your business to the next level! 👈
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                        src="https://i.pinimg.com/564x/27/25/17/2725175b126e8979e3e18079e09b956d.jpg"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />  
                    </div>
  
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                        src="https://i.pinimg.com/564x/12/9c/27/129c27a04fd2cf33ffe7f25ecf8672c3.jpg"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />  
                    </div>
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>
    </Flex>
      
       
    )
}

export default Package