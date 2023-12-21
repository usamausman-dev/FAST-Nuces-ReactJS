import React, { useContext } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import Layout from './Layout'
import { GlobalContext } from './Context/context'
export default function App() {

  const { state, dispatch } = useContext(GlobalContext)

  const Role = {
    admin: Admin,
    user: User,
    guest: Guest
  }


  const getRoleByComponent = (params) => Role[params] || Role['guest']
  const UserInterface = getRoleByComponent(state.user?.role)

  return (
    <Layout>
      <UserInterface />
    </Layout>
  )

}
