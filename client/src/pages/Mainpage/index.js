import React from 'react'
import videoBg from '../../assets/1661218419142686.mp4'
import { useStyles } from "./styles.js";
const Mainpage=()=>{
    const classes = useStyles();
    return (
        <div className={classes.main}>
    <div className={classes.video}>
        <video src={videoBg} autoPlay loop muted/>
        <div className={classes.content}>
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
            <div className={classes.right}>
                <h1>Welcome</h1>
                <p>To my site.</p>
            </div>
        </div>
)
}

export default Mainpage