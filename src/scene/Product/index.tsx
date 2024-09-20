import React, { useState, useEffect } from 'react';
import { Table, Container, Loader, Text,Card ,Image,Group, Flex, SimpleGrid} from '@mantine/core';
import axios from 'axios';
import { Sidebar } from '@/global/Sidebar';

// Example product type based on your API data
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

const PRIMARY_COL_HEIGHT = 300;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to hold the product list
  const [loading, setLoading] = useState<boolean>(true);    // State for loading indicator
  const [error, setError] = useState<string | null>(null);  // State to hold errors, if any

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      
      try {
        const response = await axios.get('http://127.0.0.1:8000/product');
        setProducts(response.data);
      } catch (error) {
        setError('An error occurred. Please try again later.');
      }
      setLoading(false);

    };

    fetchProducts();
  }, []); // Empty array ensures it only runs once, when the component mounts

  if (loading) return <Loader size="xl" />; // Show loader while data is being fetched

  if (error) return <Text color="red">{error}</Text>; // Display error if fetch failed

  return (
    <Flex> 
      <Sidebar/>
      <Container my="xl" fluid  bg="var(--mantine-color-blue-light)">
      <SimpleGrid cols={3} spacing="lg">
  {products.map((product) => (
      <div style={{ height: PRIMARY_COL_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <Card key={product.id} shadow="sm" padding="lg" style={{ marginBottom: '20px' }}>
          <Card.Section>
            <Image src={product.imageUrl} alt={product.name} height={160} />
          </Card.Section>
          <Group align="apart" style={{ marginBottom: 5, marginTop: 10 }}>
            <Text fw={500}>{product.name}</Text>
            <Text>${product.price.toFixed(2)}</Text>
          </Group>
        </Card>
        </div>
      ))}
      </SimpleGrid>
    </Container>
    </Flex>
   
  );
};

export default Products;
