import styled from 'styled-components'
import MemoContent from './MemoContent'

const MemoContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-left: 200px;
  background-color: #8a8a8a;
  box-sizing: border-box;

  // 분배는 부모 책임
  display: flex;
  flex-direction: column;
`

function Memo({ children }) {
  return (
    <>
      <MemoContainer>
        {children}
        <MemoContent></MemoContent>
      </MemoContainer>
    </>
  )
}

export default Memo
