import React from 'react';
import { Accordion } from 'react-bootstrap';
import Breadcrumb from '../../Utilities/Breadcrumb/Breadcrumb';
import AccordionItem from '../../Utilities/AccordionItem/AccordionItem';
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';

const faqData = [
    {
        title: 'How to Register on RockyBook?',
        bodyText: "To start betting on RockyBook, follow these steps: 1. Reach out to us on WhatsApp at 9111191111 for registration assistance. 2. Explore our platform with a demo ID to get familiarized. 3. Deposit funds securely and provide a payment screenshot for verification. 4. After account verification, receive your playing chips. 5. Begin your thrilling betting journey on various sports events. Join RockyBook today for the best online cricket ID!"
    },
        {
            title: "Is sports betting legal?",
            bodyText: "Sports betting legality varies by jurisdiction. We strictly operate within the legal framework of the regions we serve. It is crucial to be aware of and comply with local laws and regulations concerning sports betting in your area."
        },
        {
            title: "How can I start betting?",
            bodyText: "To start betting, create an account on our platform. After registration, browse sports events, make selections, and set your stake. Our user-friendly interface ensures a seamless betting experience."
        },
        {
            title: "What sports can I bet on?",
            bodyText: "Our website offers a wide range of popular sports for betting, including football, basketball, soccer, baseball, tennis, and more. Explore our comprehensive list of events to find the perfect betting opportunities that align with your interests."
        },
        {
            title: "How are odds determined?",
            bodyText: "The determination of odds is based on a range of factors, including team strength, player performance, historical data, and market trends. Our team of odds experts thoroughly analyses all relevant information to ensure the provision of accurate and competitive odds for each event."
        },
       
        {
            title: "How do I contact customer support?",
            bodyText: "Contact our customer support team through live chat, email, or phone for any assistance. Click on the WhatsApp icon to learn more about how we can help address your queries or concerns. We are here to assist you conveniently and promptly."
        },
        {
            title: "Can I bet on mobile devices?",
            bodyText: "Our platform is optimized for mobile betting. Access our website on your smartphone or tablet to conveniently place bets, manage your account, and enjoy a seamless betting experience on the go."
        }
]

const Faqs = () => {
    return (
        <React.Fragment>


            {/* <Faq/> */}
            <section id="faq" className="faq-area ">
                
                <div className="container">
                <div className="col-lg-12">
                 <SectionTitle
                     titleSec='FAQs' />
                 </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <h4 className="mb-30">{'Change Your Style With Rocky Book. Get Your ID and Start Winning Now!'}</h4>
                                <p>{"Welcome to the Frequently Asked Questions (FAQ) section of Rocky Book. We understand that sports betting might raise various questions, especially if you're new to the world of betting or exploring our platform for the first time. This comprehensive FAQ is designed to provide you with clear and informative answers to some of the most common queries you might have."}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <Accordion className="accordion" id="accordionExample" defaultActiveKey="0">
                                    {
                                        faqData.map((data, index) => {
                                            const { title, bodyText } = data;
                                            return (
                                                <AccordionItem
                                                    id={index}
                                                    title={title}
                                                    body={bodyText} />
                                            );
                                        })
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </React.Fragment>
    )
}

export default Faqs;
