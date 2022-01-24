import pic from "../circlepic.JPG";
import pic1 from "../email.png";
import pic2 from "../date-of-birth.png";
import pic3 from "../phone.png";

function Content() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="card" style={{height:"70vh", width:"80vw",borderRadius:50,minWidth:"500px", minHeight:"300px"}}>
                <div class="card-body">
                    <div class="row justify-content-start">
                        <div class="col-7">
                            <img src={pic} style={{height:"auto", width:"70%"}}/>
                        </div>
                        <div class="col-5">
                            <div class="hello">
                            Hello Everybody, I'm
                            </div>
                            <div class="name">
                            Benjamin Lee 
                            </div>
                            <br/>
                            <div class="details">
                                <div class="description"style={{textAlign:"justify"}}> A self-motivated software engineer who is passionate in IT professionalism and with eagerness to learn in the dynamic coding environment. I'm a good team player with excellent communicaiton skils. </div><br/>
                                <img src={pic2} style={{height:"4vh"}}/> 18-12-1997
                                <br/>
                                <br/>
                                <img src={pic3} style={{height:"4vh"}}/> +852 92823577
                                <br/>
                                <br/>
                                <img src={pic1} style={{height:"4vh"}}/> benjiman0125@hotmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}
export default Content;


