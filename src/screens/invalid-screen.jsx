import { useNavigate } from "react-router-dom"



const InvalidScreen =()=>{
    const navigate = useNavigate()
    const NavigationHandler=()=>{
        navigate("/")
    }
    return(
        <>
        <h1>page not found 404</h1>
        <button onClick={NavigationHandler}>Go to home </button>
        </>
    )
}
export default InvalidScreen