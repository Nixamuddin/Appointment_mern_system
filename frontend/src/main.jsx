import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {
  useQueryClient,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'
import {Provider} from "react-redux"
import { AuthStore } from './Store/Store.jsx'
import App from './App.jsx'
 const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <QueryClientProvider client={queryClient} >
           <Provider store={AuthStore}>
        <App />
         </Provider>
    </QueryClientProvider>
  
    </BrowserRouter>
   
 
)
