import { JSX } from 'react'

export default function TextCard({ text }: { text: JSX.Element }) {
  return (
    <>
      <div
        id="explanation-card"
        className="absolute shadow-[1px_2px_9px_#0000009e] p-2.5 z-10 border-2 rounded-md top-30 left-10 bg-white bg-opacity-80"
      >
        <div className="text-justify">
          <div className="text-lg p-2 z-10 w-[400] left-[20%]">{text}</div>
        </div>
      </div>
    </>
  )
}
