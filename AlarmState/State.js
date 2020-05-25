export default class State {
  constructor(clock) {
    this.clock = clock;

  }

 _setMinutes(increment) {
    if(increment) {
      this.clock.minute = (this.clock.minute + 1) % 60;
      if(!this.clock.minute){this._setHours(increment)}
    }else {
      if(!this.clock.minute){this._setHours()}
      this.clock.minute = this.clock.minute ? (this.clock.minute - 1) : 59;
    }
  }
  _setHours(increment) {
    if(increment) {
      this.clock.hour = (this.clock.hour + 1) % 24;
    }else {
      this.clock.hour = this.clock.hour ? (this.clock.hour - 1) : 24;
    }
  }


  clickMode() {
    return new Error('abstract method');
  }
  longClickMode() {
    return new Error('abstract method');
  }
  clickH() {
    return new Error('abstract method');
  }
  clickM() {
    return new Error('abstract method');
  }
}




