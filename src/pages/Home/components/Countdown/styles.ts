import styled from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['midnightblue-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const SeperatorContainer = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.tomato};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
