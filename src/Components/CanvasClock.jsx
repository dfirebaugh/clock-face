import React from 'react';
import Theme from '../Themes/Theme';

class CanvasClock extends React.Component {
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

    this.ctx.fillStyle = Theme.secondary.contrastText;
    this.ctx.fillRect(0, 0, this.w, this.h);

    this.ctx.fillStyle = Theme.primary.contrastText;
    this.ctx.fillRect(
      this.props.hour + this.w / 2 - 30,
      10,
      100,
      this.w / 3 - 20
    );

    this.ctx.fillStyle = Theme.primary.color;
    this.ctx.fillRect(
      this.props.minutes * 5 - 10,
      145,
      100,
      this.w / 3 - 20
    );

    this.ctx.fillStyle = Theme.secondary.color;
    this.ctx.fillRect(
      this.props.seconds * 5 - 10,
      this.h - 120,
      100,
      this.w / 3 - 20
    );
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

export default CanvasClock;