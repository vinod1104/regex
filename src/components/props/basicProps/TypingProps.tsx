type GreetProps = {
    name: string
    messageCount: number
    isLoggedin: boolean
}
export const TypingProps = (props: GreetProps) => {
    return (
        <div>

            <h1>{props.isLoggedin ?
                ` first message ${props.name} with ${props.messageCount} message` : `welcome`
            }
            </h1>
        </div>
    )
}