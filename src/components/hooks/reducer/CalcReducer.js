// const [money, dispatch] = useReducer(reducer, 0)
// dispatch({ type: "power", payload: 10  })
export const reducer = function(state, action) {
    // reducer 의 역할은 state를 효율적으로 관리하는 것.

    console.log("Reducer", "State => ", state, "Action => ", action)

    if (action.type == "power") {
        // reducer 에서 return을 하게 되면, state값이 갱신된다.
        // state가 갱신되면 이 Reducer를 사용하는 컴포넌트가 갱신된다.
        return action.payload * action.payload
    }
    else if (action.type == "mod") {
        // reducer 에서 return을 하게 되면, state값이 갱신된다.
        // state가 갱신되면 이 Reducer를 사용하는 컴포넌트가 갱신된다.
        return action.payload % 2
    }
    else {
        // type이 power, mod 가 아니라면 원래의 state값을 반환한다.
        return state;
    }

}