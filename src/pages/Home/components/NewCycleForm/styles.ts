import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.sandybrown};
  font-size: 1.124rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInputContainer = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['midnightblue-600']};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.tomato};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.tomato};
  }
  &::placeholder {
    color: ${(props) => props.theme['midnightblue-600']};
  }
`
export const TaskInputContainer = styled(BaseInputContainer)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const DurationInputContainer = styled(BaseInputContainer)`
  width: 4rem;
`
