import Project from "./Project";
import Apropos from "./Apropos";

function Body({project}) {
 return (
     <div className='container'>
         <Apropos />
         <Project project={project}/>
     </div>
 )
}
export default Body