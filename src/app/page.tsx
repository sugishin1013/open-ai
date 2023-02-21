'use client'
import Image from 'next/image'
import { useState } from 'react'
import Receive from './receive'
import Send from './send'

interface Receive {
  id: string
  object: string
  created: number
  model: string
  choices: Choice[]
  usage: Usage
}

interface Choice {
  text: string
  index: number
  logprobs: null
  finish_reason: string
}

interface Usage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}

export default function Home() {
  const [progress, setProgress] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [sendMessage, setSendMessage] = useState<string[]>([])
  const [receiveMessage, setReceiveMessage] = useState<string[][]>([])
  const addSendMessage = (text: string) => {
    setSendMessage([...sendMessage, text])
  }
  const addReceiveMessage = (arr: string[][]) => {
    setReceiveMessage(arr)
  }
  const getReceive = async (text: string) => {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: text,
        temperature: 0,
        max_tokens: 1000,
      }),
    })
    const receive: Receive = await response.json()
    const receiveMessageTmp = receiveMessage.slice()
    receiveMessageTmp[sendMessage.length] = receive.choices.map((item) => item.text)
    addReceiveMessage(receiveMessageTmp)
    setProgress(false)
  }
  return (
    <main className='bg-gray-100'>
      <div className='flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen'>
        <div className='flex sm:items-center justify-between py-3 px-4 border-b-2 border-gray-200'>
          <div className='relative flex items-center space-x-4'>
            <div className='relative'>
              <span className='absolute text-green-500 right-0 bottom-0'>
                <svg width={20} height={20}>
                  <circle cx={8} cy={8} r={8} fill='currentColor' />
                </svg>
              </span>
              <Image
                src='/avator.png'
                alt=''
                className='w-10 sm:w-16 h-10 sm:h-16 rounded-full'
                width={100}
                height={100}
              />
            </div>
            <div className='flex flex-col leading-tight'>
              <div className='text-2xl mt-1 flex items-center'>
                <span className='text-gray-700 mr-3'>sugishin1013</span>
              </div>
              <span className='text-lg text-gray-600'>openAI Chat Demo</span>
            </div>
          </div>
        </div>
        <div
          id='messages'
          className='flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'
        >
          {receiveMessage
            .slice()
            .reverse()
            .map((message: string[], index: number) => {
              return (
                <div key={index}>
                  <Receive message={message} />
                  <Send message={sendMessage.slice().reverse()[index]} />
                </div>
              )
            })}
        </div>
        <div className='border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0'>
          <div className='relative flex'>
            <input
              type='text'
              placeholder='質問を入力'
              className='w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3'
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <div className='absolute right-0 items-center inset-y-0 sm:flex'>
              <button
                type='button'
                className={
                  'inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none ' +
                  (progress ? 'pointer-events-none bg-gray-300' : '')
                }
                onClick={() => {
                  addSendMessage(text)
                  const receiveMessageTmp = receiveMessage.slice()
                  receiveMessageTmp.push([])
                  addReceiveMessage(receiveMessageTmp)
                  setProgress(true)
                  getReceive(text)
                }}
              >
                <span className='font-bold'>送信</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-6 w-6 ml-2 transform rotate-90'
                >
                  <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
