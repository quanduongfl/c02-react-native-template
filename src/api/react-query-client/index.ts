import { QueryClient } from 'react-query'

class QuerySetup {
  constructor() {
    this.queryClient = new QueryClient()
  }

  setup() {
    this.queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          notifyOnChangeProps: 'tracked',
          retry: 2,
          staleTime: 2 * 60 * 1000, // set default stale time 2 mins
        },
      },
    })

    if (__DEV__) {
      import('react-query-native-devtools').then(({ addPlugin }) => {
        addPlugin({ queryClient: this.queryClient })
      })
    }
  }

  getInstance() {
    if (!this.queryClient) this.setup()
    return this.queryClient
  }

  queryClient: QueryClient
}

const QueryClientSetup = new QuerySetup()
export default QueryClientSetup
