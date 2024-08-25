const Progressbar = ({ value }: { value: number }) => {
  return (
    <span className='w-full flex items-center'>
      <div className='flex w-full h-4 bg-slate-200 rounded-full overflow-hidden border border-slate-600'>
        <div className='bg-slate-700 rounded-full' style={{ width: `${value.toString()}%` }}>&nbsp;</div>
      </div>
    </span>
  )
}

export default Progressbar