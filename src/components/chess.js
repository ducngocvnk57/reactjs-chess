import React from 'react';
import { ChessImage } from '../constant/images';
class Chess extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.onChessClickHandle(this.props.id, e);
  }
  render() {
    const index = this.props.id;
    var temp = index % 9;
    var j = (index - temp) / 9;
    const left = temp * 60 + 25;
    const top = j * 60 + 25;
    var chessStyle = {
      top: top,
      left: left,
    };
    if (this.props.selected) {
      chessStyle = {
        top: top,
        left: left,
        border: '2px solid palevioletred',
      }
    }
    if (this.props.val !== 7) {
      return (
        <div className="chess" style={chessStyle} onClick={this.handleClick}>
          <img alt="" src={ChessImage[this.props.color][this.props.val]} />
        </div>
      );
    }
    return (
      <div className="chess" style={chessStyle} onClick={this.handleClick}></div>
    )
  }
}
export default Chess;