import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err= useRouteError();
    const {status,statusText}=err;
    console.log(status,statusText)

    return (
        <div style={{display:"flex",
        flexDirection:"column",
                     justifyContent:"space-around",
                     alignItems:"center"}}>
            <img src="https://cdn.dribbble.com/users/774806/screenshots/3823110/media/25111bc3136bd5173fdde0a00129b590.gif" alt="error"/>
            <h1 style={{}}>{status + " : "+ statusText}</h1>
        </div>
    )
}

export default Error;