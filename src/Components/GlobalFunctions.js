export const clickParent = (event,setState) => {
  event.preventDefault();
  let dataValue = event.target.getAttribute("data-value");
  if (dataValue == "parent") {
    setState(false);
  }
};
