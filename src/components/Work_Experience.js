import pic from "../circlepic.JPG";

function Intersts() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="card" style={{height:"70vh", width:"80vw"}}>
              <div class="card-body">
                    <div class="row justify-content-start">
                        <div class="col-7">
                            <img src={pic} style={{height:"65vh"}}/>
                        </div>
                        <div class="col-5">
                            <div class="name">
                            Intersts & Hobbies
                            </div>
                            <div class="job">
                            <br/>
                                <span>Reading technology blogs and articles</span><br/>
                            </div>
                            <div class="role">
                                <span>E.g. Freedom To Tinker, FreeCodeCamp, Stack Overflow Blog
                                </span>
                                <br/>
                                <br/>
                            </div>
                            <div class="job">
                                <span>Photo and Video Editing </span><br/>
                            </div>
                            <div class="role">
                                <span>E.g. Travelling vlogs, Birthday videoes 
                                </span>
                                <br/>
                                <br/>
                            </div>
                            <div class="job">
                                <span>Watching online courses</span><br/>
                            </div>
                            <div class="role">
                                <span>E.g. TED talks, Udemy, Skillshare, etc.
                                </span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div> 
        
    )
}
export default Intersts;