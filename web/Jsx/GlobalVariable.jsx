const useGlobal = () => {
    const [container, setContainer] = React.useState({ value: 'none' });

    const actions = (action) => {
        const { type, payload } = action;
        switch (type) {
            case 'setContainer':
                return setContainer(payload);
            default:
                return state;
        }
    }
    return {container,actions};
}

export default useGlobal;