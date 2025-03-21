import { GridList, GridListItem } from './GridList'
import { PageIntro } from './PageIntro'

function Intake() {
    return (
<PageIntro  title="How do I get started?">
        <GridListItem title="Contact Us">
        During our initial connection, we will ask you some background information about your family and your child.
        We will also hear your concerns about your child so we can gauge what services would be appropriate for your child's needs. 
        </GridListItem>
        <GridList className="mt-4">
            <GridListItem className="mt-4" title="Phone">
            559-512-3526
            </GridListItem>
            <GridListItem className="mt-4" title="Fax">
            559-272-0226
            </GridListItem>
            <GridListItem className="mt-4" title="Email">
            referral@spectrumpride.com 
            </GridListItem>
        </GridList>
        <GridListItem title="Intake">
        We will send you our intake packet via DocuSign. The intake packet includes demographics, insurance information, and consent forms. As soon as the intake document has been completed and signed, we will send you a step-by-step guide detailing the process, tailored to which insurance you have.
        We will receive an authorization from your insurance/funding source and our clinical team will reach out to you to get started. 
        </GridListItem>
      </PageIntro>
    )
}

export default Intake;        