import ServiceItem from './service';
import SectionTitle from '../SectionTitle/SectionTitle';
const services = [
    {
        icon: 'fa fa-trophy',
        title: 'Instant Withdrawal & Deposit',
        description: 'Speedy Withdrawals, Seamless Deposits, and Trusted cricket betting sites in India'
    },
    {
        icon: 'fa fa-phone',
        title: '24 /7 Customer Service',
        description: '24/7 Support, Instant response. Click here and chat with us'
    },
    {
        icon: 'fa fa-gift',
        title: 'Referral Bonus',
        description: 'Share the Wealth, Earn Rewards with Every Referral'
    },
]

const Services = () => {
    return (
        <section id="services" className="services-area what-story pt-0 pb-0 fix">

            <div className="container">
            <SectionTitle
                titlefirst={'Best'}
                titleSec={'Service'}
                className={'about-title second-title text-center'}
            />
            <div className="s-about-content " data-wow-delay=".4s">
            <p className='text-center'><b>WELCOME TO ROCKY BOOK - THE ULTIMATE DESTINATION FOR ONLINE GAMBLING SITES.
            WE OFFER A WIDE RANGE OF OPTIONS TO BET ON INCLUDING SPORTSBOOKS, LIVE CARDS & LIVE CASINO </b></p>
</div>
                <div className="row">
                    {
                        services.map((service, index) => {
                            return <ServiceItem
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;