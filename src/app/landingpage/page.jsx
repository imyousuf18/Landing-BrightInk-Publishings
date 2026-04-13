import Bright from '@/components/Bright'
import Ebook from '@/components/Ebook'
import Footer from '@/components/Footer'
import GetTouch from '@/components/GetTouch'
import Hero from '@/components/Hero'
import Images from '@/components/Images'
import LiveChatScript from '@/components/LiveChatScript '
import Navbar from '@/components/Navbar'
import Patneer from '@/components/Patneer'
import PublishingServices from '@/components/PublishingServices'
import Services from '@/components/Services'
import Subscribe from '@/components/Subscribe'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Images />
      <Services />
      <Ebook />
      <PublishingServices />
      <Patneer />
      <Bright />
      <GetTouch />
      <Subscribe />
      <Footer />
      <LiveChatScript />   {/* adds the chat widget */}
    </div>
  )
}