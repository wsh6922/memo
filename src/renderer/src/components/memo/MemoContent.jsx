import styled from 'styled-components'
import { useRef } from 'react'

const MemoTitleContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding-top: 100px;
`

const MemoContentContainer = styled.textarea`
  width: 100%;
  background-color: #f7f7f7;
  resize: none;
  overflow: hidden;
  min-height: calc(100vh - 130px);
  outline: 0px;
  border: 0px;
`

function MemoContent({ memo, onMemoChange }) {
  const ref = useRef(null)

  // const textareaHandler = (e) => {
  //   console.log(e.target.value)
  // }

  function textareaHandler(e) {
    ref.current.style.height = 'auto'
    let total = ref.current.scrollHeight
    ref.current.style.height = total + 'px'

    onMemoChange({
      ...memo,
      content: e.target.value,
      updateAt: new Date().getTime()
    })
  }

  return (
    <>
      <MemoTitleContainer>
        <input
          type="text"
          value={memo.title}
          onChange={(e) => {
            onMemoChange({
              ...memo,
              title: e.target.value,
              updateAt: new Date().getTime()
            })
          }}
        ></input>
      </MemoTitleContainer>
      <MemoContentContainer
        ref={ref}
        onChange={(e) => {
          textareaHandler(e)
        }}
        value={memo.content}
      ></MemoContentContainer>
    </>
  )
}

export default MemoContent
