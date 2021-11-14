import pic from "../circlepic.JPG";

function Education() {
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
                                <span>Education</span><br/>
                            </div>
                            <div class="university">
                                <br/>
                                <span>City University of Hong Kong</span><br/>
                            </div>
                            <div class="degree">
                                <span>Bachelor of Energy Engineering 2016 - 2020</span><br/>
                                <br/>
                            </div>
                            <div class="university">
                                <span>HKU Space</span><br/>
                            </div>
                            <div class="degree">
                                <span>Professional Certificate in Data Analytics 2020</span><br/>
                                <br/>
                            </div>
                            <div class="university">
                                <span>University of South Australia</span><br/>
                            </div>
                            <div class="degree">
                                <span>Exchange Program 2018 - 2019</span><br/>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div> 
        
    )
}
export default Education;