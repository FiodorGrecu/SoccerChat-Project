import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import LeagueBar from './LeagueNameBar';
import Table from './Table';
import TopScorers from './TopScorers';



const useStyles = makeStyles({ 
  
});


export default function PLTable() {
  const classes = useStyles();

  const [season, setSeason] = useState("2020");
  const [standings, setStandings] = useState("General Standings");
  const [teams, setTeams] = useState([]);
  // const [season, setSeason] = useState("2020");


  // useEffect( () => {
  //   async function getPLTable() {
  //     const response = await fetch(`http://localhost:5000/api/table/${season}/${39}`)
  //     const data = await response.json();
  //     console.log(data);
  //     setTeams(data.response[0] || []);
  //   }  
  //   getPLTable();
  // }, [season]);



const numberRankBgrColor = {'1':'#0094E5', '2':'#0094E5', '3':'#0094E5', '4':'#0094E5', 
               '5':'#1175A8', '18':'#9E213F', '19':'#9E213F', '20':'#9E213F'};

const numberRanckColor = {'1':'white', '2':'white', '3':'white', '4':'white', 
'5':'white', '18':'white', '19':'white', '20':'white'};

  function Form({formString}) {
    const letterColor = {'W':'#23D24A', 'D': '#8B91A0', 'L':'#E72652'};
    const formBackground = [...formString].map(letter => (
      <span style={{backgroundColor:letterColor[letter], margin:'2px',
                    borderRadius:'3px', fontSize:'14px', paddingLeft:'7px',
                    paddingRight:'5px', paddingTop:'2px', textAlign:'center',}}>
            {letter}
      </span>
    ));


    return (
    
      <div style={{display:'flex'}}>
        <span style={{paddingLeft:'20px', paddingTop:'5px', width:'170px',
                   color:'white', fontSize:'0.6rem',
                  justifyContent:'center',}}>
          {formBackground}
        </span>
      </div>
    )
  } 
  
// const descriptionChampions = teams.league && teams.league.description;

  return (
    <div  style={{backgroundColor:'aliceblue',}}>
    <LeagueBar/>
    <div style={{display: "flex" ,}}>
      <div style={{ textAlign:'left', width:'219px', height:'63px', 
            backgroundColor:'white',paddingTop:'10px',paddingLeft:'10px',
            margin: '40px', marginLeft:'70px', borderRadius:'2%',
            textTransform:'uppercase', fontWeight:'bold' ,color: '#8e9cc5'}}>
          <div style={{width:'95%', }}>
            <span style={{ width:"95%", }}>Standing Type</span>
          </div>
          <div style={{display: "flex", paddingTop:'2px'}}>
            <select  onChange={e => (setStandings(e.target.value)) } style={{ width:"95%", fontWeight:'bold',
                    color:'#0094e5', border:'none'}}>
              <option style={{fontWeight:'bold'}} value='General Standings'>General Standings</option> 
              <option value='Top Scorers' >Top Scorers</option> 
            </select>
          </div>
      </div>
      <div style={{textAlign:'left', width:'219px', height:'63px', 
            backgroundColor:'white',paddingTop:'10px',paddingLeft:'10px',
            margin: '40px', marginLeft:'20px', borderRadius:'2%',
            textTransform:'uppercase', fontWeight:'bold' ,color: '#8e9cc5'}}>
        <div style={{width:'95%', }}>
          <span style={{ width:"95%", }}>Season</span>
        </div>
        <div >     
          <select onChange={e => (setSeason(e.target.value)) } style={{ width:"95%", fontWeight:'bold',
                    color:'#0094e5', border:'none'}}>
            <option value='2020'>2020/2021</option> 
            <option value='2019'>2019/2020</option> 
            <option value='2018'>2018/2019</option> 
            <option value='2017'>2017/2018</option> 
            <option value='2016'>2016/2017</option> 
            <option value='2015'>2015/2016</option> 
            <option value='2014'>2014/2015</option> 
            <option value='2013'>2013/2014</option> 
            <option value='2012'>2012/2013</option> 
            <option value='2011'>2011/2012</option> 
            <option value='2010'>2010/2011</option> 
          </select>
        </div>  
      </div>
    </div>
    
    {standings === 'General Standings' ? <Table season={season}/> : <TopScorers season={season}/>}
          
</div>
  );
}
