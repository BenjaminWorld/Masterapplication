import pic from "../circlepic.JPG";

function Work_Experience() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="card" style={{height:"70vh", width:"80vw",borderRadius:50,minWidth:"500px", minHeight:"300px"}}>
              <div class="card-body">
                    <div class="row justify-content-start">
                        
                        <div class="col-7">
                            <img src={pic} style={{height:"auto", width:"70%"}}/>
                        </div>

                        <div class="col-5">
                            <div class="name">
                            Work Experience 
                            </div>

                            <div class="job">
                            <br/>
                                <span>Blue Sky Energy Technology Limited</span><br/>
                            </div>

                            <div class="role">
                                <span>Software Engineer</span><br/>
                                <br/>
                            </div>

                            <div class="job">
                                <span>Otis Elevator Hong Kong Limited </span><br/>
                            </div>

                            <div class="role">
                                <span>Assistant Engineer, Service Sales</span><br/>
                                <br/>
                            </div>

                            <div class="job">
                                <span>CLP Power Hong Kong Limited</span><br/>
                            </div>

                            <div class="role">
                                <span>Assistant Engineer, Internship</span>
                            </div>

                        </div>
                     </div>
                </div>
            </div>
        </div> 
        
    )
}
export default Work_Experience;