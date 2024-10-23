export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const newDate = date.toLocaleDateString("en-US", options);
  return newDate.replaceAll(",", "");
}

export function createDynamicTimestamp(timestamp) {
  const currentTime = Date.now();
  const timeDifference = currentTime - timestamp;

  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;
  const oneYear = 365 * oneDay;

  const timeUnits = [
    { name: "year", value: oneYear },
    { name: "month", value: oneMonth },
    { name: "week", value: oneWeek },
    { name: "day", value: oneDay },
    { name: "hour", value: oneHour },
    { name: "minute", value: oneMinute },
    { name: "second", value: oneSecond },
  ];

  for (const unit of timeUnits) {
    if (timeDifference >= unit.value) {
      return convertTime(timeDifference, unit);
    }
  }

  return "Just now";
}

function convertTime(timeDifference, unitOfTime) {
  const convertedTime = Math.round(timeDifference / unitOfTime.value);

  if (convertedTime > 1) {
    return `${convertedTime} ${unitOfTime.name}s ago`;
  } else {
    return `${convertedTime} ${unitOfTime.name} ago`;
  }
}
