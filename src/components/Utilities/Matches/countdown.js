import React from 'react';
import matchBgImg from '../../../assets/img/slider/hero-13.jpeg';
import team1 from '../../../assets/img/matches/users.png';
import team2 from '../../../assets/img/matches/team2.jpeg';
import team3 from '../../../assets/img/matches/team3.jpeg';
import team4 from '../../../assets/img/matches/team4.jpeg';
import team5 from '../../../assets/img/matches/team5.jpeg';
import team6 from '../../../assets/img/matches/team6.png';
import "./counter.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import Counter from './counter';


const Countdown = () => {
    
    const matches = [
        {
            logoTeamOne: team1,
            teamTag1: 'Kangaaroos',
            teamName1: 'Australia',
            time: '7:30 IST',
            date: '1st  October 2021',
            logoTeamTwo: team2,
            teamName2: 'Pakistan',
            teamTag2: 'Le Panga',
        },
    ]

    return (
        <section id="match" className="match-area pt-10 pb-10" style={{ background: `url(${matchBgImg}) no-repeat center/cover`, backgroundBlendMode: `overlay`, backgroundColor: `rgba(0,0,0,0.6)` }}>
            <div className="container">
                            <div className="row align-items-center  fadeInDown animated " data-animation="fadeInRight" data-delay=".4s">
                            <div className="col-lg-3 mb-3">
                                    <div className="team ">
                                        <img src={team1} alt="left" width={"109px"} height={"170px"} />
                                        <div className="text">
                                        <Counter number={5000000} title=" + Active Users" />
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-3 mb-3">
                                    <div className="team">
                                        <img src={team1} alt="left" width={"109px"} height={"170px"} />
                                        <div className="text">
                                        <Counter number={2900000} title="+ Prize in Total" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-3" >
                                    <div className="team">
                                        <img src={team1} alt="left" width={"109px"} height={"170px"} />
                                        <div className="text">
                                        <Counter number={4030000} title="+ Daily Contests" />
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-3 mb-3">
                                    <div className="team">
                                         <img src={team1} alt="left" width={"109px"} height={"170px"} /> 
                                        <div className="text">
                                        <Counter number={2004000} title="+ Lucky Winners" />
                                        </div>
                                    </div>
                                </div>
                                
                                 <div className="divider"></div>
                            </div>
            </div>
        </section>
    );
}

export default Countdown;