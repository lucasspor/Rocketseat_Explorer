import { Container, Links, Content } from './styles.js'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';
import { toast } from 'react-toastify';

export function Details() {
  const params = useParams()
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  }, [])

  function handleBack() {
    navigate("/")
  }

  async function handleDeleteNote() {
    const confirm = window.confirm("Deseja deletar esta nota?")

    if(confirm){
      await api.delete(`notes/${params.id}`)
      navigate("/")
      toast.success("sua nota foi deletada")
    }
  }

  return (
    <>
      <Container>
        <Header />
        {data && <main>
          <Content>
            <ButtonText title="Excluir a nota" onClick={handleDeleteNote} />
            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}

            </p>
            {data.links && <Section title="Links úteis">
              <Links>
                {data.links.map(link => (
                  <li key={link.id}><a href="#" target="_blank">{link.url}</a></li>
                ))}
              </Links>
            </Section>}
            {data.tags && <Section title="Marcadores">
              {data.tags.map(tag => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </Section>}

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>}
      </Container>
    </>
  );
}
