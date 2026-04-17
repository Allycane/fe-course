import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  // 상태를 관리해야 하는 데이터가 있을 경우 initialState를 정의
  list : []
}

export const likeSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setLike: (state, action) => {
      state.count += 1
      // 위에 정의한 like의 값을 가져오는 state
      state.list.push(action.payload.title)
      console.log(state.list[0])
      console.log(state.list.length)
    },
    setDislike: (state) => {
        state.count -= 1
    }
  },
})

export const { setLike, setDislike } = likeSlice.actions

export default likeSlice.reducer