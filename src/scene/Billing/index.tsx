import React, { useEffect, useState } from 'react';
import { Table,Container,Grid,Flex } from '@mantine/core';
import axios from 'axios';
import { Sidebar } from '@/global/Sidebar';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function Billing() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/user');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const rows = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <Flex>
      <Sidebar />
      
        <Grid justify='center'>
          <Grid.Col span={12}>
            <Flex justify="center" align="center" direction="column">
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>ID</Table.Th>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Username</Table.Th>
                    <Table.Th>Email</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
            </Flex>
          </Grid.Col>
        </Grid>

    </Flex>
  );
   
  
}

export default Billing;