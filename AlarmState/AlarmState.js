import State from './State';
import ClockState from './ClockState';
import BellState from './BellState';

export default class AlarmState extends State {
  constructor(clock) {
    super(clock);
    this.mode = 'alarm';
  }

  tick() {
    this._setMinutes(true);

    if (this.clock.isAlarmTime() && this.clock.isAlarmOn()) {
      this.clock.setState(BellState);
    }
  }

  _setAlarmMinutes(increment) {
    if (increment) {
      this.clock.alarmMinute = (this.clock.alarmMinute + 1) % 60;
    } else {
      this.clock.alarmMinute = this.clock.alarmMinute ? (this.clock.alarmMinute - 1) : 59;
    }
  }

  _setAlarmHours(increment) {
    if (increment) {
      this.clock.alarmHour = (this.clock.alarmHour + 1) % 24;
    } else {
      this.clock.alarmHour = this.clock.alarmHour ? (this.clock.alarmHour - 1) : 24;
    }
  }

  clickMode() {
    return this.clock.setState(ClockState);
  }

  longClickMode() {
    return new Error('abstract method');
  }

  clickH() {
    this._setAlarmHours(true);
  }

  clickM() {
    this._setAlarmMinutes(true);
  }
}
