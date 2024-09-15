import { ICounterState } from "./counter/state.counter"
import { IPostsState } from "./posts/state/posts.state"
import { counterReducer } from "./counter/reducer.counter"
import { postsReducer } from "./posts/state/posts.reducer"
import { ISpinnerState } from "./shared/state.loadingSpinner"
import { spinnerReducer } from "./shared/reducer.spinner"
import { ISingUpState } from "./signUp/signup.state"
import { signupReducer } from "./signUp/signUp.reducer"

export interface IAppState {
    counter: ICounterState
    posts: IPostsState
    showSpinner: ISpinnerState,
    signUp: ISingUpState
}

export const appReducer = {
    count: counterReducer,
    posts: postsReducer,
    showSpinner: spinnerReducer,
    signUp: signupReducer
}