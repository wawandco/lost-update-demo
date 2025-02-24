import { JSX } from 'react/jsx-dev-runtime'

export default function User({ layers }: { layers: JSX.Element[] }) {
  return (
    <>
      {layers[3]}
      {layers[2]}
      {layers[1]}
      {layers[0]}
    </>
  )
}
