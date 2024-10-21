import { Container, Links } from './styles.js'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export default function Details() {
  return (
    <>
      <Container>
        <Header />
        <Section title="Links úteis">
          <Links>
            <li><a href="#" target="_blank">https://www.rocketseat.com.br/</a></li>
            <li><a href="#" target="_blank">https://www.rocketseat.com.br/</a></li>            
          </Links>
        </Section>
        <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="nodejs"/>
        </Section>

        <Button title="Voltar"/>
      </Container>
    </>
  );
}
