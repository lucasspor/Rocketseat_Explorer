import {FiPlus, FiX} from 'react-icons/fi'
import {Container} from './styles'

export function Noteitem({ isNew = false, value, onClick, ...rest}){
  return(
    <Container $isnew={isNew}>
        <input 
        type="text"
        value={value} 
        readOnly={!isNew}
        {...rest}/>
        <button 
        type='button'
        onClick={onClick}
        aria-label={isNew ? "Adicionar novo link" : "Remover link"}
        className={isNew ? "button-add" : 'button-delete'}>
          {isNew ? <FiPlus /> : <FiX />}
        </button>
    </Container>
  )

}