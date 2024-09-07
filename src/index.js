import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class HanoiTowerGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disks: [
        { id: 1, size: 3 },
        { id: 2, size: 2 },
        { id: 3, size: 1 }
      ],
      pegs: [
        { id: 1, disks: [] },
        { id: 2, disks: [] },
        { id: 3, disks: [] }
      ],
      selectedDisk: null,
      selectedPeg: null
    };
  }

  handleDiskClick = (diskId) => {
    this.setState({ selectedDisk: diskId });
  };

  handlePegClick = (pegId) => {
    if (this.state.selectedDisk) {
      const disk = this.state.disks.find((disk) => disk.id === this.state.selectedDisk);
      const peg = this.state.pegs.find((peg) => peg.id === pegId);
      if (peg.disks.length === 0 || peg.disks[peg.disks.length - 1].size > disk.size) {
        peg.disks.push(disk);
        this.setState({ pegs: this.state.pegs, selectedDisk: null });
      }
    }
  };

  render() {
    return (
      <div id="root">
        <h1>Hanoi Tower Game</h1>
        <div className="game-board">
          {this.state.pegs.map((peg) => (
            <div key={peg.id} className="peg" onClick={() => this.handlePegClick(peg.id)}>
              {peg.disks.map((disk) => (
                <div key={disk.id} className="disk" style={{ width: `${disk.size * 20}px` }} />
              ))}
            </div>
          ))}
        </div>
        <div className="disk-list">
          {this.state.disks.map((disk) => (
            <div key={disk.id} className="disk" style={{ width: `${disk.size * 20}px` }} onClick={() => this.handleDiskClick(disk.id)} />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HanoiTowerGame />, document.getElementById('root'));