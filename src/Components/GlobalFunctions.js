export const clickParent = (event, dataValue = "parent") => {
  event.preventDefault();
  let elementDataValue = event.target.getAttribute("data-value");
  console.log(elementDataValue);
  if (elementDataValue == dataValue) {
    return true;
  } else {
    return false;
  }
};
