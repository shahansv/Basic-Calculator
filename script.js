const displayValue = (data) => {
  display.value += data;
};

const clearAllValue = () => {
  display.value = "";
};

const calculate = () => {
  try {
    if (display.value == "") {
      display.value = "";
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Invalid input";
  }
};

const backSpace = () => {
  display.value = display.value.slice(0, -1);
};
