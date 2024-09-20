
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
import { create } from 'zustand';
import axios from 'axios';

type State = {
  Name: string;
  Cardnumber : string;
  Expiration : string;
  Year: string;
  CVC : string;
 }
  type Action = {
    createName: (Name: State['Name']) => void;
    createCardnumber: (Cardnumber: State['Cardnumber']) => void;
    createExpiration: (Expiration: State['Expiration']) => void;
    createYear: (Year: State['Year']) => void;
    createCVC: (CVC: State['CVC']) => void;
  };
 

  const PaymentStore = create<State & Action>((set) => ({
    Name: '',
    Cardnumber: '',
    Expiration: '',
    Year: '',
    CVC: '',
    createName: (Name) => set(() => ({ Name })),
    createCardnumber: (Cardnumber) => set(() => ({ Cardnumber })),
    createExpiration: (Expiration) => set(() => ({ Expiration })),
    createYear: (Year) => set(() => ({ Year })),
    createCVC: (CVC) => set(() => ({ CVC })),
  }));

function PaymentForm () {
  const Name = PaymentStore((state) => state.Name);
  const createName = PaymentStore((state) => state.createName);
  const Cardnumber = PaymentStore((state) => state.Cardnumber);
  const createCardnumber = PaymentStore((state) => state.createCardnumber);
  const Expiration = PaymentStore((state) => state.Expiration);
  const createExpiration = PaymentStore((state) => state.createExpiration);
  const Year = PaymentStore((state) => state.Year);
  const createYear = PaymentStore((state) => state.createYear);
  const CVC = PaymentStore((state) => state.CVC);
  const createCVC = PaymentStore((state) => state.createCVC);

  const token = localStorage.getItem('token');
  const handleSubmitPayment = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post('http://127.0.0.1:8000/user/update-payment', {
        Name,
        Cardnumber,
        Expiration,
        Year,
        CVC,
      }, {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log('Payment successful', response.data);
      // Handle successful payment, e.g., redirect or store token

    } catch (error) {
      console.error('There was a problem with the payment request:', error);
    }
  };




  return(
    <Container>
       <form noValidate onSubmit={handleSubmitPayment}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Card Name"
            placeholder="you@mantine.dev"
            value={Name}
            onChange={(e) => createName(e.currentTarget.value)} // Bind input to Zustand store
            required
            maxLength={50}
          />
          <PasswordInput
            label="Card Number"
            placeholder="Your password"
            value={Cardnumber}
            onChange={(e) => createCardnumber(e.currentTarget.value)} // Bind input to Zustand store
            required
            maxLength={16}
            mt="md"
          />   <TextInput
          label="Exp."
          placeholder="Your Expiration"
          value={Expiration}
          onChange={(e) => createExpiration(e.currentTarget.value)} // Bind input to Zustand store
          required
          maxLength={5}
          mt="md"
        />   <TextInput
        label="Year"
        placeholder="Year"
        value={Year}
        onChange={(e) => createYear(e.currentTarget.value)} // Bind input to Zustand store
        required
        maxLength={4}
        mt="md"
      />   <PasswordInput
      label="CVC"
      placeholder="---"
      value={CVC}
      onChange={(e) => createCVC(e.currentTarget.value)} // Bind input to Zustand store
      required
      maxLength={3}
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
    
  )
}

export default PaymentForm