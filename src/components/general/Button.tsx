import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export default function Button(props: ButtonProps) {
  return (
    <button className="rounded-md bg-blue-400 px-4 py-2 text-white shadow-md">
      {props.children}
    </button>
  )
}
