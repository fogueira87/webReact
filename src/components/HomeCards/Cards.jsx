import React, {Component} from "react";
import Card from "./CardUI";
//import { Card } from "react-bootstrap";
import CoverHikes from '../../images/coversend.jpg'
import CoverEscalada from '../../images/esc5.jpg'
import CoverMontanha from '../../images/coverHomeMont.jpg'
import { withTranslation } from 'react-i18next';


class Cards extends Component{
    
    render(){
        //const{t} =useTranslation()
        const { t } = this.props;
        return(
            <div className="container-fluid d-flex justify-content-center pt-3">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4"><Card imgsrc={CoverHikes} title = {t('homeCards.Hikes')} text={t("homeCards.texto_Hikes")} go={t("homeCards.go")} link="/hikes"/></div>
                <div className="col-sm-12 col-md-6 col-lg-4"><Card imgsrc={CoverEscalada} title = {t("homeCards.Rock_Climbing")} text={t("homeCards.texto_rockclimb")} go={t("homeCards.go")} link="/esc"/></div>
                <div className="col-sm-12 col-md-6 col-lg-4"><Card imgsrc={CoverMontanha} title = {t("homeCards.Mountaneering")} text={t("homeCards.texto_mont")} go={t("homeCards.go")} link="/mont"/></div>   
              </div>   
            </div>
        )
    }

}

export default withTranslation()(Cards)