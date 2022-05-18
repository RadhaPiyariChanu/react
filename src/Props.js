import './Props.css';

const Welcome=({name, xyz})=>
{
    return(
        <div className="Props" >  
            <h1> {name}{xyz} </h1>
        </div>
    )
}
export default Welcome;