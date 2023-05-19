import { Dispatch, SetStateAction } from 'react'

type UserRole = {
  organization: boolean
  colaborator: boolean
}

interface RoleSwitchProps {
  userRole: UserRole

  setUserRole: Dispatch<SetStateAction<UserRole>>

  setUserChoosedRole: Dispatch<SetStateAction<boolean>>
}

export default function RoleSwitch({
  userRole,
  setUserChoosedRole,
  setUserRole,
}: RoleSwitchProps) {
  const handleUserRoleChange = (isAnOrganization: boolean) => {
    const colaboratorOrOrganization = {
      colaborator: !isAnOrganization,
      organization: isAnOrganization,
    }
    setUserRole({
      colaborator: colaboratorOrOrganization.colaborator,
      organization: colaboratorOrOrganization.organization,
    })

    setTimeout(() => {
      setUserChoosedRole(true)
    }, 800)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="m-1 text-sm">Selecione sua função</h4>

      <div className="mb-6 flex w-full justify-between rounded-lg shadow-lg">
        <div
          className={`flex w-full cursor-pointer justify-center rounded-md rounded-r-none border-r-2 px-5 py-2 transition-colors duration-300 hover:bg-gray-100 ${
            userRole.organization && 'bg-blue-200 hover:bg-blue-400'
          }`}
          onClick={() => handleUserRoleChange(true)}
        >
          <h1>Empresa</h1>
        </div>
        <div
          className={`flex w-full cursor-pointer justify-center rounded-md rounded-l-none border-r-2 px-5 py-2 transition-colors duration-300 hover:bg-gray-100 ${
            userRole.colaborator && 'bg-blue-200 hover:bg-blue-400'
          }`}
          onClick={() => handleUserRoleChange(false)}
        >
          <h1>Colaborador</h1>
        </div>
      </div>
    </div>
  )
}
