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
} from '@mantine/core';
import classes from '@/styles/Login.module.css';
import { create } from 'zustand';


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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('http://127.0.0.1:8000/user', {
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
      // Handle successful login, e.g., redirect or store token
    } catch (error) {
      console.error('There was a problem with the login request:', error);
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
            onChange={(e) => createEmail(e.currentTarget.value)} // Bind input to Zustand store
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={Password}
            onChange={(e) => createPassword(e.currentTarget.value)} // Bind input to Zustand store
            required
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default Login;
