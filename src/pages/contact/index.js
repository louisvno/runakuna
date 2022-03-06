import * as React from "react";
import Layout from "../../components/Layout";
import locImg from "../../img/runakuna_location.png";
import tel from "../../img/runakuna_tel.png";
if (typeof window !== `undefined`) {
  require("../../components/FormComponent")
}

export default function Index (){

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
                {/*
                <section className="column is-12">
                  <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
                    <img src={locImg} alt="Ubicación" style={{maxHeight: "60px"}}/>
                    <address style={{paddingLeft: "20px"}}>
                      Avinguda Diagonal, 534 <br></br>
                      08006 Barcelona <br></br>
                    </address> 
                  </div>
                </section>*/}
              </div>

              <section id="contact-form-container">

              </section>
              </div>
            </div>
      </Layout>
    );
}
