import React, {Component} from "react";
import MontCard from "./MontCardUI";
import "../../App.css"

import CoverMalinche from "../../images/coverMontMalinche.jpg"
import ModMalinche1 from "../../images/malmod1.jpg"
import ModMalinche2 from "../../images/faltaModal.jpg"
import ModMalinche3 from "../../images/faltaModal.jpg"
import ModMalinche4 from "../../images/faltaModal.jpg"
import ModMalinche5 from "../../images/faltaModal.jpg"


import CoverAjusco from "../../images/faltaModal.jpg"
import ModAjusco1 from "../../images/faltaModal.jpg"
import ModAjusco2 from "../../images/faltaModal.jpg"
import ModAjusco3 from "../../images/faltaModal.jpg"
import ModAjusco4 from "../../images/faltaModal.jpg"
import ModAjusco5 from "../../images/faltaModal.jpg"    


import CoverSN from "../../images/faltaModal.jpg"
import ModSN1 from "../../images/snmod1.jpeg"
import ModSN2 from "../../images/snmod2.jpg"
import ModSN3 from "../../images/faltaModal.jpg"
import ModSN4 from "../../images/faltaModal.jpg"
import ModSN5 from "../../images/faltaModal.jpg"


import CoverPopo from "../../images/coverMontPopo.jpg"
import ModPopo1 from "../../images/faltaModal.jpg"
import ModPopo2 from "../../images/faltaModal.jpg"
import ModPopo3 from "../../images/faltaModal.jpg"
import ModPopo4 from "../../images/faltaModal.jpg"
import ModPopo5 from "../../images/faltaModal.jpg"


import CoverIzta from "../../images/faltaModal.jpg"
import ModIzta1 from "../../images/iztamod1.jpg"
import ModIzta2 from "../../images/iztamod2.jpg"
import ModIzta3 from "../../images/faltaModal.jpg"
import ModIzta4 from "../../images/faltaModal.jpg"
import ModIzta5 from "../../images/faltaModal.jpg"


import CoverCitla from "../../images/citlaCover.jpg"
import ModCitla1 from "../../images/citlamod1.jpg"
import ModCitla2 from "../../images/citlamod2.jpg"
import ModCitla3 from "../../images/faltaModal.jpg"
import ModCitla4 from "../../images/faltaModal.jpg"
import ModCitla5 from "../../images/faltaModal.jpg"


import CoverNevadoToluca from "../../images/cover_Mont_nevtol.jpg"
import ModNev1 from "../../images/nevmod1.jpg"
import ModNev2 from "../../images/nevmod2.jpg"
import ModNev3 from "../../images/nevmod3.jpg"
import ModNev4 from "../../images/nevmod4.jpg"
import ModNev5 from "../../images/nevmod5.jpg"



import { withTranslation } from 'react-i18next';


class MontCards extends Component{
    
    render(){

        const { t } = this.props;
        
        return(
            <div className="container-fluid d-flex justify-content-around p-5">
             <div className="row">

             {/* AXOCHCO   1 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><MontCard
               imgsrc={CoverAjusco} 
               title = {t('montCards.titleCard1')} 
               subtitle = {t('montCards.subtitleCard1')} 
               text={t("montCards.textCard1")} 
               go={t("Reservar")} 
               status = {'btn btn-outline-success'}
               imgsrc1={ModAjusco1}
               imgsrc2={ModAjusco2}
               imgsrc3={ModAjusco3}
               imgsrc4={ModAjusco4}
               imgsrc5={ModAjusco5}
               description={t('montCards.descriptionCard1')}
               require = {t('montCards.requireCard1')}
               altitude = {t('montCards.altitudeCard1')}
               cost = {t('montCards.costCard1')}
               length = {t('montCards.lengthCard1')}
               usd = {'$ 170 USD'}
               eur = {'$ 150 EU'}
               id = {'ajusco'}
               />
               </div>

                {/* XINANTECATL  2 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><MontCard
               imgsrc={CoverNevadoToluca}
                title = {t("montCards.titleCard2")} 
                subtitle = {t('montCards.subtitleCard2')} 
                text={t("montCards.textCard2")}
                go={t("Reservar")} 
                status = {'btn btn-outline-success'}
                imgsrc1={ModNev1}
                imgsrc2={ModNev2}
                imgsrc3={ModNev3}
                imgsrc4={ModNev4}
                imgsrc5={ModNev5}
                description={t('montCards.descriptionCard2')}
                require = {t('montCards.requireCard2')}
                altitude = {t('montCards.altitudeCard2')}
                cost = {t('montCards.cost2')}
                length = {t('montCards.length2')}
                usd = {t('montCards.cost2')}
                eur = {'$ 150 EU'}
                id = {'xinantecatl'}
                />
                </div>

                {/*MATLALCUEYE   3 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><MontCard 
              imgsrc={CoverMalinche}
              title = {t("montCards.titleCard3")} 
              subtitle = {t('montCards.subtitleCard3')} 
              text={t("montCards.textCard3")}
              go={t("Reservar")} 
               status = {'btn btn-outline-success'}
               imgsrc1={ModMalinche1}
               imgsrc2={ModMalinche2}
               imgsrc3={ModMalinche3}
               imgsrc4={ModMalinche4}
               imgsrc5={ModMalinche5}
               description={t('montCards.descriptionCard3')}
               require = {t('montCards.requireCard3')}
               altitude = {t('montCards.altitudeCard3')}
               cost = {t('montCards.cost3')}
               length = {t('montCards.length3')}
               usd = {'$ 170 USD'}
               eur = {'$ 150 EU'}
               id = {'malinche'}
                />
               </div>

               {/* TLILTÉPETL   4 */}
              <div className="col-lg-4 col-md-6 col-sm-12  pt-4"><MontCard
               imgsrc={CoverSN}
               title = {t("montCards.titleCard4")} 
               subtitle = {t('montCards.subtitleCard4')} 
               text={t("montCards.textCard4")}
               go={t("Reservar")} 
                status = {'btn btn-outline-success'}
                imgsrc1={ModSN1}
                imgsrc2={ModSN2}
                imgsrc3={ModSN3}
                imgsrc4={ModSN4}
                imgsrc5={ModSN5}
                description={t('montCards.descriptionCard4')}
                require = {t('montCards.requireCard4')}
                altitude = {t('montCards.altitudeCard4')}
                cost = {t('montCards.cost4')}
                length = {t('montCards.length4')}
                usd = {'$ 170 USD'}
                eur = {'$ 150 EU'}
                id = {'sn'}
                 />
                </div>   


               {/*IZTACCIHUATL  5 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><MontCard
               imgsrc={CoverIzta} 
               title = {t("montCards.titleCard5")} 
               subtitle = {t('montCards.subtitleCard5')} 
               text={t("montCards.textCard5")}
               go={t("Reservar")} 
               status = {'btn btn-outline-success'}
               imgsrc1={ModIzta1}
               imgsrc2={ModIzta2}
               imgsrc3={ModIzta3}
               imgsrc4={ModIzta4}
               imgsrc5={ModIzta5}
               description={t('montCards.descriptionCard5')}
               require = {t('montCards.requireCardCard5')}
               altitude = {t('montCards.altitudeCard5')}
               cost = {t('montCards.cost5')}
               length = {t('montCards.length5')}
               usd = {'$ 170 USD'}
               eur = {'$ 150 EU'}
               id = {'iztaccihuatl'}
                />
                </div>   

                {/*CITLALTEPETL  6 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><MontCard 
              imgsrc={CoverCitla} 
              title = {t("montCards.titleCard6")} 
              subtitle = {t('montCards.subtitleCard6')} 
              text={t("montCards.textCard6")}
              go={t("Reservar")} 
              status = {'btn btn-outline-success'}
              imgsrc1={ModCitla1}
              imgsrc2={ModCitla2}
              imgsrc3={ModCitla3}
              imgsrc4={ModCitla4}
              imgsrc5={ModCitla5}
              description={t('montCards.descriptionCard6')}
              require = {t('montCards.requireCard6')}
              altitude = {t('montCards.altitudeCard6')}
              cost = {t('montCards.cost6')}
              length = {t('montCards.length6')}
              usd = {'$ 170 USD'}
              eur = {'$ 150 EU'}
              id ={'#citlaltepetl'}
              
              /></div>   

               {/*POPOCATEPETL  7 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><MontCard 
              imgsrc={CoverPopo} 
              title = {t("montCards.titleCard7")} 
              subtitle = {t('montCards.subtitleCard7')} 
              text={t("montCards.textCard7")}
              go={t("Reservar")} 
              status = {'btn btn-outline-danger disabled'}
              imgsrc1={ModPopo1}
              imgsrc2={ModPopo2}
              imgsrc3={ModPopo3}
              imgsrc4={ModPopo4}
              imgsrc5={ModPopo5}
              description={t('montCards.descriptionCard7')}
              require = {t('montCards.requireCard7')}
              altitude = {t('montCards.altitudeCard7')}
              cost = {t('montCards.cost7')}
              length = {t('montCards.length7')}
              usd = {'$ 170 USD'}
              eur = {'$ 150 EU'}
              id = {'popocatepetl'}/></div>     
             </div>   
            </div>
        )
    }

}

export default withTranslation()(MontCards)