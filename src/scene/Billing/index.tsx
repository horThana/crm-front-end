import {
    Text,
    Grid,
    SimpleGrid 
  } from '@mantine/core';
import { Sidebar } from "@/global/Sidebar"





const Billing = () => {
    return  (
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 5 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <div><Sidebar/></div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </SimpleGrid>
      );
}

export default Billing