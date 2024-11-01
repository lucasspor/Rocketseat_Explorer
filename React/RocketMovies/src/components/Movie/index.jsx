import { Container } from "./styles"

import { Rating } from "../Rating"

import { Tag } from "../Tag"
import { Banner } from "../Banner"

export function Movie({ data, rating = 0, children, ...rest }) {
  return (
    <Container {...rest}>
      <Banner title="interestelar"/>
        <div><h1>{data.title}</h1>
        <Rating grade={data.rating} isBigSize={false} />
        {
        data.tags &&
        <footer>
          {
            data.tags.map( tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
        <p>{ children }</p>
      </div>
      
    </Container>
  )
}