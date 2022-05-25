const useGlobal = () => {
  const [state, setState] = React.useState({
    value: 'none'
  });

  const actions = action => {
    const {
      type,
      payload
    } = action;

    switch (type) {
      case 'setState':
        return setState(payload);

      default:
        return state;
    }
  };

  return {
    state,
    actions
  };
};

export default useGlobal;