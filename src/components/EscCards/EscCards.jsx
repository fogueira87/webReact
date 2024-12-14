import React, { useEffect } from "react";
import EscCard from "./EscCardUI";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Image Imports
import CoverAculco from "../../images/coverAculco.jpg";
import ModAculco1 from "../../images/modAculco2.jpg";
import ModAculco2 from "../../images/faltaModal.jpg";
import ModAculco3 from "../../images/faltaModal.jpg";
import ModAculco4 from "../../images/faltaModal.jpg";
import ModAculco5 from "../../images/faltaModal.jpg";

import CoverVentanas from "../../images/coverEscVen.jpg";
import ModVentanas1 from "../../images/modVentanas3.jpg";
import ModVentanas2 from "../../images/modVentanas2.jpg";
import ModVentanas3 from "../../images/modVentanas1.jpg";
import ModVentanas4 from "../../images/modVentanas5.jpg";
import ModVentanas5 from "../../images/modVentanas4.JPG";

import CoverRQ from "../../images/coverRQ.jpg";
import ModRQ1 from "../../images/modRQ1.jpg";
import ModRQ2 from "../../images/modRQ2.jpg";
import ModRQ3 from "../../images/modRQ3.jpg";
import ModRQ4 from "../../images/modRQ4.jpg";
import ModRQ5 from "../../images/modRQ5.jpg";

import CoverBasa from "../../images/faltaModal.jpg";
import ModBasa1 from "../../images/faltaModal.jpg";
import ModBasa2 from "../../images/faltaModal.jpg";
import ModBasa3 from "../../images/faltaModal.jpg";
import ModBasa4 from "../../images/faltaModal.jpg";
import ModBasa5 from "../../images/faltaModal.jpg";

import CoverBernal from "../../images/coverPB.jpg";
import ModBernal1 from "../../images/modPB1.jpg";
import ModBernal2 from "../../images/modPB2.jpg";
import ModBernal3 from "../../images/modPB1.jpg";
import ModBernal4 from "../../images/modPB4.jpg";
import ModBernal5 from "../../images/modPB1.jpg";

import CoverDinamos from "../../images/citlaCover.jpg";
import ModDinamos1 from "../../images/citlamod1.jpg";
import ModDinamos2 from "../../images/citlamod2.jpg";
import ModDinamos3 from "../../images/citMod5.jpg";
import ModDinamos4 from "../../images/faltaModal.jpg";
import ModDinamos5 from "../../images/faltaModal.jpg";

import CoverJilo from "../../images/monjes.jpg";
import ModJilo1 from "../../images/faltaModal.jpg";
import ModJilo2 from "../../images/faltaModal.jpg";
import ModJilo3 from "../../images/faltaModal.jpg";
import ModJilo4 from "../../images/faltaModal.jpg";
import ModJilo5 from "../../images/faltaModal.jpg";

import Coversanseb from "../../images/cover_Send_sanseb.jpg";
import ModSebas1 from "../../images/sebmod1.jpg";
import ModSebas2 from "../../images/sebmod2.jpg";
import ModSebas3 from "../../images/faltaModal.jpg";
import ModSebas4 from "../../images/sebmod4.jpg";
import ModSebas5 from "../../images/sebmod5.jpg";

const EscCards = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const escCardsData = [
    {
      imgsrc: CoverVentanas,
      titleKey: "EscCards.titleCard1",
      subtitleKey: "EscCards.subtitleCard1",
      textKey: "EscCards.textCard1",
      goKey: "Reservar",
      status: "btn btn-outline-success",
      imgsrcs: [ModVentanas1, ModVentanas2, ModVentanas3, ModVentanas4, ModVentanas5],
      descriptionKey: "EscCards.descriptionCard1",
      requirements: {
        gral: "EscCards.requireCard1.gral",
        fisico: "EscCards.requireCard1.fisico",
        previos: "EscCards.requireCard1.previos",
        equipo: "EscCards.requireCard1.equipo",
        medicos: "EscCards.requireCard1.medicos",
      },
      altitudeKey: "EscCards.altitudeCard1",
      costKey: "EscCards.costCard1",
      lengthKey: "EscCards.lengthCard1",
      usd: "$ 170 USD",
      eur: "$ 150 EU",
      id: "ventanas",
    },
    {
      imgsrc: CoverJilo,
      titleKey: "EscCards.titleCard2",
      subtitleKey: "EscCards.subtitleCard2",
      textKey: "EscCards.textCard2",
      goKey: "Reservar",
      status: "btn btn-outline-success",
      imgsrcs: [ModAculco1, ModAculco2, ModAculco3, ModAculco4, ModAculco5],
      descriptionKey: "EscCards.descriptionCard2",
      requirements: {
        gral: "EscCards.requireCard2.gral",
        fisico: "EscCards.requireCard2.fisico",
        previos: "EscCards.requireCard2.previos",
        equipo: "EscCards.requireCard2.equipo",
        medicos: "EscCards.requireCard2.medicos",
      },
      altitudeKey: "EscCards.altitudeCard2",
      costKey: "EscCards.costCard2",
      lengthKey: "EscCards.lengthCard2",
      usd: "$ 180 USD",
      eur: "$ 160 EU",
      id: "aculco",
    },
    {
      imgsrc: CoverAculco,
      titleKey: "EscCards.titleCard3",
      subtitleKey: "EscCards.subtitleCard3",
      textKey: "EscCards.textCard3",
      goKey: "Reservar",
      status: "btn btn-outline-success",
      imgsrcs: [ModAculco1, ModAculco2, ModAculco3, ModAculco4, ModAculco5],
      descriptionKey: "EscCards.descriptionCard3",
      requirements: {
        gral: "EscCards.requireCard3.gral",
        fisico: "EscCards.requireCard3.fisico",
        previos: "EscCards.requireCard3.previos",
        equipo: "EscCards.requireCard3.equipo",
        medicos: "EscCards.requireCard3.medicos",
      },
      altitudeKey: "EscCards.altitudeCard3",
      costKey: "EscCards.costCard3",
      lengthKey: "EscCards.lengthCard3",
      usd: "$ 180 USD",
      eur: "$ 160 EU",
      id: "aculco",
    },
    
    {
      imgsrc: CoverRQ,
      titleKey: "EscCards.titleCard4",
      subtitleKey: "EscCards.subtitleCard4",
      textKey: "EscCards.textCard4",
      goKey: "Reservar",
      status: "btn btn-outline-success",
      imgsrcs: [ModRQ1, ModRQ2, ModRQ3, ModRQ4, ModRQ5],
      descriptionKey: "EscCards.descriptionCard4",
      requirements: {
        gral: "EscCards.requireCard4.gral",
        fisico: "EscCards.requireCard4.fisico",
        previos: "EscCards.requireCard4.previos",
        equipo: "EscCards.requireCard4.equipo",
        medicos: "EscCards.requireCard4.medicos",
      },
      altitudeKey: "EscCards.altitudeCard4",
      costKey: "EscCards.costCard4",
      lengthKey: "EscCards.lengthCard4",
      usd: "$ 170 USD",
      eur: "$ 150 EU",
      id: "rq",
    },
    {
      imgsrc: CoverBernal,
      titleKey: "EscCards.titleCard5",
      subtitleKey: "EscCards.subtitleCard5",
      textKey: "EscCards.textCard5",
      goKey: "Reservar",
      status: "btn btn-outline-success",
      imgsrcs: [ModBernal1, ModBernal2, ModBernal3, ModBernal4, ModBernal5],
      descriptionKey: "EscCards.descriptionCard5",
      requirements: {
        gral: "EscCards.requireCard5.gral",
        fisico: "EscCards.requireCard5.fisico",
        previos: "EscCards.requireCard5.previos",
        equipo: "EscCards.requireCard5.equipo",
        medicos: "EscCards.requireCard5.medicos",
      },
      altitudeKey: "EscCards.altitudeCard5",
      costKey: "EscCards.costCard5",
      lengthKey: "EscCards.lengthCard5",
      usd: "$ 170 USD",
      eur: "$ 150 EU",
      id: "bernal",
    }
  ];

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {escCardsData.map((card, index) => (
          <div key={index} className={`col-lg-4 col-md-6 col-sm-12 pt-2 ${index >= 3 ? "pt-4" : ""}`} id={card.id}>
            <EscCard
              imgsrc={card.imgsrc}
              title={t(card.titleKey)}
              subtitle={t(card.subtitleKey)}
              text={t(card.textKey)}
              go={t(card.goKey)}
              status={card.status}
              imgsrc1={card.imgsrcs[0]}
              imgsrc2={card.imgsrcs[1]}
              imgsrc3={card.imgsrcs[2]}
              imgsrc4={card.imgsrcs[3]}
              imgsrc5={card.imgsrcs[4]}
              description={t(card.descriptionKey)}
              require={t(card.requirements.gral)}
              requiref={t(card.requirements.fisico)}
              requirep={t(card.requirements.previos)}
              requiree={t(card.requirements.equipo)}
              requirem={t(card.requirements.medicos)}
              altitude={t(card.altitudeKey)}
              cost={t(card.costKey)}
              length={t(card.lengthKey)}
              usd={card.usd}
              eur={card.eur}
              id={card.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscCards;
