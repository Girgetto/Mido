import React, { Suspense } from 'react'
import * as Comp from './components'
import { SEO } from '../../layout'

const Home = ({ className }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <SEO title="Remida | Home page" description="Remida - real estate">
        <div className={className}>
          <Comp.Main />
          <Comp.SecondSection />
          <Comp.OurMission />
          <Comp.FirstRow />
          <Comp.SecondRow />
          <Comp.ThirdRow />
          <Comp.LastSection />
        </div>
      </SEO>
    </Suspense>
  )
}

export default Home
