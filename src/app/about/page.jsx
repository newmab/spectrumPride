import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-900 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Mission"
        title="Serving Clients from Tulare to Modesto"
        invert
      >
        <p>
        Achieve elite clinical outcomes by recruiting the best team members to provide the highest quality care.
        </p>
      </SectionIntro>
      <div className="mt-24 rounded-4xl bg-neutral-900 py-1 sm:mt-4 lg:mt-5 lg:py-2">
      <SectionIntro
        eyebrow="Our Team Composition"
        invert
      >
      </SectionIntro>
      </div>
      <Container className="mt-4">
        <GridList>
          <GridListItem title="Board Cerified Behavior Analysts" invert>
            Provide curriculum design, assessments, monitoring, and parent training
          </GridListItem>
          <GridListItem title="Case Supervisors" invert>
            Provide ongoing supervision to our Behavior Technicians, parent training, support, and minor modifications to curriculum.
          </GridListItem>
          <GridListItem title="Behavior Technicians" invert>
            Provide daily instruction depending on the individual's needs and responsiveness to the program.
          </GridListItem>
        </GridList>
      </Container>
    </div>
    
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We bring over 25 years of experience in the field of Applied Behavior Analysis (ABA) with ages 15 months through adulthood.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            In the Central Valley of California, our services are administered by compassionate professionals who are supported by Board Cerified Behavior Analysts and Case Supervisors. Using the principles of ABA, our Behavior Technicians work on individualized goals tailored to each child in the family's home or in our centers. 
          </p>
          <p>
          We bring experience among different teaching styles including Discrete Trial Training (DTT), Verbal Behavior, Natural Enviroment Training (NET), Early Intensive Behavioir Intervention (EIBI), Behavioral Health Therapy, and Social Skills Training.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3" label="Therapy Centers" />
          <StatListItem value="7" label="Counties Served" />
          <StatListItem value="200+" label="Clients" />
        </StatList>
      </Container>

      <Culture />
      
      <PageLinks
        className="py-1 sm:mt-4 lg:mt-5 lg:py-2"
        title="Our Philosophy"
        intro="We remain committed to a child-centered approach where family collaboration and partnership are key elements to a successful experience. Progress towards goals is feasible and attainable when parents and team members are alinged in their values. We work to include communication, social, and daily living skills. Our providers use reinforcement strategies to change behavior in a positive and meanigful way."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
