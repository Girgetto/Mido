import React, { Suspense } from 'react'

import * as Comp from './components'
import { SEO } from '../../layout'
import { Gallery } from '../../commons'
import useOnScrollTop from '../../../hooks/useOnScrollTop'

const Home = ({ className }) => {
  useOnScrollTop()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <SEO
        title="Omida - Real Estate Consulting - Italy | Home page"
        description="Remida - real estate"
      >
        <div className={className}>
          <Comp.Main />
          <Comp.SecondSection />
          <Comp.OurMission />
          <Comp.FirstRow />
          <Comp.SecondRow />
          <Comp.ThirdRow />
          <div id="gallery">
            <Gallery />
          </div>
          <Comp.LastSection />
        </div>
      </SEO>
    </Suspense>
  )
}

export default Home
