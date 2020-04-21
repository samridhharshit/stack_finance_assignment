import update from 'react-addons-update';

const initState = {
    leaders: [
        {id: 1, name: "Leader 1", points: 100},
        {id: 2, name: "Leader 2", points: 4},
        {id: 3, name: "Leader 3", points: 4},
        {id: 4, name: "Leader 4", points: 4}
    ]
};

const rootReducers = (state = initState, action) => {
    let index, point;
    switch(action.type) {
        case "plus":
            index = state.leaders.findIndex(leader => leader.name === action.name) ;
            point = state.leaders[index].points + 1;
            console.log(point);
            // console.log(state.leaders[index].points);
            return update(state, {
                leaders: {
                    [index]: {
                        points: {$set: point}
                    }
                }
            });
            // break;
        case "minus":
            index = state.leaders.findIndex(leader => leader.name === action.name) ;
            point = state.leaders[index].points - 1;
            // console.log(state.leaders[index].points);
            return update(state, {
                leaders: {
                    [index]: {
                        points: {$set: point}
                    }
                }
            });
            // break;
        default:
            console.log(action)
    }
    return state;
};

export default rootReducers;