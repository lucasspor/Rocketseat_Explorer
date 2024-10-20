import { Container } from './styles.js'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

export default function Details() {
  return (
    <>
      <Container>
        <Header />
        <Section title="Links úteis">
          <ul>
            <li><a href="#" target="_blank">https://www.rocketseat.com.br/</a></li>
            <li>item 2</li>
          </ul>
        </Section>

        <Button title="Voltar"/>
      </Container>
    </>
  );
}
