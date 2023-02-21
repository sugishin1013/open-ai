import Image from 'next/image'
import Loading from './loading'

type Props = { message: string[] }

const Receive = (props: Props) => {
  return (
    <>
      <div className='chat-message'>
        <div className='flex items-end'>
          <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
            {props.message.map((message: string, index: number) => {
              return (
                <div key={index}>
                  <span
                    className={
                      'px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600 rounded-bl-none'
                    }
                  >
                    {message}
                  </span>
                </div>
              )
            })}
            {!props.message.length && <Loading />}
          </div>
          <Image
            src='/openAI.png'
            alt='openAI'
            className='w-6 h-6 rounded-full order-1'
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  )
}

export default Receive
