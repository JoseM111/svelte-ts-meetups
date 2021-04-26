/* types.ts */

export type Meetup = {
    //..........
    id: string
    title: string
    subtitle: string
    description: string
    imageURL: string
    address: string
    email: string
}

export type InputTargetEvent = EventTarget & {
    target: HTMLInputElement
}


