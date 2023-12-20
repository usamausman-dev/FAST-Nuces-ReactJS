import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { GlobalContext } from './Context/context'


export default function Layout({ children }) {
    const {state,dispatch} = useContext(GlobalContext)

    console.log(state)
    return (
        <>
            <Navbar />
            {children}

            <footer className='bg-slate-100 text-center py-3 text-sm font-semibold text-slate-500'>Alrights Reserved</footer>
        </>
    )
}
