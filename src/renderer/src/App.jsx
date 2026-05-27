import Side from './components/side/Side'
import Memo from './components/memo/Memo'
import { useState } from 'react'

function App() {
  // const containerStyle = { display: 'flex' }
  const [memos, setMemos] = useState([
    {
      id: 1,
      title: 'memo 1',
      content: 'memo 1 content',
      createAt: 1743920753833,
      updateAt: 1743920753833
    },
    {
      id: 2,
      title: 'memo 2',
      content: 'memo 2 content',
      createAt: 1743920753833,
      updateAt: 1743920753833
    }
  ])

  const [index, setIndex] = useState(0)

  const handleMemoChange = (newMemo) => {
    const newMemos = [...memos]
    newMemos[index] = newMemo
    setMemos(newMemos)
  }

  return (
    <>
      <Memo memos={memos[index]} onMemoChange={handleMemoChange}>
        <Side memos={memos} index={index} setIndex={setIndex}></Side>
      </Memo>
    </>
  )
}

export default App