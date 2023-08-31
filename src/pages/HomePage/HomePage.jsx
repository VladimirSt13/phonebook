import { Container, Title } from './HomePage.styled';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Home() {
  return (
    <Container>
      <Logo />
      <Title>
        Uncomplicate Your Contacts: Experience Effortless Phonebook Control!
      </Title>
    </Container>
  );
}
