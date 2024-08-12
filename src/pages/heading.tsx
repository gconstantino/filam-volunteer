import { Link } from "react-router-dom";


type HeadingProps = {
    children: string
}
const Heading = (props:HeadingProps) => {
    return <h1 style={{margin: '0 auto'}}>{props.children}<Link to='/'>Home</Link></h1>
};

export default Heading;