// import { responsiveFontSizes } from "@material-ui/core";
import React from 'react';
import Background_pic from '/Users/Work/Desktop/MyProject/frontend/src/components/background.png';


export default function HomePage() {
    return (
        <div>
            <h1>Premier League</h1>
            <img src={Background_pic} className="Background" alt="Stadium picture" />
        </div>
    )
}

// import React from 'react';
// import Paper from 'material-ui/Paper';
// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
// import Image from './components/background.png'; // Import using relative path

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Image})`
//     }
// };

// export default class Home extends React.Component{
//     render(){
//         return(
//             <Paper style={styles.paperContainer}>

//             </Paper>
//         )
//     }
// }