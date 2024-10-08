const Progressbar = ({ value }: { value: number }) => {
  return (
    <span className='flex items-center w-full'>
      <div className='flex w-full h-4 overflow-hidden border rounded-full bg-slate-200 border-fuchsia-700'>
        <div className='rounded-full bg-fuchsia-950' style={{ width: `${value}%` }} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>&nbsp;</div>
      </div>
    </span>
  )
}

export default Progressbar