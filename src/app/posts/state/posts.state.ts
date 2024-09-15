
export interface IPosts {
    id?: string,
    title: string,
    description: string
}

export interface IPostsState {
    posts:IPosts[]
}

export const initialState: IPostsState ={
    posts:[
        { id: '1', title:"Sample title 1", description:"Sample description 1"},
        { id: '2', title:"Sample title 2", description:"Sample description 2"}
    ]
}