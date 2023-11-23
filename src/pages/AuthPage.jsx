import React from 'react'

import Layout from '../layout/Layout'
import Auth from "../components/auth/Auth"
import Success from '../components/auth/success/Success'
import AuthByStudent from '../components/auth/auth-by-student/AuthByStudent'
import AuthByTeacher from '../components/auth/auth-by-teacher/AuthByTeacher'
import AuthByFreelancer from '../components/auth/auth-by-freelancer/AuthByFreelancer'

import "../components/auth/Auth.scss"
import AuthBySchool from '../components/auth/auth-by-school/AuthBySchool'
import AuthByFriend from '../components/auth/auth-by-friend/AuthByFriend'
import AuthByGuest from '../components/auth/auth-by-guest/AuthByGuest'




const AuthPage = () => {
  return (
    <div className='auth-page' >
      <Layout>
        <Auth />
        <AuthByStudent/>
        <AuthByTeacher/>
        <AuthByFreelancer/>
        <AuthBySchool/>
        <AuthByFriend/>
        <AuthByGuest/>
        <Success/>
      </Layout>
    </div>
  )
}

export default AuthPage;