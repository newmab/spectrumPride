import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
// company logo
import cublogo from '@/images/cublogo.png'
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

import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

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
    <div className="mt-24 rounded-4xl bg-neutral-300 py-20 sm:mt-32 sm:py-32 lg:mt-56 inset-shadow-ring-1 inset-shadow-neutral-900 ">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-lg font-semibold tracking-wider text-neutral-800 sm:text-left">
            We work with a number of Insurance Providers. 
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4 lg:grid-cols-7"
          >
            {insuranceProviders.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
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

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-900/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-900">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-900">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56 bg-url[url(/images/cublogo.png)] bg-neutral-100 bg-blend-multiply inset-shadow inset-shadow-neutral-900">
  <FadeIn className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left column: Text */}
    <div>
      <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-900 [text-wrap:balance] sm:text-7xl">
        Spectrum Pride
      </h1>
      <h2 className="font-display mt-5 text-4xl font-light text-neutral-500 [text-wrap:pretty] sm:text-4xl">
        Serving children from Modesto to Tulare
      </h2>
      <p className="mt-6 text-xl text-neutral-600">
        We’re here to deliver real results for children with autism in the Central Valley.
        Backed by science and a deep sense of compassion, our ABA therapy helps families
        see meaningful progress every step of the way.
      </p>
    </div>

    {/* Right column: Image */}
    <div>
      <Image
        src={cublogo}
        alt="Spectrum Pride Cub Logo"
        className="mt-10"
      />
    </div>
  </FadeIn>
</Container>

      <InsuranceProviders />

      <CaseStudies caseStudies={caseStudies} />

    

      <Services />

      <ContactSection />
    </>
  )
}
