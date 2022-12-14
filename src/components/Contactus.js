import React from 'react'


export default function Contactus() {
  return (
    <>
  
<section className="mb-4">

   
    <h2 className="h1-responsive font-weight-bold text-center mb-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

      
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div className="row">

                  
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            
                            <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">

                            <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>
                    

                </div>
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                          
                            <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                        </div>
                    </div>
                </div>
               
                <div className="row">

                    
                    <div className="col-md-12">

                        <div className="md-form">
                          
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>
               

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary mx-3 my-3" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
      <br/>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="bi bi-geo-alt"></i>
                    <p>Hydeabad INDIA</p>
                </li>

                <li><i className="bi bi-telephone-fill"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="bi bi-envelope"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</section>

    </>
  )
}
