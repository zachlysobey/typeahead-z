import { configureStore } from 'redux-starter-kit'

import { rootReducer } from './reducers'

export const store = configureStore({
    reducer: rootReducer,
})

export type AppState = ReturnType<typeof rootReducer>
