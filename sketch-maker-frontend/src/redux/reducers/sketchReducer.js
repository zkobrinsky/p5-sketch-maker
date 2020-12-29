const sketchReducer = (state = { 
    all: [],
    sketch: {
        colors: [],
        reflections: 4,
        bgColor: [Math.random()*360+1, Math.random(), Math.random()],
    }
 }, action) => {
    switch(action.type) {
        case "FETCH_SKETCHES_SUCCESS":
            return {...state, all: action.payload};
        case "CREATE_SKETCH_SUCCESS":
            return {...state, all: [...state.all, action.payload] };
            // case "UPDATE_SKETCH_COLOR":
            //     debugger;
        default:
            return state
    }
}

export default sketchReducer