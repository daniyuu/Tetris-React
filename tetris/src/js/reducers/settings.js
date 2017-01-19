const settings = (state = {
    num_rows: 20,
    num_cols: 10,
}, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                num_rows: 20,
                num_cols: 10,
            };
        default:
            return state;
    }
};