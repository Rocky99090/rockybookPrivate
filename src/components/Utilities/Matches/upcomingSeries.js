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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './counter.css'

const UpcomingSeries = () => {
    
    const apiUrl = 'https://api.cricapi.com/v1/series';
    const apiKey = 'ab12eb5d-64bd-40fe-8b1c-bd49af32eddd';
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
            name: match.name?match.name:"",
            endDate: match.endDate?match.endDate:"",
            startDate: match.startDate?match.startDate:"",
            odi: match.odi?match.odi:0,
            t20: match.t20?match.t20:0,
            test: match.test?match.test:0,
            totalMatches: match.matches?match.matches:"",
            totalTeams: match.squads?match.squads:2
          }));
  
          setMatches(formattedMatches);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    const itemsPerPage = 3; // Number of matches per page
    const pageCount = Math.ceil(currentMatches.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleChangePage = (event, newPage) => {
      setCurrentPage(newPage);
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  


    return (
        <section id="match" className="match-area1 pt-10 pb-10" >
            {currentMatches.length>0?
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        <SectionTitle titlefirst='Upcoming' titleSec='Tournaments' />
                    </div>
                </div>
                <div>
                </div>
  
                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                        {currentMatches.slice(startIndex, endIndex).map((match, index) => {
                                            const {
                                                name,
                                                endDate,
                                                startDate,
                                                odi,
                                                t20,
                                                date,
                                                test,
                                                totalMatches,
                                                totalTeams
                                            } = match;
                                            return (
                                        <Grid  xs={2} sm={4} md={4} key={index} marginBottom={"30px"}>
                                    <Card  sx={{ minWidth: 275 }}>
                                    <CardContent className='card-name' >
                                        <Typography sx={{ fontSize: 14,mb: 1  }} textAlign="center" color="white" gutterBottom>
                                        {startDate} - {endDate}
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 1 }} textAlign="center" color="white"  component="div">
                                        {name}
                                        </Typography>
                                        <Typography sx={{ mb: 1 }} textAlign="center" color="white" >
                                            ODI : {odi}
                                        
                                        </Typography>
                                        <Typography sx={{ mb: 1 }} textAlign="center" color="white" >
                                            T20 : {t20}
                                        </Typography>
                                        <Typography sx={{ mb: 1 }} textAlign="center" color="white" >
                                             TEST :{test}
                                        
                                        </Typography>
                                        <Typography sx={{ mb: 1 }} textAlign="center" color="white" >
                                             Total Teams :{totalTeams}
                                        
                                        </Typography>
                                    </CardContent>
                                    </Card>
                                        </Grid>
                                        )})}
                                    </Grid>
                                </Box>
 
                {/* {
                    matches.slice(startIndex, endIndex).map((match, index) => {
                        const {
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
                                    <img src={logoTeamOne} alt="left" width={"59px"} height={"50px"}  />
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
                                        <img src={logoTeamTwo} alt="left"  width={"59px"} height={"50px"} />
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

export default UpcomingSeries;