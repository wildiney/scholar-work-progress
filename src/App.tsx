import Delivery from './components/Delivery'
import ExercisesByDay from './components/ExercisesByDay'
import Header from './components/Header'
import Progressbar from './components/Progressbar'
import ProgressDetails from './components/ProgressDetails'
import Titles from './components/Titles'
import DISCIPLINES from './data/disciplines.json'
import DELIVERY_DATE from './data/delivery.json'
import useCountdown from './hooks/useCountdown'

function App () {
  const totalQuestions = Object.values(DISCIPLINES).reduce(
    (sum, discipline) => {
      return sum + discipline.questions
    },
    0
  )

  const totalAnswereds = Object.values(DISCIPLINES).reduce(
    (sum, discipline) => {
      return sum + discipline.answereds
    },
    0
  )

  const totalQuestionsToBeDone = totalQuestions - totalAnswereds

  const deliveryDate = new Date(DELIVERY_DATE.date.year, DELIVERY_DATE.date.month - 1, DELIVERY_DATE.date.day)
  const countdown = useCountdown(deliveryDate)

  const exercisesByDay = (totalQuestionsToBeDone / (countdown - 1)).toFixed(2)

  return (
    <>
      <Header title='Progresso do Trabalho Bimestral' />

      <div className='flex flex-col max-w-screen-sm p-4 pt-20 mx-auto'>
        <Delivery date={deliveryDate} countdown={countdown} />
        <ExercisesByDay amount={exercisesByDay} />

        <hr className='my-10 border-fuchsia-200' />

        <Titles title='Progresso Total' />

        <div className='flex w-full gap-4'>
          <Progressbar value={(totalAnswereds * 100) / totalQuestions} />
          <span className='w-10'>
            {totalAnswereds}/{totalQuestions}
          </span>
        </div>

        <hr className='my-10 border-fuchsia-200' />

        <Titles title='Em detalhes' />

        <ul className=''>
          {Object.entries(DISCIPLINES).map(([discipline, data]) => (
            <li key={discipline}>
              <ProgressDetails discipline={discipline} data={data} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
