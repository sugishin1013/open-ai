import Image from 'next/image'

type Props = { message: string }

const Send = (props: Props) => {
  return (
    <>
      <div className='chat-message'>
        <div className='flex items-end justify-end'>
          <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
            <div>
              <span
                className={
                  'px-4 py-2 rounded-lg inline-block bg-blue-600 text-white rounded-br-none'
                }
              >
                {props.message}
              </span>
            </div>
          </div>
          <Image
            src='/avator.png'
            alt='avator'
            className='w-6 h-6 rounded-full order-2'
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  )
}

export default Send
