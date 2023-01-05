class FSM {
  constructor(state) {
    this.activeState = state || null;
  }

  setState(state) {
    if (state) {
      this.activeState = state;
    }
  }

  update() {
    if (this.activeState) {
      this.activeState();
    }
  }
}
