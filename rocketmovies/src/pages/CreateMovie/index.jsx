import { FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CreateMovieTag } from '../../components/CreateMovieTag'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function CreateMovie() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <div>
                            <FiArrowLeft /><Link to="/">Voltar</Link>
                        </div>
                        <h1>Novo Filme</h1>
                    </header>

                    <div className="titleInput">
                        <Input placeholder="Título" type="text" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="text" />
                    </div>
                    <textarea placeholder='Observações' />
                    <h2>Marcadores</h2>
                    <div className='tagSpace'>
                       <CreateMovieTag placeholder="react"/>
                       <CreateMovieTag isNew placeholder="Novo Marcador"/>
                    </div>

                    <div>
                        <Button title="Excluir filme" />
                        <Button title="Salvar filme" />
                    </div>
                </Form>

            </main>
        </Container>
    )
}