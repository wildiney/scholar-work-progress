function Delivery ({ date, countdown }: { date: Date, countdown: number }) {
  return (
    <div className='flex w-full gap-4 mt-6'>
      <p className='w-full text-xl text-center '>
        Entrega em <strong>{date.toLocaleDateString()}</strong> <br /><small>(restam {countdown} dias)</small>
      </p>
    </div>
  )
}

export default Delivery