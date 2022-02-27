import * as React from "react";
import Layout from "../../components/Layout";

export default function Index (){

    return (
      <Layout>
          <div className="container">
            <div className="content">
              
              <address>
                <h4>
                 Telefono <a href="tel:+34625275366">+34625275366</a>
                </h4>
                
              </address> 
               O el formulario de contacto
               <iframe id="JotFormIFrame-220572143589358" 
                      title="Simple Contact Form in Spanish" 
                      onLoad={window.parent.scrollTo(0,0)} 
                      allowFullScreen={true} 
                      src="https://form.jotform.com/220572143589358" 
                      frameBorder={0} 
                      style={{minWidth: '100%', height: '800px', border:'none'}} scrolling="no" > </iframe> 
              </div>
            </div>
      </Layout>
    );
}
