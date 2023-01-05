const pubsub = {};

// Пространство имен не загрезняет глоб область
// Singleton
(function (myObject) {
  // Хранилище тем
  const topics = {};

  // Идентификатор темы
  let subUid = -1;

  // Публикация и вещание события с
  // уникальным именем и аргументами
  myObject.publish = function (topic, args) {
    if (!topics[topic]) {
      return false;
    }

    const subscribers = topics[topic];
    let len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  };

  // Подписка на события с уникальным
  // именем и колбэком
  myObject.subscribe = function (topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    const token = (++subUid).toString();
    topics[topic].push({
      token,
      func,
    });
    return token;
  };

  // Отписка от темы
  myObject.unsubscribe = function (token) {
    for (const m in topics) {
      if (topics[m]) {
        for (let i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  };
}(pubsub));
