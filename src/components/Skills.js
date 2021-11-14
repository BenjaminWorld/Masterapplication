import pic from "../circlepic.JPG";

function Skills() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="card" style={{height:"70vh", width:"80vw"}}>
                <div class="card-body">
                    <div class="row justify-content-start">
                            <div class="col-7">
                                <img src={pic} style={{height:"65vh"}}/>
                            </div>
                            <div class="col-5">
                                <div class ="name">
                                    <span>Computer Skills</span>
                                    <br/>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col"> 
                                            <div class = "convetionalskills">
                                                <br/>
                                                <span>
                                                    &bull; Microsoft Office
                                                </span><br/>
                                            </div>
                                        </div>
                                        <div class="col"> 
                                            <div class = "convetionalskills">
                                                <br/>
                                                <span>
                                                    &bull; Sketchup
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col"> 
                                            <div class = "convetionalskills">
                                                <br/>
                                                <span>
                                                    &bull; Adobe Premiere Pro
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col"> 
                                                <div class = "computerskills">
                                                    <br/>
                                                    <span>
                                                        &bull; PowerBI
                                                    </span><br/>
                                                </div>
                                            </div>
                                            <div class="col"> 
                                                <div class = "computerskills">
                                                    <br/>
                                                    <span>
                                                        &bull; Python
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col"> 
                                                <div class = "convetionalskills">
                                                    <br/>
                                                    <span>
                                                        &bull; Adobe Photoshop
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col"> 
                                                <div class = "computerskills">
                                                    <br/>
                                                    <span>
                                                        &bull; JavaScript (React)
                                                    </span><br/>
                                                </div>
                                            </div>
                                            <div class="col"> 
                                                <div class = "computerskills">
                                                    <br/>
                                                    <span>
                                                        &bull; HTML
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col"> 
                                                <div class = "computerskills">
                                                    <br/>
                                                    <span>
                                                        &bull; CSS (Bootstrap)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Skills;



