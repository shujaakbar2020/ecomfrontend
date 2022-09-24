import { Announcement } from '@material-ui/icons'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { Announcements } from '../components/Announcements'
import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'
import { Products } from '../components/Products'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}