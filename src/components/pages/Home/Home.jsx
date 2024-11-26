import React from 'react'
import { Headerr } from '../../layouts/header/Headerr'
import { AboutMe } from '../AboutMe/AboutMe'
import { Projects } from '../Proyects/Proyects'
import { Skills } from '../Skills/Skills'
import { Contact } from '../ContactMe/ContactMe'
import { Footer } from '../../layouts/footer/Footerr'


export const Home = () => {
  return (
    <body>
        <Headerr/>
    <AboutMe />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  
    </body>
  )
  
}