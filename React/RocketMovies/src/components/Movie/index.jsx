import { Container } from "./styles"
import { FiStar } from "react-icons/fi"

import { Rating } from "../Rating"

import { Tag } from "../Tag"

export function Movie({ data, rating = 0, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating grade={data.rating} isBigSize={false} />
      <p>{ children }</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map( tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>
  )
}