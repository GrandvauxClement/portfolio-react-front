import { useState } from 'react';
import "../../styles/project.css"
import ModalProject from "./ModalProject";
function ProjectDisplay({project}) {
    const projectImage = 'url(https://127.0.0.1:8000/image/projet/'+ project.images[0]+')'
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
                <div className="col-forth">
                    <div className="project animate-box" style={{backgroundImage: projectImage}} onClick={() => setModalShow(true)}>
                        <div  className="desc">
                            <span>Application</span>
                            <h3 className='text-white'>{project.titre}</h3>
                        </div>
                    </div>
                </div>
            <ModalProject show={modalShow} onHide={() => setModalShow(false)} project={project} />
            </>

    )
}
export default ProjectDisplay