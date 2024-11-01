import { Container } from "./styles"

export function Banner({ title, }) {
  const query = encodeURIComponent(title)

  return (
    <Container>
      <div>
        <img
          src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg"}
        />
      </div>

    </Container>
  )
}