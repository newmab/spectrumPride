// insurance assets
import aetna from '@/images/insuranceAssets/aetna.png'
import anthem from '@/images/insuranceAssets/anthem.png'
import beacon from '@/images/insuranceAssets/beacon.png'
import blueshieldca from '@/images/insuranceAssets/blueshieldca.png'
import cigna from '@/images/insuranceAssets/cigna.png'
import calViva from '@/images/insuranceAssets/calViva.png'
import ccah from '@/images/insuranceAssets/ccah.png'
import evernorth from '@/images/insuranceAssets/evernorth.png'
import healthnet from '@/images/insuranceAssets/healthnet.png'
import hpsj from '@/images/insuranceAssets/hpsj.png'
import magellan from '@/images/insuranceAssets/magellan.png'
import mhn from '@/images/insuranceAssets/mhn.png'
import optum from '@/images/insuranceAssets/optum.png'
import unitedHealthcare from '@/images/insuranceAssets/unitedHealthcare.png'

import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import Image from 'next/image'

const insuranceProviders = [
  ['Aetna', aetna],
  ['Anthem', anthem],
  ['Beacon', beacon],
  ['Blue Shield', blueshieldca],
  ['Cigna', cigna],
  ['CalViva', calViva],
  ['Central California Alliance for Health (CCAH)', ccah],
  ['Evernorth', evernorth],
  ['HealthNet', healthnet],
  ['HPSJ', hpsj],
  ['Magellan', magellan],
  ['MHN', mhn],
  ['Optum', optum],
  ['United Healthcare', unitedHealthcare],
]

function InsuranceProviders() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-100 py-20 sm:mt-32 sm:py-32 lg:mt-56 ">
      <Container>
        <FadeIn className="flex items-center gap-x-8  perspective-dramatic ">
          <h2 className="text-center font-display text-lg font-semibold tracking-wider text-neutral-800 drop-shadow-2xl sm:text-left">
            We work with a number of Insurance Providers. 
          </h2>
          <div className="h-px flex-auto drop-shadow-2xl bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="drop-shadow-2xl w-200px h-200px bg-neutral-200/90 py-12 px-8 mt-10 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4 lg:grid-cols-7 rounded-4xl inset-shadow-2xl inset-shadow-neutral-950/15 ring-1 ring-neutral-950/2"
          >
            {insuranceProviders.map(([client, logo]) => (
              <li className="flex items-center justify-center rounded-4xl hover:bg-neutral-100/1 inset-shadow-neutral-950 hover:drop-shadow-2xl p-2" key={client}>
                <FadeIn >
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

export default InsuranceProviders