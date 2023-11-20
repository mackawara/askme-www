export type FormData = {
    message: string,
}
export type MessageType = 'user' | 'system'
export type Message = {
    content: string,
    //  userID: string,
    type: MessageType
}

export interface FontFamilies {
    montserrat: string;
    poppins: string;
    raleway: string;
    roboto: string;
    inter: string;
    openSans: string;
}
