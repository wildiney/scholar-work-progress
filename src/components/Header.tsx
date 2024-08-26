function Header ({ title }: { title: string }) {
  return (
    <div className='fixed flex flex-col w-full p-4 mx-auto shadow-md bg-fuchsia-950'>
      <h1 className='w-full max-w-screen-sm mx-auto text-2xl font-semibold text-center text-white'>
        {title}
      </h1>
    </div>
  )
}

export default Header