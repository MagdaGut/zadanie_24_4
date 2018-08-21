const formatDate = (timeInSeconds) => {
  if (!timeInSeconds) {
    return "0s";
  }

  var hours   = Math.floor(timeInSeconds / 3600);
  var minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  var seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

  var result = "";
  if (hours > 0) {
    result += (hours + "h ");
  }

  if (minutes > 0) {
    result += (minutes + "m ");
  }

  if (seconds > 0) {
    result += (seconds + "s");
  }

  return result.trim();
};

module.exports = formatDate;
