import styled from 'styled-components'

const WordStyled = styled.div`
  ${({noMarginRight}) => !noMarginRight && 'margin-right: 5px;'}
  margin-bottom: 5px;
  cursor: pointer;
  max-height: 25px;
  ${({isSelected}) => isSelected && 'color: red;'}
  ${({ isBold }) => isBold && 'font-weight: 900;'}
  ${({ isItalic }) => isItalic && 'font-style: italic;'}
  ${({ isUnderlined }) => isUnderlined && 'text-decoration: underline;'}
`

export default WordStyled
