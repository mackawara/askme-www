export type FormData = {
    message: string,
}
export type MessageType = 'user' | 'system'
export type Message = {
    content: string,
    //  userID: string,
    type: MessageType
}
