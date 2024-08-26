import Progressbar from './Progressbar'

function ProgressDetails ({ discipline, data }: { discipline: string, data: { answereds: number, questions: number } }) {
  const disciplines: { [key: string]: string } = {}
  disciplines["portuguese"] = "Português";
  disciplines["mathematics"] = "Matemática"
  disciplines["history"] = "História"
  disciplines["geography"] = "Geografia"
  disciplines["science"] = "Ciências"
  disciplines["english"] = "Inglês"

  return (
    <div className='flex w-full gap-4 mb-2'>
      <span className='text-left whitespace-nowrap min-w-32'>
        {disciplines[discipline]}
      </span>
      <Progressbar
        value={(data.answereds * 100) / data.questions}
      />
      <span className='w-10'>
        {data.answereds}/{data.questions}
      </span>
    </div>
  )
}

export default ProgressDetails