import styled from 'styled-components'
import SideHeader from './SideHeader'
import MemoList from '../memo/MemoList'

const SideContainer = styled.div`
  position: fixed;
  width: 240px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #fbfbfa;

  box-shadow:
    1px 0px 3px rgba(11, 27, 56, 0.003),
    2px 0px 6px rgba(11, 27, 56, 0.007),
    2px 0px 10px rgba(11, 27, 56, 0.011),
    3px 0px 13px rgba(11, 27, 56, 0.014),
    4px 0px 16px rgba(11, 27, 56, 0.017),
    5px 0px 19px rgba(11, 27, 56, 0.021);
`

function Side({ memos, index, setIndex }) {
  return (
    <>
      <SideContainer>
        <SideHeader></SideHeader>
        <MemoList memos={memos} index={index} setIndex={setIndex}></MemoList>
      </SideContainer>
    </>
  )
}

export default Side
