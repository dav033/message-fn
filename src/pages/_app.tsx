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
          <div
            style={{
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              flex: '1'
            }}
          >
            <Component {...pageProps} />
          </div>
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
