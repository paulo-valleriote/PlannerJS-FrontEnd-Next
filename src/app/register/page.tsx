'use client'

import Button from '@/components/general/Button'
import Card from '@/components/general/Card'
import PasswordInput from '@/components/general/PasswordInput'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="h-screen max-h-full">
      <header className="flex justify-center text-3xl">
        <h1 className="font-bold">PlannerJS</h1>
      </header>

      <main className="flex h-full items-center justify-center">
        <Card>
          <div className="mb-5 flex justify-center">
            <h3 className="font-semibold">Cadastre-se</h3>
          </div>

          <form className="mb-6 flex flex-col items-center justify-center gap-6">
            <input
              type="text"
              placeholder="Seu Nome"
              className="border-b-2 p-3"
            />
            <input
              type="text"
              placeholder="Sua Função"
              className="border-b-2 p-3"
            />
            <input
              type="text"
              placeholder="seuemail@gmail.com"
              className="border-b-2 p-3"
            />
            <PasswordInput />

            <Button>Enviar</Button>
          </form>

          <p className="text-sm">
            Já tem uma conta?{' '}
            <Link href="/" className="text-blue-400 underline">
              Clique aqui
            </Link>
          </p>
        </Card>
      </main>
    </div>
  )
}
