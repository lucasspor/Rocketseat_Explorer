import { Container } from "./styles"
import { useRef} from "react"

export function Input({icon: Icon, ...rest}) {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }
  return (
    <Container onClick={handleFocus}>
      {Icon &&
        <Icon size={20}/>
      }
      <input ref={inputRef} {...rest}/>
    </Container>
  )
}