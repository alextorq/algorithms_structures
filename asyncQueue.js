class Task {
  constructor(taskPayload) {
    this.taskPayload = taskPayload;
  }

  /**
   * @param {Function} executor
   * @returns {Promise}
   */
  async execute(executor) {
    return new Promise((resolve) => {
      executor(this.taskPayload, resolve);
    });
  }
}

class TaskCb {
  static id = 0;

  constructor(taskPayload) {
    this.taskPayload = taskPayload;
    this.id = TaskCb.id++;
  }

  /**
   * @param {Function} executor
   */
  async execute(executor, resolve) {
    executor(this.taskPayload, resolve);
  }
}

// extends eventEmiter
class AsyncQueue {
  constructor(processTask, amountTreads, emptyHandler) {
    this.processTask = processTask;
    this.amountTreads = amountTreads;
    this.emptyHandler = emptyHandler;

    this.tasks = [];
  }

  add(taskPayload) {
    const task = new Task(taskPayload);
    this.tasks.push(task);
  }

  async loop() {
    const treads = new Array(this.amountTreads)
      .fill(null)
      .map(this.createTread.bind(this));

    await Promise.all(treads);
    this.emptyHandler();
  }

  async createTread() {
    let task;

    while ((task = this.tasks.shift())) {
      await task.execute(this.processTask);
    }
  }
}

const rundomExecute = (task, resolve) => {
  const time = Math.floor(1000 + 1000 * Math.random());

  setTimeout(() => {
    console.log('task', task, 'is finish');
    resolve();
  }, time);
};

const queue = new AsyncQueue(rundomExecute, 3, () => console.log('all done'));

queue.add('asd 1');
queue.add('asd 2');
queue.add('asd 3');
queue.add('asd 4');
queue.add('asd 5');

// queue.loop()

class AsyncQueueCb {
  constructor(processTask, amountTreads, emptyHandler) {
    this.processTask = processTask;
    this.amountTreads = amountTreads;
    this.emptyHandler = emptyHandler;

    this.tasks = [];
    this.processedTask = [];
  }

  add(taskPayload) {
    const task = new TaskCb(taskPayload);
    this.tasks.push(task);
  }

  loop(amount = this.amountTreads) {
    const processed = this.tasks.splice(0, amount);
    this.processedTask.push(...processed);

    if (this.checkIsDone()) return this.emptyHandler();

    processed.forEach((task) => {
      task.execute(this.processTask, this.doneTask.bind(this, task));
    });
  }

  doneTask(task) {
    this.processedTask.filter((item) => item.id !== task.id);
    this.loop(1);
  }

  checkIsDone() {
    return this.processedTask.length === 0 && this.tasks.length === 0;
  }
}

const queueCb = new AsyncQueueCb(rundomExecute, 3, () => console.log('all done'));

queueCb.add('asd 1');
queueCb.add('asd 2');
queueCb.add('asd 3');
queueCb.add('asd 4');
queueCb.add('asd 5');

queueCb.loop();
