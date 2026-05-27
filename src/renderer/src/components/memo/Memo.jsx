import styled from 'styled-components'
import MemoContent from './MemoContent'
import { memo } from 'react'

const MemoContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-left: 240px;
  background-color: #8a8a8a;
  box-sizing: border-box;

  // 분배는 부모 책임
  display: flex;
  flex-direction: column;
`

function Memo({ children, memos, onMemoChange }) {
  return (
    <>
      <MemoContainer>
        {children}
        <MemoContent memo={memos} onMemoChange={onMemoChange}></MemoContent>
      </MemoContainer>
    </>
  )
}

export default Memo
