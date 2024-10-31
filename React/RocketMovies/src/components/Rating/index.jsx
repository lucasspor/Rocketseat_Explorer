import { Container } from "./styles"
import { VscStarFull, VscStarEmpty, VscStarHalf } from "react-icons/vsc"

export function Rating({ grade, isBigSize }) {
  const roundedGrade = Math.floor(grade)
  const hasHalfStar = grade % 1 !== 0

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < roundedGrade) return <VscStarFull key={index} />
    if (index === roundedGrade && hasHalfStar) return <VscStarHalf key={index} />
    return <VscStarEmpty key={index} />
  });

  return <Container $isbigsize={isBigSize}>{stars}</Container>
}
