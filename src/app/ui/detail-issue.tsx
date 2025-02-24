'use client'

import { checkoutIncorrect, reset } from '../lib/actions'
import { useState, useEffect } from 'react'

import { Watermelon } from '@/app/lib/definitions'

import AnimatedUser from './animated-user'
import WatermelonTable from './watermelon-table'


export default function DetailIssue({
  watermelons,
}: {
  watermelons: Watermelon[]
}) {
  const [startMovementUserOne, setStartMovementUserOne] = useState(false)
  const [startMovementUserTwo, setStartMovementUserTwo] = useState(false)
  const [startMovementUserThree, setStartMovementUserThree] = useState(false)

  const [showReset, showResetState] = useState(false)

  const [userOneDecision, setUserOneDecision] = useState(
    { icon: "", watermelons: watermelons.length}
  )
  const [userTwoDecision, setUserTwoDecision] = useState(
    { icon: "", watermelons: watermelons.length}
  )
  const [userThreeDecision, setUserThreeDecision] = useState(
    { icon: "", watermelons: watermelons.length}
  )

  const empty: string[] = []
  const [wUser1, setUser1] = useState(empty)
  const [wUser2, setUser2] = useState(empty)
  const [wUser3, setUser3] = useState(empty)

  async function HandleCheckout(triggerReset: boolean) {
    if (!triggerReset) {
      setStartMovementUserOne(false)
      setStartMovementUserTwo(false)
      setStartMovementUserThree(false)
      setUser1(empty)
      setUser2(empty)
      setUser3(empty)
      setUserOneDecision(
        { icon: "", watermelons: 5}
      )
      setUserTwoDecision(
        { icon: "", watermelons: 5}
      )
      setUserThreeDecision(
        { icon: "", watermelons: 5}
      )
      reset("issue")
      showResetState(false)
      return
    }
    
    showResetState(true)
    setStartMovementUserOne(true)
    setStartMovementUserTwo(true)
    setStartMovementUserThree(true)
    setTimeout(async () => {
      const checkoutFunc = checkoutIncorrect
      const user1 = checkoutFunc(3)
      const user2 = checkoutFunc(2)
      const user3 = checkoutFunc(1)

      const w1 = (await user1).amount!
      setUser1(Array.from({ length: w1 }, (_, i) => `wt-c-` + (i + 1)))
      setStartMovementUserOne(!(await user1).success!)

      const w2 = (await user2).amount!
      setUser2(Array.from({ length: w2 }, (_, i) => `wt-c-` + (i + 1)))
      setStartMovementUserTwo(!(await user2).success!)

      const w3 = (await user3).amount!
      setUser3(Array.from({ length: w3 }, (_, i) => `wt-c-` + (i + 1)))
      setStartMovementUserThree(!(await user3).success!)

      watermelons.splice(watermelons.length)

      if ((await user3).success!) {
        setUserThreeDecision(
          { icon: "shopping", watermelons: 1}
        )
      } else {
        setUserThreeDecision(
          { icon: "mark", watermelons: 1}
        )
      }
      if ((await user1).success!) {
        setUserOneDecision(
          { icon: "shopping", watermelons: 3}
        )
      } else {
        setUserOneDecision(
          { icon: "mark", watermelons: 3}
        )
      }
      if ((await user2).success!) {
        setUserTwoDecision(
          { icon: "shopping", watermelons: 2}
        )
      } else {
        setUserTwoDecision(
          { icon: "mark", watermelons: 2}
        )
      }
    }, 1500)
  }

  useEffect(() => {
    async function handlePressedKey(e: KeyboardEvent) {
      if (e.code == 'Space') {
        HandleCheckout(!showReset)
      }
    }
    document.addEventListener('keyup', handlePressedKey)
    return () => {
      document.removeEventListener('keyup', handlePressedKey)
    }
  })

  const hintText = (reset: boolean)=>{
    const resetText = "Want to start over? Press the space key to reset the app to its initial state."
    const initialText = "This app simulates the issue. Press the space key to play the animation. Observe carefully and identify which user experienced the lost update."
    return reset ? resetText : initialText
  }
  return (
    <>
      <div
        className={`h-screen bg-[url(/background.svg)] bg-cover bg-center`}
        id="main-background"
      >
        <div className="sticky flex items-end justify-center h-[100%] w-[100%]">
          <div className="flex h-[70%] w-[70%]">
            <WatermelonTable
              watermelons={watermelons}
              available={5}
              showErrorMark={'hidden'}
            />
            <div className={`flex w-full items-end justify-center gap-50`}>
              <div>
                {
                  <AnimatedUser
                    userName="u-3"
                    move={{ x: 100, y: -150 }}
                    startMovement={startMovementUserThree}
                    userThought={userThreeDecision}
                    key={1}
                    watermelons={wUser3}
                  />
                }
              </div>
              <div>
                {
                  <AnimatedUser
                    userName="u-2"
                    move={{ x: 0, y: -150 }}
                    startMovement={startMovementUserTwo}
                    userThought={userTwoDecision}
                    key={2}
                    watermelons={wUser2}
                  />
                }
              </div>
              <div>
                {
                  <AnimatedUser
                    userName="u"
                    move={{ x: -100, y: -150 }}
                    startMovement={startMovementUserOne}
                    userThought={userOneDecision}
                    key={3}
                    watermelons={wUser1}
                  />
                }
              </div>
            </div>
          </div>
          <div className="absolute bottom-[4%] left-[3%] opacity-30">
            <div className="text-justify">
              <div className="text-xl p-2 z-10 w-[400] left-[20%]">
                <p>
                  {hintText(showReset)}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                className="rounded-full bg-white w-full py-1"
                onClick={() => {
                  HandleCheckout(!showReset)
                }}
              >
                space
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
