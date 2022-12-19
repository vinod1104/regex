type personProps = {
    name: {
        fname: string,
        lname: string
    }
}
export const ObjectProps = (props: personProps) => {
    return (
        <div>
            {props.name.fname} was a friend of {props.name.lname}
        </div>
    )
}