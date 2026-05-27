import styled from 'styled-components'

const MemoWrapper = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #37352f;
  // outline: 1px solid pink;
  padding: 12px 14px;

`

function MemoList({ memos, index, setIndex }) {
  return (
    <>
      <div>
        {memos.map((m, i) => (
          <MemoWrapper key={m.id} onClick={() => setIndex(i)}>
            {m.title}
          </MemoWrapper>
        ))}
      </div>
    </>
  )
}

export default MemoList
