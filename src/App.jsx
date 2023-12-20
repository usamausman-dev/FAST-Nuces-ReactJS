import React from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import Layout from './Layout'
export default function App() {


  const Role = {
    admin: Admin,
    user: User,
    guest: Guest
  }


  const getRoleByComponent = (params) => Role[params] || Role['guest']
  const UserInterface = getRoleByComponent('guest')

  return (
    <Layout>
      <UserInterface />
    </Layout>
  )

}
