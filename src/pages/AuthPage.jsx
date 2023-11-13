import React from 'react'
import Layout from '../layout/Layout'
import Auth from "../components/auth/Auth"

const AuthPage = () => {
  return (
    <div className='auth-page'>
      <Layout>
        <Auth />
      </Layout>
    </div>
  )
}

export default AuthPage