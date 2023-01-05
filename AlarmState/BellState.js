import State from './State';
import ClockState from './ClockState';

export default class BellState extends State {
  constructor(clock) {
    super(clock);
    this.mode = 'bell';
  }

  tick() {
    this.clock.setState(ClockState);
    this._setMinutes(true);
  }

  clickMode() {
    this.clock.setState(ClockState);
  }

  longClickMode() {
    return new Error('abstract method');
  }

  clickH() {

  }

  clickM() {

  }
}
