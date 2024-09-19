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
import axios from 'axios';

type State = {
  Name: string;
  Username: string;
  Email: string;
  Password: string;
};

type Action = {
  createName: (Name: State['Name']) => void;
  createUsername: (Username: State['Username']) => void;
  createEmail: (Email: State['Email']) => void;
  createPassword: (Password: State['Password']) => void;
};

const useStore = create<State & Action>((set) => ({
  Name: '',
  Username: '',
  Email: '',
  Password: '',
  createName: (Name) => set(() => ({ Name })),
  createUsername: (Username) => set(() => ({ Username })),
  createEmail: (Email) => set(() => ({ Email })),
  createPassword: (Password) => set(() => ({ Password })),
}));

const Signup = () => {
  const Name = useStore((state) => state.Name);
  const Username = useStore((state) => state.Username);
  const Email = useStore((state) => state.Email);
  const Password = useStore((state) => state.Password);

  const createName = useStore((state) => state.createName);
  const createUsername = useStore((state) => state.createUsername);
  const createEmail = useStore((state) => state.createEmail);
  const createPassword = useStore((state) => state.createPassword);

  const handleSignup = () => {
    return {
      Name,
      Username,
      Email,
      Password,
    };
  };

  const handleSubmit_signup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = handleSignup();
    try {
      const response = await axios.post('http://127.0.0.1:8000/user', userData);
      if (response.status === 201) {
        console.log(response.data);
        alert('User Created Successfully');
      }
    } catch (error) {
      console.log(error);
 
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome Signup!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="a" href="/login">
          Sign In
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Name"
          placeholder="Your name"
          onChange={(e) => createName(e.currentTarget.value)}
          value={Name}
          required
        />

        <TextInput
          label="Username"
          placeholder="Your username"
          onChange={(e) => createUsername(e.currentTarget.value)}
          value={Username}
          required
        />

        <TextInput
          label="Email"
          placeholder="you@gmail.com"
          onChange={(e) => createEmail(e.currentTarget.value)}
          value={Email}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          onChange={(e) => createPassword(e.currentTarget.value)}
          value={Password}
          required
          mt="md"
        />

        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <form onSubmit={handleSubmit_signup}>
          <Button fullWidth mt="xl" type="submit">
            Sign up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;