import React, {Component} from "react";
import EscCard from "./EscCardUI";
//import ReserveModal from "../Reserve/ReserveModalUI"
import "../../App.css"

import CoverAculco from "../../images/coverAculco.jpg"
import ModAculco1 from "../../images/malmod1.jpg"
import ModAculco2 from "../../images/MalMod2.jpg"
import ModAculco3 from "../../images/malMod3.jpg"
import ModAculco4 from "../../images/malMod4.jpg"
import ModAculco5 from "../../images/malMod5.jpg"


import CoverVentanas from "../../images/coverMontAju.jpg"
import ModVentanas1 from "../../images/modVentanas5.jpg"
import ModVentanas2 from "../../images/modVentanas2.jpg"
import ModVentanas3 from "../../images/modVentanas3.jpg"
import ModVentanas4 from "../../images/modVentanas1.jpg"
import ModVentanas5 from "../../images/ajusMod5.jpg"    


import CoverRQ from "../../images/coverRQ.jpg"
import ModRQ1 from "../../images/modRQ1.jpg"
import ModRQ2 from "../../images/modRQ2.jpg"
import ModRQ3 from "../../images/modRQ3.jpg"
import ModRQ4 from "../../images/modRQ4.jpg"
import ModRQ5 from "../../images/modRQ5.jpg"


import CoverBasa from "../../images/faltaModal.jpg"
import ModBasa1 from "../../images/faltaModal.jpg"
import ModBasa2 from "../../images/faltaModal.jpg"
import ModBasa3 from "../../images/faltaModal.jpg"
import ModBasa4 from "../../images/faltaModal.jpg"
import ModBasa5 from "../../images/faltaModal.jpg"


import CoverBernal from "../../images/coverPB.jpg"
import ModBernal1 from "../../images/modPB1.jpg"
import ModBernal2 from "../../images/modPB2.jpg"
import ModBernal3 from "../../images/modPB1.jpg"
import ModBernal4 from "../../images/modPB4.jpg"
import ModBernal5 from "../../images/modPB1.jpg"


import CoverDinamos from "../../images/citlaCover.jpg"
import ModDinamos1 from "../../images/citlamod1.jpg"
import ModDinamos2 from "../../images/citlamod2.jpg"
import ModDinamos3 from "../../images/citMod5.jpg"
import ModDinamos4 from "../../images/faltaModal.jpg"
import ModDinamos5 from "../../images/faltaModal.jpg"


import CoverJilotepec from "../../images/cover_Mont_nevtol.jpg"
import ModJilo1 from "../../images/nevmod1.jpg"
import ModJilo2 from "../../images/nevmod2.jpg"
import ModJilo3 from "../../images/nevmod3.jpg"
import ModJilo4 from "../../images/nevmod4.jpg"
import ModJilo5 from "../../images/nevmod5.jpg"



import { withTranslation } from 'react-i18next';


class EscCards extends Component{
    
    render(){

        const { t } = this.props;
        
        return(
            <div className="container-fluid d-flex justify-content-around">
             <div className="row">

             {/* VENTANAS   1 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-2">
              <EscCard
               imgsrc={CoverVentanas} 
               title = {t('EscCards.titleCard1')} 
               subtitle = {t('EscCards.subtitleCard1')} 
               text={t("EscCards.textCard1")} 
               go={t("Reservar")} 
               status = {'btn btn-outline-success'}
               imgsrc1={ModVentanas1}
               imgsrc2={ModVentanas2}
               imgsrc3={ModVentanas3}
               imgsrc4={ModVentanas4}
               imgsrc5={ModVentanas5}
               description={t('EscCards.descriptionCard1')}
               require = {t('EscCards.requireCard1.gral')}
               requiref = {t('EscCards.requireCard1.fisico')}
               requirep = {t('EscCards.requireCard1.previos')}
               requiree = {t('EscCards.requireCard1.equipo')}
               requirem = {t('EscCards.requireCard1.medicos')}
               requireo1 = {t('EscCards.requireCard1.medicos')}
               requireo2 = {t('EscCards.requireCard1.medicos')}
               altitude = {t('EscCards.altitudeCard1')}
               cost = {t('EscCards.costCard1')}
               length = {t('EscCards.lengthCard1')}
               usd = {'$ 170 USD'}
               eur = {'$ 150 EU'}
               id = {'ajusco'}
               />
               </div>

                {/* JILOTEPEC  2 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-2"><EscCard
               imgsrc={CoverJilotepec}
                title = {t("EscCards.titleCard2")} 
                subtitle = {t('EscCards.subtitleCard2')} 
                text={t("EscCards.textCard2")}
                go={t("Reservar")} 
                status = {'btn btn-outline-success'}
                imgsrc1={ModJilo1}
                imgsrc2={ModJilo2}
                imgsrc3={ModJilo3}
                imgsrc4={ModJilo4}
                imgsrc5={ModJilo5}
                description={t('EscCards.descriptionCard2')}
                require = {t('EscCards.requireCard2.gral')}
                requiref = {t('EscCards.requireCard2.fisico')}
                requirep = {t('EscCards.requireCard2.previos')}
                requiree = {t('EscCards.requireCard2.equipo')}
                requirem = {t('EscCards.requireCard2.medicos')}
                requireo1 = {t('EscCards.requireCard2.medicos')}
                requireo2 = {t('EscCards.requireCard2.medicos')}
                altitude = {t('EscCards.altitudeCard2')}
                cost = {t('EscCards.costCard2')}
                length = {t('EscCards.lengthCard2')}
                usd = {t('EscCards.costCard2')}
                eur = {'$ 150 EU'}
                id = {'xinantecatl'}
                />
                </div>

                {/*ACULCO   3 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-2"><EscCard 
              imgsrc={CoverAculco}
              title = {t("EscCards.titleCard3")} 
              subtitle = {t('EscCards.subtitleCard3')} 
              text={t("EscCards.textCard3")}
              go={t("Reservar")} 
               status = {'btn btn-outline-success'}
               imgsrc1={ModAculco1}
               imgsrc2={ModAculco2}
               imgsrc3={ModAculco3}
               imgsrc4={ModAculco4}
               imgsrc5={ModAculco5}
               description={t('EscCards.descriptionCard3')}
               require = {t('EscCards.requireCard3.gral')}
               requiref = {t('EscCards.requireCard3.fisico')}
               requirep = {t('EscCards.requireCard3.previos')}
               requiree = {t('EscCards.requireCard3.equipo')}
               requirem = {t('EscCards.requireCard3.medicos')}
               requireo1 = {t('EscCards.requireCard3.medicos')}
               requireo2 = {t('EscCards.requireCard3.medicos')}
               altitude = {t('EscCards.altitudeCard3')}
               cost = {t('EscCards.costCard3')}
               length = {t('EscCards.lengthCard3')}
               usd = {'$ 170 USD'}
               eur = {'$ 150 EU'}
               id = {'malinche'}
                />
               </div>

               {/* RANCHOQUEMADO   4 */}
              <div className="col-lg-4 col-md-6 col-sm-12  pt-4"><EscCard
               imgsrc={CoverRQ}
               title = {t("EscCards.titleCard4")} 
               subtitle = {t('EscCards.subtitleCard4')} 
               text={t("EscCards.textCard4")}
               go={t("Reservar")} 
                status = {'btn btn-outline-success'}
                imgsrc1={ModRQ1}
                imgsrc2={ModRQ2}
                imgsrc3={ModRQ3}
                imgsrc4={ModRQ4}
                imgsrc5={ModRQ5}
                description={t('EscCards.descriptionCard4')}
                require = {t('EscCards.requireCard4.gral')}
                requiref = {t('EscCards.requireCard4.fisico')}
                requirep = {t('EscCards.requireCard4.previos')}
                requiree = {t('EscCards.requireCard4.equipo')}
                requirem = {t('EscCards.requireCard4.medicos')}
                requireo1 = {t('EscCards.requireCard4.medicos')}
                requireo2 = {t('EscCards.requireCard4.medicos')}
                altitude = {t('EscCards.altitudeCard4')}
                cost = {t('EscCards.costCard4')}
                length = {t('EscCards.lengthCard4')}
                usd = {'$ 170 USD'}
                eur = {'$ 150 EU'}
                id = {'sn'}
                 />
                </div>   


               {/*PEÑADEBERNAL  5 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><EscCard
               imgsrc={CoverBernal} 
               title = {t("EscCards.titleCard5")} 
               subtitle = {t('EscCards.subtitleCard5')} 
               text={t("EscCards.textCard5")}
               go={t("Reservar")} 
               status = {'btn btn-outline-success'}
               imgsrc1={ModBernal1}
               imgsrc2={ModBernal2}
               imgsrc3={ModBernal3}
               imgsrc4={ModBernal4}
               imgsrc5={ModBernal5}
               description={t('EscCards.descriptionCard5')}
               require = {t('EscCards.requireCard5.gral')}
               requiref = {t('EscCards.requireCard5.fisico')}
               requirep = {t('EscCards.requireCard5.previos')}
               requiree = {t('EscCards.requireCard5.equipo')}
               requirem = {t('EscCards.requireCard5.medicos')}
               requireo1 = {t('EscCards.requireCard5.medicos')}
               requireo2 = {t('EscCards.requireCard5.medicos')}
               altitude = {t('EscCards.altitudeCard5')}
               cost = {t('EscCards.costCard5')}
               length = {t('EscCards.lengthCard5')}
               usd = {'$ 170 USD'}
               eur = {'$ 150 EU'}
               id = {'iztaccihuatl'}
                />
                </div>   

                {/*DINAMOS  6 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><EscCard 
              imgsrc={CoverDinamos} 
              title = {t("EscCards.titleCard6")} 
              subtitle = {t('EscCards.subtitleCard6')} 
              text={t("EscCards.textCard6")}
              go={t("Reservar")} 
              status = {'btn btn-outline-success'}
              imgsrc1={ModDinamos1}
              imgsrc2={ModDinamos2}
              imgsrc3={ModDinamos3}
              imgsrc4={ModDinamos4}
              imgsrc5={ModDinamos5}
              description={t('EscCards.descriptionCard6')}
              require = {t('EscCards.requireCard6.gral')}
              requiref = {t('EscCards.requireCard6.fisico')}
              requirep = {t('EscCards.requireCard6.previos')}
              requiree = {t('EscCards.requireCard6.equipo')}
              requirem = {t('EscCards.requireCard6.medicos')}
              requireo1 = {t('EscCards.requireCard6.medicos')}
              requireo2 = {t('EscCards.requireCard6.medicos')}
              altitude = {t('EscCards.altitudeCard6')}
              cost = {t('EscCards.costCard6')}
              length = {t('EscCards.lengthCard6')}
              usd = {'$ 170 USD'}
              eur = {'$ 150 EU'}
              id ={'citlaltepetl'}
              
              /></div>   

               {/*BASACEACHI  7 */}
              <div className="col-lg-4 col-md-6 col-sm-12 pt-4"><EscCard 
              imgsrc={CoverBasa} 
              title = {t("EscCards.titleCard7")} 
              subtitle = {t('EscCards.subtitleCard7')} 
              text={t("EscCards.textCard7")}
              go={t("Reservar")} 
              status = {'btn btn-outline-danger disabled'}
              imgsrc1={ModBasa1}
              imgsrc2={ModBasa2}
              imgsrc3={ModBasa3}
              imgsrc4={ModBasa4}
              imgsrc5={ModBasa5}
              description={t('EscCards.descriptionCard7')}
              require = {t('EscCards.requireCard7.gral')}
              requiref = {t('EscCards.requireCard7.fisico')}
              requirep = {t('EscCards.requireCard7.previos')}
              requiree = {t('EscCards.requireCard7.equipo')}
              requirem = {t('EscCards.requireCard7.medicos')}
              requireo1 = {t('EscCards.requireCard7.medicos')}
              requireo2 = {t('EscCards.requireCard7.medicos')}
              altitude = {t('EscCards.altitudeCard7')}
              cost = {t('EscCards.costCard7')}
              length = {t('EscCards.lengthCard7')}
              usd = {'$ 170 USD'}
              eur = {'$ 150 EU'}
              id = {'popocatepetl'}/></div>     
             </div>   
            </div>
        )
    }

}

export default withTranslation()(EscCards)