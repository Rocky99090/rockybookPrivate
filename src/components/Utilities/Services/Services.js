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
                titlefirst={'Best Online '}
                titleSec={'Cricket Betting Sites'}
                className={'about-title second-title text-center'}
            />
            <div className="s-about-content " data-wow-delay=".4s">
            <p className='text-center'><b>WELCOME TO RockyBook - THE ULTIMATE DESTINATION FOR ONLINE GAMBLING SITES.
            WE OFFER A WIDE RANGE OF OPTIONS TO BET ON INCLUDING SPORTSBOOKS, LIVE CARDS & LIVE CASINO </b></p>
            <p>We offer a wide range of options to bet on, including sportsbooks, live cards, and live casino games. Our platform is designed to provide you with an exhilarating and seamless betting experience. Whether you're a seasoned bettor or a newcomer, you'll find an array of opportunities to test your skills and luck. From popular sports events and live card games to the thrill of live casinos, we have something for everyone. Enjoy instant deposits and withdrawals, 24/7 customer support, and a user-friendly interface that makes cricket betting sites easy and fun. Join us today and experience the excitement of online gambling at its best, only at RockyBook!</p>
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