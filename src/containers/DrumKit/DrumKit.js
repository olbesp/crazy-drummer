import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './DrumKit.css';
import Drum from '../../components/Drum/Drum';
import * as actions from '../../store/actions/index';

class DrumKit extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.props.onKeyPressed);
    document.addEventListener('keyup', this.props.onKeyReleased);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onKeyPressed);
    document.removeEventListener('keyup', this.props.onKeyReleased);
  }

  componentDidUpdate() {
    if (((this.props.drumKeyCode >= 65 && this.props.drumKeyCode <= 90) 
      || this.props.drumKeyCode === 32) && this.props.genre) {
      const drum = this.props.library[this.props.genre][`${this.props.drumKeyCode}`]
      if (drum) {
        drum.sound.play();
      } else {
        this.props.library.effects[Math.floor(Math.random() * this.props.library.effects.length)].play();
      }
    }
  }

  render() {
    const drums = [
      { drumClass: 'Hat1', drumButton: 'i' },
      { drumClass: 'Hat2', drumButton: 'j' },
      { drumClass: 'Hat3', drumButton: 'k' },
      { drumClass: 'Hat4', drumButton: 'l' },
      { drumClass: 'Snare1', drumButton: 'w' },
      { drumClass: 'Snare2', drumButton: 'a' },
      { drumClass: 'Snare3', drumButton: 's' },
      { drumClass: 'Snare4', drumButton: 'd' },
      { drumClass: 'Kick', drumButton: 'space' }
    ];

    const DOMdrums = drums.map((drum, index) => (
      <Drum
        key={index}
        drumClass={drum.drumClass}
        drumButton={drum.drumButton}
      />
    ));

    return (
      <div
        className={styles.DrumKit}
        onMouseDown={this.props.onDrumClickedDown}
        onMouseUp={this.props.onDrumClickedUp}
      >
        <div className={styles.DrumsContainer}>
          { DOMdrums }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drumKeyCode: state.drums.drumKeyCode
});

const mapDispatchToProps = dispatch => ({
  onKeyPressed: event => dispatch(actions.keyPressed(event)),
  onKeyReleased: () => dispatch(actions.keyReleased()),
  onDrumClickedDown: event => dispatch(actions.drumClickedDown(event)),
  onDrumClickedUp: () => dispatch(actions.drumClickedUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(DrumKit);