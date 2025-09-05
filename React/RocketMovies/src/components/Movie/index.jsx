import { Container } from "./styles"

import { Rating } from "../Rating"

import { Tag } from "../Tag"

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating grade={data.rating} isBigSize={false} />

      <p>{
        data.description
      }
      </p>

      {data.tags &&
        <div>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}

        </div>
      }
    </Container>
  )
}