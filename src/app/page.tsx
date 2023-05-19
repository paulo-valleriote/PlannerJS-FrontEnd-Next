'use client'

import LoginForm from '@/components/Login/LoginForm'
import RoleSwitch from '@/components/Login/RoleSwitch'
import Card from '@/components/general/Card'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [userChoosedRole, setUserChoosedRole] = useState(false)
  const [userRole, setUserRole] = useState({
    organization: true,
    colaborator: false,
  })

  return (
    <div className="h-screen max-h-full">
      <header className="flex justify-center text-3xl">
        <h1 className="font-bold">PlannerJS</h1>
      </header>

      <main className="flex h-full items-center justify-center">
        <Card>
          <div className="mb-5 flex flex-col items-center justify-center">
            <h3 className="m-2 text-xl font-semibold">Login</h3>
            {userChoosedRole && (
              <>
                <h4 className="text-base">
                  Fazendo login como{' '}
                  <span className="font-semibold">
                    {userRole.colaborator ? 'colaborador' : 'organização'}
                  </span>
                </h4>
                <h6 className="cursor-pointer text-sm underline decoration-dotted transition-transform duration-200 hover:scale-105">
                  Trocar a escolha
                </h6>
              </>
            )}
          </div>

          {!userChoosedRole ? (
            <RoleSwitch
              setUserChoosedRole={setUserChoosedRole}
              setUserRole={setUserRole}
              userRole={userRole}
            />
          ) : (
            <LoginForm />
          )}

          <p className="text-sm">
            Não tem uma conta?{' '}
            <Link href="/register" className="text-blue-400 underline">
              Faça seu cadastro
            </Link>
          </p>
        </Card>
      </main>
    </div>
  )
}
