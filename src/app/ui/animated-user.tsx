'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import UserThought from './user-thought'

export default function AnimatedUser({
  userName,
  move,
  startMovement,
  userThought,
  watermelons,
}: {
  userName: string
  move: { x: number; y: number }
  startMovement: boolean
  userThought: { icon: string; watermelons: number}
  watermelons: string[]
}) {
  return (
    <>
      <div>
        <motion.div
          className="absolute bottom-[30%] w-[10%]"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: startMovement ? move.x : 0,
            y: startMovement ? move.y : 0,
          }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            initial={{ width: 85, height: 25 }}
            animate={{
              width: startMovement ? 70 : 85,
              height: startMovement ? 10 : 25,
            }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={`/${userName}.svg`}
              alt=""
              width={85}
              height={20}
            ></Image>
          </motion.div>
          <UserThought
            userThought={userThought}
          />
        </motion.div>
        <motion.div
          className="absolute bottom-[1%]"
          initial={{ width: 120, height: 120, x: 0, y: 0 }}
          animate={{
            width: startMovement ? 110 : 120,
            height: startMovement ? 110 : 120,
            x: startMovement ? move.x : 0,
            y: startMovement ? move.y : 0,
          }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={'/cart-w.svg'}
            alt=""
            width={120}
            height={120}
            className=""
          ></Image>
          <div>
            {watermelons.map((watermelon, i) => (
              <Image
                key={i}
                className={`absolute ${watermelon} top-[-10%] z-11`}
                src={'/wmelon.svg'}
                alt=""
                width={50}
                height={50}
              ></Image>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
