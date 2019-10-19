import styled from 'styled-components'

const DetailRow = styled.p`
  ${({isClickable}) => isClickable && 'cursor: pointer;'}
`

export default DetailRow
