// This should convert the Date function into an actual readable date for humans.

function getTimeStamp() {
  const now = new Date();
  return (`${now.getMonth() + 1}/${
    now.getDate()}/${
    now.getFullYear()} ${
    now.getHours()}:${
    (now.getMinutes() < 10)
      ? (`0${now.getMinutes()}`)
      : (now.getMinutes())}:${
    (now.getSeconds() < 10)
      ? (`0${now.getSeconds()}`)
      : (now.getSeconds())}`);
}

export default getTimeStamp;
