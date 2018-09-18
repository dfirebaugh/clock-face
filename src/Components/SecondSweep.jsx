import React from "react";
import Theme from '../Themes/Theme';

const styles = `
.clock-container{
    background:${Theme.primary.contrastText};
    margin-top:20vh;
    width: 90%;
}
h2 {
    font-size: 48px;
}
.clock-container p {
    font-size:48px;
}
.seconds-sweep{
    background:${Theme.primary.contrastText};
    color:${Theme.primary.color};
    border: ${Theme.primary.color} solid 5px;
    width:18vw;
    height:18vh;
}
.hour{
    background:${Theme.secondary.color};
    color:${Theme.secondary.contrastText};
    border: ${Theme.secondary.color} solid 5px;
    height:18vh;
}
.minutes{
    background:${Theme.secondary.contrastText};
    color:${Theme.secondary.color};
    border: ${Theme.secondary.contrastText} solid 5px;
    height:18vh;
}
.float-right{
    float:right;
}
 `

const SecondSweep = props => {

    return (
        <div className='clock-container'>
            <div className='hour' style={{ width: `${props.hour / 12 * 100}%` }}>
                <h2>
                    {props.hour}
                </h2>
            </div>
            <div className='minutes' style={{ width: `${props.minutes / 60 * 100}%` }}>
                <h2>
                    {props.minutes}
                </h2>
            </div>
            <div className={props.seconds % 2 === 0 ? 'float-right seconds-sweep' : 'seconds-sweep'}>
                <h2>
                    {props.seconds}
                </h2>
            </div>
            <style jsx> {styles} </style>
        </div >
    )
}



export default SecondSweep;