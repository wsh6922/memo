import styled from 'styled-components'
import SideHeader from './SideHeader'

const SideContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #9e9e9e;
`

function Side() {
  return (
    <>
      <SideContainer>
        <SideHeader></SideHeader>
      </SideContainer>
    </>
  )
}

export default Side
