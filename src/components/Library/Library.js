import { Howl } from 'howler';
// Sound Library
import rockHat1 from '../../assets/sounds/rock/hat1.mp3';
import rockHat2 from '../../assets/sounds/rock/hat2.mp3';
import rockHat3 from '../../assets/sounds/rock/hat3.mp3';
import rockHat4 from '../../assets/sounds/rock/hat4.mp3';
import rockSnare1 from '../../assets/sounds/rock/snare1.mp3';
import rockSnare2 from '../../assets/sounds/rock/snare2.mp3';
import rockSnare3 from '../../assets/sounds/rock/snare3.mp3';
import rockStick from '../../assets/sounds/rock/stick.mp3';
import rockKick from '../../assets/sounds/rock/kick.mp3';

import hipHopHat1 from '../../assets/sounds/hipHop/hat1.mp3';
import hipHopHat2 from '../../assets/sounds/hipHop/hat2.mp3';
import hipHopHat3 from '../../assets/sounds/hipHop/hat3.mp3';
import hipHopHat4 from '../../assets/sounds/hipHop/hat4.mp3';
import hipHopSnare1 from '../../assets/sounds/hipHop/snare1.mp3';
import hipHopSnare2 from '../../assets/sounds/hipHop/snare2.mp3';
import hipHopSnare3 from '../../assets/sounds/hipHop/snare3.mp3';
import hipHopStick from '../../assets/sounds/hipHop/stick.mp3';
import hipHopKick from '../../assets/sounds/hipHop/kick.mp3';

import danceHat1 from '../../assets/sounds/dance/hat1.mp3';
import danceHat2 from '../../assets/sounds/dance/hat2.mp3';
import danceHat3 from '../../assets/sounds/dance/hat3.mp3';
import danceHat4 from '../../assets/sounds/dance/hat4.mp3';
import danceSnare1 from '../../assets/sounds/dance/snare1.mp3';
import danceSnare2 from '../../assets/sounds/dance/snare2.mp3';
import danceSnare3 from '../../assets/sounds/dance/snare3.mp3';
import danceStick from '../../assets/sounds/dance/stick.mp3';
import danceKick from '../../assets/sounds/dance/kick.mp3';

import dubstepHat1 from '../../assets/sounds/dubstep/hat1.mp3';
import dubstepHat2 from '../../assets/sounds/dubstep/hat2.mp3';
import dubstepHat3 from '../../assets/sounds/dubstep/hat3.mp3';
import dubstepHat4 from '../../assets/sounds/dubstep/hat4.mp3';
import dubstepSnare1 from '../../assets/sounds/dubstep/snare1.mp3';
import dubstepSnare2 from '../../assets/sounds/dubstep/snare2.mp3';
import dubstepSnare3 from '../../assets/sounds/dubstep/snare3.mp3';
import dubstepStick from '../../assets/sounds/dubstep/stick.mp3';
import dubstepKick from '../../assets/sounds/dubstep/kick.mp3';

import bark from '../../assets/sounds/effects/bark.mp3';
import glass from '../../assets/sounds/effects/glass.mp3';
import scream from '../../assets/sounds/effects/scream.mp3';
import sheep from '../../assets/sounds/effects/sheep.mp3';
import wrong from '../../assets/sounds/effects/wrong.mp3';


const createLibrary = (keyCodes, keyLetters, drums) => {
  const lib = {};
  for (let i = 0; i < keyCodes.length; i++) {
    lib[keyCodes[i]] = {
      sound: new Howl({
        src: [drums[i]]
      }),
      id: keyLetters[i]
    }
  }
  return lib;
}

const keyCodes = ['73', '74', '75', '76', '87', '65', '83', '68', '32'];
const keyLetters = ['i','j', 'k', 'l', 'w', 'a', 's', 'd', 'space'];
const rockDrums = [rockHat1, rockHat2, rockHat3, rockHat4, rockSnare1, rockSnare2, rockSnare3, rockStick, rockKick];
const hipHopDrums = [hipHopHat1, hipHopHat2, hipHopHat3, hipHopHat4, hipHopSnare1, hipHopSnare2, hipHopSnare3, hipHopStick, hipHopKick];
const danceDrums = [danceHat1, danceHat2, danceHat3, danceHat4, danceSnare1, danceSnare2, danceSnare3, danceStick, danceKick];
const dubstepDrums = [dubstepHat1, dubstepHat2, dubstepHat3, dubstepHat4, dubstepSnare1, dubstepSnare2, dubstepSnare3, dubstepStick, dubstepKick];
const effects = [bark, glass, scream, sheep, wrong].map(effect => new Howl({ src: effect }));

const rock = createLibrary(keyCodes, keyLetters, rockDrums);
const hiphop = createLibrary(keyCodes, keyLetters, hipHopDrums);
const dance = createLibrary(keyCodes, keyLetters, danceDrums);
const dubstep = createLibrary(keyCodes, keyLetters, dubstepDrums);

const library = {
  rock,
  hiphop,
  dance,
  dubstep,
  effects
};

export default library;