import React from "react";
import Theme from "../Themes/Theme";

class PacmanClock extends React.Component {
    componentDidMount() {
        this.ctx = this.refs.canvas.getContext("2d");
        this.w = 400;
        this.h = 400;
    }

    componentWillReceiveProps = nextProps => {
        this.updateCanvas();
    }

    updateCanvas = () => {

        this.ctx.clearRect(0, 0, this.w, this.h);

        this.drawHoursArc(150, Theme.secondary.color);
        // TODO: pick another color
        this.drawMinutesArc(100, "orange");
        this.drawSecondsArc(50, Theme.primary.contrastText);
    }

    drawSecondsArc(radius, color) {
        let degree = this.props.seconds / 60 * 2 * Math.PI;
        this.drawArc(degree, radius, color);
    }

    drawMinutesArc(radius, color) {
        let degree = this.props.minutes / 60 * 2 * Math.PI;
        this.drawArc(degree, radius, color);
    }

    drawHoursArc(radius, color) {
        let degree = this.props.hour / 12 * 2 * Math.PI;
        this.drawArc(degree, radius, color);
    }

    drawArc(toAngle, radius, color) {
        let centerX = this.w / 2;
        let centerY = this.h / 2;

        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.arc(centerX, centerY, radius, -Math.PI/2, toAngle - (Math.PI/2));
        this.ctx.fillStyle = color;
        this.ctx.closePath();
        this.ctx.fill();
    }

    render() {
        return (
            <div className="">
                <canvas ref="canvas" width={this.w} height={this.h} />
                <h1 style={{ color: Theme.primary.contrastText, fontSize: 40 }}> {this.props.hour}:{this.props.minutes}:{this.props.seconds}</h1>
            </div>
        )
    }
}

export default PacmanClock;