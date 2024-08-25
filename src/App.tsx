import Progressbar from './components/progressbar'

function App () {

  const portuguese = { questions: 8, answereds: 0 }
  const mathematics = { questions: 9, answereds: 0 }
  const history = { questions: 8, answereds: 0 }
  const geography = { questions: 9, answereds: 0 }
  const science = { questions: 9, answereds: 0 }
  const english = { questions: 5, answereds: 5 }

  const totalQuestions = portuguese.questions + mathematics.questions + history.questions + geography.questions + science.questions + english.questions
  const totalAnswereds = portuguese.answereds + mathematics.answereds + history.answereds + geography.answereds + science.answereds + english.answereds

  return (
    <>
      <div className='max-w-screen-sm mx-auto flex flex-col p-4'>
        <h1 className='w-full text-center font-semibold text-xl mb-6'>Progresso do Trabalho Bimestral</h1>

        <div className='w-full flex mt-6 gap-4'>
          <span className='whitespace-nowrap min-w-28 text-left'>Progresso Total</span>
          <Progressbar value={(totalAnswereds * 100) / totalQuestions} />
          <span className='w-10'>{totalAnswereds}/{totalQuestions}</span>
        </div>


        <ul className='mt-6'>
          <li className='w-full flex  gap-4 mb-2'>
            <span className='whitespace-nowrap min-w-28 text-left'>Português</span>
            <Progressbar value={(portuguese.answereds * 100) / portuguese.questions} />
            <span className='w-10'>{portuguese.answereds}/{portuguese.questions}</span>
            {/* <span className='flex gap-2'>
              <button className='w-8 h-8 border rounded-sm leading-4' onClick={
                () => portuguese.answereds < portuguese.questions ? setPortuguese((prevState) => ({ ...prevState, answereds: prevState.answereds + 1 })) : null
              } >+</button>
              <button className='w-8 h-8 border rounded-sm leading-4' onClick={
                () => portuguese.answereds > 0 ? setPortuguese((prevState) => ({ ...prevState, answereds: prevState.answereds - 1 })) : null
              }>-</button>
            </span> */}
          </li>
          <li className='w-full flex gap-4 mb-2'>
            <span className='whitespace-nowrap min-w-28 text-left'>Matemática</span>
            <Progressbar value={(mathematics.answereds * 100) / mathematics.questions} />
            <span className='w-10'>{mathematics.answereds}/{mathematics.questions}</span>
          </li>
          <li className='w-full flex gap-4 mb-2'>
            <span className='whitespace-nowrap min-w-28 text-left'>História</span>
            <Progressbar value={(history.answereds * 100) / history.questions} />
            <span className='w-10'>{history.answereds}/{history.questions}</span>
          </li>
          <li className='w-full flex gap-4 mb-2'>
            <span className='whitespace-nowrap min-w-28 text-left'>Geografia</span>
            <Progressbar value={(geography.answereds * 100) / geography.questions} />
            <span className='w-10'>{geography.answereds}/{geography.questions}</span>
          </li>
          <li className='w-full flex gap-4 mb-2'>
            <span className='whitespace-nowrap min-w-28 text-left'>Ciências</span>
            <Progressbar value={(science.answereds * 100) / science.questions} />
            <span className='w-10'>{science.answereds}/{science.questions}</span>
          </li>
          <li className='w-full flex gap-4 mb-2'>
            <span className='whitespace-nowrap min-w-28 text-left'>Inglês</span>
            <Progressbar value={(english.answereds * 100) / english.questions} />
            <span className='w-10'>{english.answereds}/{english.questions}</span>
          </li>

        </ul>
      </div>
    </>
  )
}

export default App
