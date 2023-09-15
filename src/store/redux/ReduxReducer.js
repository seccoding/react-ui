/*
    Redux가 관리하는 Store 를 관리하는 Reducer
    개념적으로 useReducer가 하는 일과 동일함.
        useReducer => Reducer가 State를 관리한다.
        ReduxReducer => Redux Store의 state를 관리한다.
*/
// useReducer 처럼 state의 기본값을 주는 기능이 없다.
// 따라서 Default parameter를 이용해, state의 기본값을 할당해야 한다.
// 게시판의 게시글을 관리할것이기에 비어있는 배열( [] )을 기본값으로 할당했다.
export default function ReduxReducer(stateInStore = [], action) {

    // 이 Reducer가 할일.
    // 게시글을 등록하기.
    // 게시글 조회하기 => 게시글의 조회수를 증가시키기.

    // store에 있는 state의 값을 복제.
    let newState = [...stateInStore]

    const actionType = action.type

    // 게시글을 등록하기
    if (actionType === "regist") {
        newState.push( action.payload )
    }
    // 게시글의 조회수를 증가시키기
    else if (actionType === "read") {
        newState.map( article => {
            if (article.num === action.payload) {
                return { ...article, viewCount: article.viewCount + 1 }
            }
            return {...article}
        } )
    }

    // state 갱신하기.
    return newState

}