import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Sidebar from '@components/sidebard/sidebar'
function MyApp ({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />

      <Hydrate state={pageProps.dehydrateState}>
        <div className="cont">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
