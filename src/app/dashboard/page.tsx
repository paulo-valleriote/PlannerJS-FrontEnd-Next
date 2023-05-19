'use client'
import DemandsList from '@/components/Dashboard/DemandsList'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [demandList, setDemandList] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const getDemandList = async () => {
      const demands = await fetch('http://localhost:8080/customer/demand', {
        headers: {
          admin: 'true',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzZTYxMmU5LWM5ZWItNDg5Yy05MDQ1LTFjNjFlNmZjZDFhZSIsImlhdCI6MTY4NDQzMjk5OX0.dMTjYJ_gRL2prA2-7uQsIY94lFrwliBOQEQrHVkc1Lg',
        },
      }).then((res) => res.json())
      console.log(demands)
      return demands
    }
    getDemandList()
      .then((res: any) => setDemandList(res))
      .then(() => setLoaded(true))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <main className="grid place-content-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b-2 px-10 py-6">
            <h2 className="text-4xl">Fila de Pedidos</h2>
            <h3 className="text-sm">
              Número de pedidos atual: {demandList.length}
            </h3>
          </div>
          {loaded && <DemandsList list={demandList} />}
        </div>
      </main>
    </>
  )
}
