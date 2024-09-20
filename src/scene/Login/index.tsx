import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Alert,

 
} from '@mantine/core';
import classes from '@/styles/Login.module.css';
import { create } from 'zustand';
import { IconInfoCircle } from '@tabler/icons-react';
import { useState } from 'react';


type State = {
  Email: string;
  Password: string;
};

type Action = {
  createEmail: (Email: State['Email']) => void;
  createPassword: (Password: State['Password']) => void;
};

const useStore = create<State & Action>((set) => ({
  Email: '',
  Password: '',
  createEmail: (Email) => set(() => ({ Email })),
  createPassword: (Password) => set(() => ({ Password })),
}));


const Login = () => {
  const Email = useStore((state) => state.Email);
  const Password = useStore((state) => state.Password);
  const createEmail = useStore((state) => state.createEmail);
  const createPassword = useStore((state) => state.createPassword);

  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    setLoading(true);

    if (!isEmailValid(Email)) {
      console.error('Invalid email');
      const icon = <IconInfoCircle />;
      return (
        <Alert variant="light" color="red" title="Alert title" icon={icon}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
        </Alert>
      );
     
    }

    if (Password.length < 6 || Password.length > 20) {
      console.error('Password must be between 6 and 20 characters');
      return;
    }


    const allowedId = Email; // Replace with the specific ID you want to allow
    try {
      const response = await fetch(`http://127.0.0.1:8000/user/${allowedId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email, Password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }

      const data = await response.json();
      
      console.log('Login successful', data);
      return(
        <Alert variant="light" color="red" title="Alert title">
        Login successful
        </Alert>
      )
      
      // Handle successful login, e.g., redirect or store token
    } catch (error) {
      return(
        <Alert variant="light" color="red" title="Alert title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
        </Alert>
      );
    
    }finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="a" href="/signup">
          Create account
        </Anchor>
      </Text>
      <form noValidate onSubmit={handleSubmit}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            value={Email}
            onChange={(e) => createEmail(e.currentTarget.value)} 
            maxLength={40}// Bind input to Zustand store
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={Password}
            onChange={(e) => createPassword(e.currentTarget.value)} // Bind input to Zustand store
            required
            maxLength={20}
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl" loading={loading}>
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default Login;
