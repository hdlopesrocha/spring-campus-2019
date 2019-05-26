export abstract class AudioComponent {

  public soundEnabled = false;
  public audioContext: AudioContext;

  constructor() {
    this.audioContext = new AudioContext();
  }

  abstract stopSound() : void ;
}
