import BellState from './BellState'
import ClockState from './ClockState'

class AlarmClock {
  constructor(State) {
    this.minute = 0;
    this.hour = 12;
    this.alarmHour = 6;
    this.alarmMinute = 0;
    this.alarmON = false;
    this.setState(ClockState);
  }
  setState(State) {
    this.state = new State(this);
  }

  minutes() {
    return this.minute;
  }
  hours() {
    return this.hour;
  }
  alarmMinutes() {
    return this.alarmMinute;
  }

  alarmHours() {
    return this.alarmHour;
  }

  isAlarmOn() {
    return this.alarmON;
  }
  isAlarmTime() {
    return this.minute === this.alarmMinute && this.hour === this.alarmHour;
  }

  getCurrentMode() {
    return this.state.mode;
  }


  clickMode() {
    this.state.clickMode();
  }
  longClickMode() {
    this.alarmON = !this.alarmON;
  }
  clickH() {
     this.state.clickH();
  }
  clickM() {
    this.state.clickM();
  }

  tick() {
    this.state.tick();
  }
}

export default AlarmClock;