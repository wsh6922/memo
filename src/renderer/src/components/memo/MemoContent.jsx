import styled from 'styled-components'
import { useRef } from 'react'

const MemoTitleContainer = styled.div`
  width: 100%;
  background-color: #b5b5b5;
  padding-top: 100px;
`

const MemoContentContainer = styled.textarea`
  width: 100%;
  background-color: #9c9c9c;
  resize: none;
  overflow: hidden;
  min-height: calc(100vh - 130px);
`

function MemoContent() {
  const ref = useRef(null)

  // const textareaHandler = (e) => {
  //   console.log(e.target.value)
  // }

  function textareaHandler() {
    ref.current.style.height = 'auto'
    let total = ref.current.scrollHeight
    ref.current.style.height = total + 'px'
  }

  return (
    <>
      <MemoTitleContainer>
        <input type="text"></input>
      </MemoTitleContainer>
      <MemoContentContainer ref={ref} onChange={textareaHandler}></MemoContentContainer>
    </>
  )
}

export default MemoContent
