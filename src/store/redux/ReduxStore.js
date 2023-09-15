import { createStore } from "redux"
import ReduxReducer from "./ReduxReducer"

/*
    Redux는 State의 통합관리를 위해 1개의 Store 라는 것을 생성해 관리한다.
    Redux의 Store는 Provider 컴포넌트를 통해 모든 컴포넌트들에게 공유를 해줄 수 있다.
    하나의 Store에는 하나의 state만 관리할 수 있다.
    따라서 state가 굉장히 거대해 진다.

    Redux Library
        └ Redux Store
            └ Reducer
                └ State

*/
export default function ReduxStore() {

    return function() {
        return createStore(ReduxReducer)
    }

}