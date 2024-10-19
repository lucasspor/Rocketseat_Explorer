import { Container } from './styles.js'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header/index.jsx';

export default function Details() {
  return (
    <>
      <Container>
        <Header/>
        <Button title="Voltar"/>
      </Container>
    </>
  );
}
