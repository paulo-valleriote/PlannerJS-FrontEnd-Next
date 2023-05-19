import Button from '../general/Button'
import PasswordInput from '../general/PasswordInput'

export default function LoginForm() {
  return (
    <form className="mb-6 flex flex-col items-center justify-center gap-6">
      <input
        type="text"
        placeholder="seuemail@gmail.com"
        className="border-b-2 p-3"
      />
      <PasswordInput />

      <Button>Enviar</Button>
    </form>
  )
}
