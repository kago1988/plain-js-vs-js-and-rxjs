let state = { count: 0 };

const increment = () => {
  state = { ...state, count: state.count + 1 };
  console.log('New state:', state);
  // Update UI based on new state
};

document.getElementById('incrementButton').addEventListener('click', increment);
