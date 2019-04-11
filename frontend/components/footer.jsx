import React from 'react';

class footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div className="items"> 
                    <h1>Questions? Email me at WellingtonFragoso2@Gmail.com</h1><br/>
                    <div className="footer-question">
                        <a href="https://github.com/wfragoso02"><i className="fab fa-github fa-3x"></i></a>
                        <a href="http://linkedin.com/in/wellington-fragoso"><i className="fab fa-linkedin fa-3x"></i></a>
                    </div>
                    <br/>
                    
                    <h3>Thank you for visiting my site.  Enjoy!</h3>
                </div>
            </div>
        )
    }
}
export default footer;