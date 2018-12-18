import React from 'react';
import Chess from './chess';
import { EMPTY } from '../constant/chess';
import { COLORBOARD, PIECEBOARD } from '../constant/board';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.onChessClickHandle = this.onChessClickHandle.bind(this);
    this.onChessDragHandle = this.onChessDragHandle.bind(this);
    this.state = {
      piece: PIECEBOARD,
      color: COLORBOARD,
      clickedIndex: null,
    };
  }
  onChessClickHandle(index, e) {
    const piece = this.state.piece;
    const color = this.state.color;
    var clickedIndex = this.state.clickedIndex;
    if (clickedIndex === null) {
      if (this.state.piece[index] === EMPTY) {
        return;
      }
      this.setState({
        clickedIndex: index,
      })
      return;
    }
    piece[index] = this.state.piece[clickedIndex];
    piece[clickedIndex] = EMPTY;
    color[index] = this.state.color[clickedIndex];
    color[clickedIndex] = EMPTY;
    this.setState({
      piece: piece,
      color: color,
      clickedIndex: null,
    })
  }
  render() {
    const piece = this.state.piece;
    const color = this.state.color;
    const listChess = piece.map((val, key) =>
      <Chess
        key={key}
        id={key}
        val={val}
        color={color[key]}
        selected={this.state.clickedIndex == key}
        onChessClickHandle={this.onChessClickHandle}>
      </Chess>
    );
    return (
      <div className="board">
        <img alt="" src="images/bg.gif" />
        {listChess}
      </div>
    );
  }
}
export default Board;