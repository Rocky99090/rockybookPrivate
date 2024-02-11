import React, { useEffect, useState } from 'react';
import axios from 'axios';
import matchBgImg from '../../../assets/img/slider/hero12.png';
import team1 from '../../../assets/img/matches/team1.jpeg';
import team2 from '../../../assets/img/matches/team2.jpeg';
import team3 from '../../../assets/img/matches/team3.jpeg';
import team4 from '../../../assets/img/matches/team4.jpeg';
import team5 from '../../../assets/img/matches/team5.jpeg';
import team6 from '../../../assets/img/matches/team6.png';
import aboutBgImg from '../../../assets/img/matches/rocky.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Matches = () => {
    
    const apiUrl = 'https://api.cricapi.com/v1/currentMatches';
    const apiKey = 'e32e64aa-9b01-40a3-8b93-a1490241c60b';
    const img = 'https://h.cricapi.com/img/icon512.png'
    //ab12eb5d-64bd-40fe-8b1c-bd49af32eddd
    const offset = 0;
    const [currentMatches, setMatches] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl, {
            params: {
              apikey: apiKey,
              offset: offset,
            }
          });
          const formattedMatches = response.data.data.map(match => ({
            logoTeamOne: img,
            teamTag1: match&&match.teamInfo? match.teamInfo[0].shortname:'Unknown',
            teamName1: match&&match.teamInfo? match.teamInfo[0].name:'Unknown',
            team1Score: match&&match.score[0]?match.score[0].r:"Still To Bat",
            team2Score: match&&match.score[1]?match.score[1].r:"Still To Bat",
            wicketsTeamOne: match&&match.score[0]?match.score[0].w:"",
            oversTeamOne: match&&match.score[0]?match.score[0].o:"",
            wicketsTeamTwo: match&&match.score[1]?match.score[1].w:"",
            oversTeamTwo: match&&match.score[1]?match.score[1].o:"",
            status1 : match&&match.status?match.status:'',
            time: match&&match.name?match.name:'',
            date: match&&match.date?match.date:'',
            logoTeamTwo: img,
            teamName2: match&&match.teamInfo&&match.teamInfo[1]?match.teamInfo[1].name:"Unknown",
            teamTag2: match&&match.teamInfo&&match.teamInfo[1]?match.teamInfo[1].shortname:"Unknown",
            
          }));
  
          setMatches(formattedMatches);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    // const matches = [
    //     {
    //         logoTeamOne: team1,
    //         teamTag1: 'Kangaaroos',
    //         teamName1: 'Australia',
    //         time: '7:30 IST',
    //         date: '1st  October 2021',
    //         logoTeamTwo: team2,
    //         teamName2: 'Pakistan',
    //         teamTag2: 'Le Panga',
    //     },
    //     {
    //         logoTeamOne: team2,
    //         teamTag1: 'Lankians',
    //         teamName1: 'Sri Lanka',
    //         time: '7:30 IST',
    //         date: '2nd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team5,
    //         teamTag1: 'Men In Blue',
    //         teamName1: 'India',
    //         time: '7:30 IST',
    //         date: '3rd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team1,
    //         teamTag1: 'Kangaaroos',
    //         teamName1: 'Australia',
    //         time: '7:30 IST',
    //         date: '1st  October 2021',
    //         logoTeamTwo: team2,
    //         teamName2: 'Pakistan',
    //         teamTag2: 'Le Panga',
    //     },
    //     {
    //         logoTeamOne: team3,
    //         teamTag1: 'Lankians',
    //         teamName1: 'Sri Lanka',
    //         time: '7:30 IST',
    //         date: '2nd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team5,
    //         teamTag1: 'Men In Blue',
    //         teamName1: 'India',
    //         time: '7:30 IST',
    //         date: '3rd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team1,
    //         teamTag1: 'Kangaaroos',
    //         teamName1: 'Australia',
    //         time: '7:30 IST',
    //         date: '1st  October 2021',
    //         logoTeamTwo: team2,
    //         teamName2: 'Pakistan',
    //         teamTag2: 'Le Panga',
    //     },
    //     {
    //         logoTeamOne: team3,
    //         teamTag1: 'Lankians',
    //         teamName1: 'Sri Lanka',
    //         time: '7:30 IST',
    //         date: '2nd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team5,
    //         teamTag1: 'Men In Blue',
    //         teamName1: 'India',
    //         time: '7:30 IST',
    //         date: '3rd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team1,
    //         teamTag1: 'Kangaaroos',
    //         teamName1: 'Australia',
    //         time: '7:30 IST',
    //         date: '1st  October 2021',
    //         logoTeamTwo: team2,
    //         teamName2: 'Pakistan',
    //         teamTag2: 'Le Panga',
    //     },
    //     {
    //         logoTeamOne: team3,
    //         teamTag1: 'Lankians',
    //         teamName1: 'Sri Lanka',
    //         time: '7:30 IST',
    //         date: '2nd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team5,
    //         teamTag1: 'Men In Blue',
    //         teamName1: 'India',
    //         time: '7:30 IST',
    //         date: '3rd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team1,
    //         teamTag1: 'Kangaaroos',
    //         teamName1: 'Australia',
    //         time: '7:30 IST',
    //         date: '1st  October 2021',
    //         logoTeamTwo: team2,
    //         teamName2: 'Pakistan',
    //         teamTag2: 'Le Panga',
    //     },
    //     {
    //         logoTeamOne: team3,
    //         teamTag1: 'Lankians',
    //         teamName1: 'Sri Lanka',
    //         time: '7:30 IST',
    //         date: '2nd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    //     {
    //         logoTeamOne: team5,
    //         teamTag1: 'Men In Blue',
    //         teamName1: 'India',
    //         time: '7:30 IST',
    //         date: '3rd  October 2021',
    //         logoTeamTwo: team4,
    //         teamName2: 'New Zealand',
    //         teamTag2: 'Black Caps',
    //     },
    // ]
    const itemsPerPage = 3; // Number of matches per page
    const pageCount = Math.ceil(currentMatches.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleChangePage = (event, newPage) => {
      setCurrentPage(newPage);
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
 

    return (
        <section id="match" className="match-area pt-10 pb-10">
            {currentMatches.length>0?
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        <SectionTitle titlefirst='Upcoming' titleSec='Matches' />
                    </div>
                </div>
                <div>
                </div>
                {/* {
                    currentMatches.slice(startIndex, endIndex).map((match, index) => {
                        const {
                            logoTeamOne,
                            teamTag1,
                            teamName1,
                            logoTeamTwo,
                            time,
                            date,
                            teamTag2,
                            teamName2,
                        } = match;
                        return (
                            <div className="row align-items-center  wow fadeInDown animated " data-animation="fadeInRight" data-delay=".4s">
                                <div className="col-lg-5">
                                    <div className="team">
                                        <img src={logoTeamOne} alt="left" width={"189px"} height={"170px"} />
                                        <div className="text">
                                            <h3>{teamName1}</h3>
                                            <span>{teamTag1}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="match-time text-center">
                                        <h4>{time}</h4>
                                        <span>{date}</span>
                                    </div>
                                </div>
                                <div className="col-lg-5 section">
                                    <div className="team2">
                                        <img src={logoTeamTwo} alt="left" width={"189px"} height={"170px"} />
                                        <div className="text">
                                            <h3>{teamName2}</h3>
                                            <span>{teamTag2}</span>
                                        </div>
                                    </div>
                                </div>
                                 <div className="divider"></div>
                                
                            </div>
                            

                        );
                    })
                } */}
                {
                    currentMatches.slice(startIndex, endIndex).map((match, index) => {
                        const {
                            logoTeamOne,
                            teamTag1,
                            teamName1,
                            logoTeamTwo,
                            time,
                            date,
                            teamTag2,
                            teamName2,
                            team1Score,
                            team2Score,
                            status1,
                            wicketsTeamOne,
                            wicketsTeamTwo,
                            oversTeamOne,
                            oversTeamTwo
                            
                        } = match;
                        return (
                            <div className="row align-items-center  wow fadeInDown animated " data-animation="fadeInRight" data-delay=".4s">
                                <div className="col-lg-5">
                                    <div className="team">
                                    <img src={logoTeamOne} alt="left" width={"189px"} height={"173px"}  />
                                        <div className="text">
                                            <h3>{teamName1}</h3>
                                            {wicketsTeamOne?
                                            <span>
                                            Score: {team1Score}/{wicketsTeamOne} in {oversTeamOne} overs</span>
                                        :<span>{team1Score}</span>}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-2">
                                    <div className="match-time text-center">
                                        <h4>{time}</h4>
                                        <span>{status1}</span>
                                    </div>
                                </div>
                                <div className="col-lg-5 section">
                                    <div className="team2">
                                        <img src={logoTeamTwo} alt="left"  width={"189px"} height={"173px"} />
                                        <div className="text">
                                            <h3>{teamName2}</h3>
                                            {wicketsTeamTwo?
                                            <span>
                                            Score: {team2Score}/{wicketsTeamTwo} in {oversTeamTwo} overs</span>
                                        :<span>{team2Score}</span>}
                                        </div>
                                    </div>
                                </div>
                                 <div className="divider"></div>
                            </div>

                        );
                    })
                }
                 <Stack color={'whitesmoke'} spacing={2}>

                <   Pagination
                count={pageCount}
                page={currentPage}
                onChange={handleChangePage} 
                 variant="outlined" color="primary" />
                </Stack> 
                 {/* {
                    currentMatches.map(match => {
                        const {
                            logoTeamOne,
                            teamTag1,
                            teamName1,
                            logoTeamTwo,
                            time,
                            date,
                            teamTag2,
                            teamName2,
                            team1Score,
                            team2Score,
                            status1,
                            wicketsTeamOne,
                            wicketsTeamTwo,
                            oversTeamOne,
                            oversTeamTwo
                            
                        } = match;
                        return (
                            <div className="row align-items-center  wow fadeInDown animated " data-animation="fadeInRight" data-delay=".4s">
                                <div className="col-lg-5">
                                    <div className="team">
                                    <img src={logoTeamOne} alt="left" width={"189px"} height={"170px"}  />
                                        <div className="text">
                                            <h3>{teamName1}</h3>
                                            {wicketsTeamOne?
                                            <span>
                                            Score: {team1Score}/{wicketsTeamOne} in {oversTeamOne} overs</span>
                                        :<span>{team1Score}</span>}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-2">
                                    <div className="match-time text-center">
                                        <h4>{time}</h4>
                                        <span>{status1}</span>
                                    </div>
                                </div>
                                <div className="col-lg-5 section">
                                    <div className="team2">
                                        <img src={logoTeamTwo} alt="left"  width={"189px"} height={"170px"} />
                                        <div className="text">
                                            <h3>{teamName2}</h3>
                                            {wicketsTeamTwo?
                                            <span>
                                            Score: {team2Score}/{wicketsTeamTwo} in {oversTeamTwo} overs</span>
                                        :<span>{team2Score}</span>}
                                        </div>
                                    </div>
                                </div>
                                 <div className="divider"></div>
                            </div>

                        );
                    })
                } */}
            </div>:""}
        </section>
    );
}

export default Matches;
