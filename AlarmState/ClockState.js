import State from './State';
import AlarmState from './AlarmState'
import BellState from './BellState'

export default class ClockState extends State {
  constructor(clock) {
    super(clock);
    this.mode = 'clock';
  }

  tick() {
    this._setMinutes(true)
    if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
      this.clock.setState(BellState);
    }

  }

  clickMode() {
    this.clock.setState(AlarmState);
  }
  longClickMode() {
    this.clock.setState(BellState);
  }
  clickH() {
    this._setHours(true);
  }
  clickM() {
    this._setMinutes(true);
  }
}