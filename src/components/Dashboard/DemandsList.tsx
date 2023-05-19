interface DemandsListProps {
  list: {
    customer: { name: string }
    name: string
    description: string
  }[]
}

export default function DemandsList({ list }: DemandsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {list.map((card) => (
        <div
          key={`Pedido - ${card.name}`}
          className="flex w-52 flex-col gap-8 rounded-md p-6 shadow-lg"
        >
          <div>
            <h4>{card.customer.name}</h4>
            <h2>{card.name}</h2>
          </div>
          <div>{card.description}</div>
        </div>
      ))}
    </div>
  )
}
