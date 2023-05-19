import { useState } from 'react'

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="********"
        className="border-b-2 p-3"
      />
      <div
        className="absolute bottom-4 right-0 h-4 w-4 bg-black"
        onClick={handleShowPassword}
      />
    </div>
  )
}
