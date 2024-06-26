const directionToDirectionNumber = (direction) => {
  const directionMap = {
    "N": 0,
    "NE": 1,
    "E": 2,
    "SE": 3,
    "S": 4,
    "SW": 5,
    "W": 6,
    "NW": 7
  };
  return directionMap[direction] ?? -1;
};
