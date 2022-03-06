import * as React from "react";
import Layout from "../../components/Layout";
import locImg from "../../img/runakuna_location.png";
import tel from "../../img/runakuna_tel.png";

export default function Index (){

    const iframeElement = React.useRef();

    React.useEffect(() => {
      iframeElement.current.id="JotFormIFrame-220572143589358" 
      iframeElement.current.title="Runakuna formulario de contacto" 
      iframeElement.current.onLoad= window.parent.scrollTo(0,0);
      iframeElement.current.allowFullScreen = true; 
      iframeElement.current.src="https://form.jotform.com/220572143589358" 
      iframeElement.current.frameBorder= 0; 
      iframeElement.current.scrolling="no"
    }, [])

    return (
      <Layout>
          <div className="container">
            <div className="content" style={{minHeight: '800px'}}>
              <div className="columns is-multiline">
                <section className="column is-12">
                  <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection: "column"}}>
                    <h4 className="has-text-weight-semibold is-size-5-mobile is-size-3">¿Una consulta?</h4>
                    <h4 className="has-text-weight-semibold is-size-5-mobile is-size-3">Llamanos o rellena el formulario de contacto</h4>
                  </div>
                </section>
                <section className="column is-12">
                  <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
                    <img src={tel} alt="Ubicación" style={{maxHeight: "60px"}}/>
                    <a style={{paddingLeft: "20px"}} className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen" href="tel:+34625275366">+34625275366</a>
                  </div>
                </section>   
                <section className="column is-12">
                  <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
                    <img src={locImg} alt="Ubicación" style={{maxHeight: "60px"}}/>
                    <address style={{paddingLeft: "20px"}}>
                      Barcelona, España
                    </address> 
                  </div>
                </section>
              </div>

              <section>
                <iframe ref={iframeElement} style={{minWidth: '100%', height: '800px', border:'none'}}>
                </iframe> 
              </section>
              </div>
            </div>
      </Layout>
    );
}
