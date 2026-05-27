import styled from 'styled-components'

const ButtonWraaper = styled.div`
  padding: 12px 14px;

  &:hover {
    background-color: #efefee;
    transition: background-color 0.5s;
  }
`

const Button = styled.div`
  color: #787774;
  cursor: pointer;
`

function SideAdd() {
  return (
    <ButtonWraaper>
      <Button>+</Button>
    </ButtonWraaper>
  )
}

export default SideAdd
