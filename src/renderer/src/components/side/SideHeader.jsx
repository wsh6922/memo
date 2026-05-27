import styled from 'styled-components'
import SideAdd from './SideAdd'

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededec;
  font-weight: 600;
  color: #37352f;
`

const SideHeaderContainer = styled.div`
  font-size: 13px;
  padding: 12px 14px;
`

function SideHeader() {
  return (
    <>
      <HeaderWrapper>
        <SideHeaderContainer>내 메모</SideHeaderContainer>
        <SideAdd></SideAdd>
      </HeaderWrapper>
    </>
  )
}

export default SideHeader
