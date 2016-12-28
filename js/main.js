const SnakeView = require("./snake_view.js");

$( () => {
  const $view = $(".snake");
  new SnakeView($view);
});
