export const QUERY = gql`
  query {
    todosCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ todosCount }) => {
  return <h2>Total: ${JSON.stringify(todosCount)}</h2>
}
