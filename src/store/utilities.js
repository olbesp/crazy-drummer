import { Howl } from 'howler';

export const createLibrary = (keyCodes, keyLetters, drums) => {
  const lib = {};
  for (let i = 0; i < keyCodes.length; i++) {
    lib[keyCodes[i]] = {
      sound: new Howl({
        src: drums[i]
      }),
      id: keyLetters[i]
    }
  }

  return lib;
};
