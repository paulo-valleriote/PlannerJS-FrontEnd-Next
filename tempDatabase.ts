type tempDatabase = {
  title: string
  description: string
  client: string
}[]

const tempDatase: tempDatabase = []

for (let i = 0; i < 10; i++) {
  tempDatase.push({
    title: 'Lorem Ipsum',
    description:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    client: 'Lorem Ipsum',
  })
}

export default tempDatase
