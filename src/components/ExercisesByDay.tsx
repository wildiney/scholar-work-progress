function ExercisesByDay ({ amount }: { amount: string }) {
  return (
    <div className='flex flex-col w-full p-4 mt-8 bg-yellow-100 border-2 border-yellow-600 rounded-lg'>
      <p className='w-full text-left'>
        Você precisa fazer <strong>{amount} exercícios por dia</strong>, para entregar dentro do prazo
      </p>
    </div>
  )
}

export default ExercisesByDay