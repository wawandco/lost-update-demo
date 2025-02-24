'use client'

import { useState, useEffect } from 'react'

import { newSlices } from '@/app/lib/definitions'
import MedaowContainer from './meadow'


export default function DetailExplanation() {
  const [state, setState] = useState(newSlices[0])
  const [index, setIndex] = useState(0)

  const nextAction = () => {
    let newIndex = index + 1
    if (newIndex > newSlices.length - 1) {
      newIndex = newSlices.length - 1
    }
    setState(newSlices[newIndex])
    setIndex(newIndex)
  }

  const prevAction = () => {
    let newIndex = index - 1
    if (newIndex < 0) {
      newIndex = 0
    }
    setState(newSlices[newIndex])
    setIndex(newIndex)
  }

  useEffect(() => {
    async function handlePressedKey(e: KeyboardEvent) {
      if (e.key == 'ArrowRight') {
        nextAction()
      }
      if (e.key == 'ArrowLeft') {
        prevAction()
      }
    }
    document.addEventListener('keyup', handlePressedKey)
    return () => {
      document.removeEventListener('keyup', handlePressedKey)
    }
  })
  return (
    <>
      <div>
        <div className="flex h-screen justify-center gap-6">
          <MedaowContainer 
            key={state.key}
            card={state.card.text}
            carts={state.carts}
            showErrorMark={state.showErrorMark}
            watermelons={state.watermelons}
          />
        </div>
        <div className="absolute bottom-[4%] left-[3%] opacity-30">
          <div className="sticky text-center">
            <div className="flex items-center text-xl text-gray-800 gap-1">
              Navigate using
              <button
                onClick={prevAction}
                type="button"
                className="text-white bg-rose-500 hover:bg-rose-800 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  transform="rotate(180 0 0)"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              and
              <button
                onClick={nextAction}
                type="button"
                className="text-white bg-rose-500 hover:bg-rose-800 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  transform="rotate(0 0 0)"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              keys.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
