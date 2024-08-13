let data = [];

function logType(data) {
  switch (typeof data) {
    case "object":
      // The order of your if conditions IS important. 💡
      if (Array.isArray(data)) {
        console.log("this IS an array");
      } else if (data === null) {
        console.log("null!");
      } else {
        /* Since `null` and arrays have been ruled out by the previous two tests,
                we can safely log 'object!' here if `typeof` tells us to. */
        console.log("object!");
      }
      break;
    case "bigint":
      console.log("bigint!");
      break;
    case "number":
      if (Number.isNaN(data)) {
        console.log("not a number!");
      } else {
        console.log("number!");
      }
      break;
    case "string":
      console.log("string!");
      break;
    case "boolean":
      console.log("boolean!");
      break;
    case "undefined":
      console.log("undefined!");
      break;
    case "function":
      console.log("function!");
      break;
    default:
      console.log("i have no idea!");
      break;
  }
}
logType(data);
