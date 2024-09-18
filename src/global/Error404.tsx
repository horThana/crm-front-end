
import { Image ,Container, Title, Text, Button, SimpleGrid } from '@mantine/core';

import classes from '../styles/Error_404.module.css';



const Error_404 = () => {


  return  (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src="./"className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control}>
            Get back to home page
          </Button>
        </div>
        <Image src="https://www.makewebeasy.com/th/blog/wp-content/uploads/2019/12/cover.png" className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}

export default Error_404;