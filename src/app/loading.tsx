'use client'
const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center my-2 space-x-1'>
        <div className='animate-ping  h-1 w-1 bg-gray-600 rounded-full' />
        <div className='animate-ping  h-1 w-1 bg-gray-600 rounded-full animation-delay-200' />
        <div className='animate-ping  h-1 w-1 bg-gray-600 rounded-full animation-delay-400' />
      </div>
      <style jsx>{`
        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  )
}

export default Loading
