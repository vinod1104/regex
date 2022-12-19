type StatusProps ={
    status : string
    // status : 'loading' | 'success' | 'error'
}
export const Status = (props : StatusProps) =>{
    let message;
    if(props.status === 'loading'){
        message = "Loading"
    }else if (props.status === 'success'){
        message = 'Data Came'
    } else if  (props.status === 'error') {
        message = "Error"
    }
    return (
        <div>
           <h1>message {message}</h1>
        </div>
    )
}