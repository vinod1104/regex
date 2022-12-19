type PersonListProps = {
    names : {
        first : string,
        last : string
    }[]
}
export const ObjectArray = (props:PersonListProps)=>{
    return(
        <div>
          {
            props.names.map(name =>{
                return(
                    <h2 key={name.first}>{name.first}continued by {name.last}</h2>
                )
            })
          }
        </div>
    )
}