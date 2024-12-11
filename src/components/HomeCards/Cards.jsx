import React, { Component } from "react";
import Card from "./CardUI";
import CoverHikes from '../../images/coversend.jpg';
import CoverEscalada from '../../images/esc5.jpg';
import CoverMontanha from '../../images/coverHomeMont.jpg';
import { withTranslation } from 'react-i18next';

class Cards extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <Card 
              imgsrc={CoverHikes} 
              title={t('homeCards.Hikes')} 
              text={t("homeCards.texto_Hikes")} 
              link="/hikes" 
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <Card 
              imgsrc={CoverEscalada} 
              title={t("homeCards.Rock_Climbing")} 
              text={t("homeCards.texto_rockclimb")} 
              link="/esc" 
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <Card 
              imgsrc={CoverMontanha} 
              title={t("homeCards.Mountaneering")} 
              text={t("homeCards.texto_mont")} 
              link="/mont"
            />
          </div>   
        </div>   
      </div>
    );
  }
}

export default withTranslation()(Cards);
