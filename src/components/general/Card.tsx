import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div className="-mt-16 flex flex-col items-center justify-center rounded-md bg-white p-12 shadow-lg">
      {props.children}
    </div>
  )
}
