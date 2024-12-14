import React, { useEffect } from "react";
import SenCard from "./SendCardUI";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Image Imports
import CoverVentanas from "../../images/coverMontAju.jpg";
import ModVentanas1 from "../../images/modVentanas5.jpg";
import ModVentanas2 from "../../images/modVentanas2.jpg";
import ModVentanas3 from "../../images/modVentanas3.jpg";
import ModVentanas4 from "../../images/modVentanas1.jpg";
import ModVentanas5 from "../../images/ajusMod5.jpg";

import CoverArco from "../../images/arcoCover.jpg";
import ModArco1 from "../../images/arcmod1.JPG";
import ModArco2 from "../../images/arcmod2.jpg";
import ModArco3 from "../../images/arcmod3.jpg";
import ModArco4 from "../../images/arcmod4.JPG";
import ModArco5 from "../../images/faltaModal.jpg";

const SenCards = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the specific card if a hash exists in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Cards Data
  const senCardsData = [
    {
      imgsrc: CoverVentanas,
      titleKey: "SenCards.titleCard1",
      subtitleKey: "SenCards.subtitleCard1",
      textKey: "SenCards.textCard1",
      goKey: "Reservar",
      status: "btn btn-outline-success",
      imgsrcs: [ModVentanas1, ModVentanas2, ModVentanas3, ModVentanas4, ModVentanas5],
      descriptionKey: "SenCards.descriptionCard1",
      requirements: {
        gral: "SenCards.requireCard1.gral",
        fisico: "SenCards.requireCard1.fisico",
        previos: "SenCards.requireCard1.previos",
        equipo: "SenCards.requireCard1.equipo",
        medicos: "SenCards.requireCard1.medicos",
      },
      altitudeKey: "SenCards.altitudeCard1",
      costKey: "SenCards.costCard1",
      lengthKey: "SenCards.lengthCard1",
      usd: "$ 170 USD",
      eur: "$ 150 EU",
      id: "leones",
    },
    {
      imgsrc: CoverArco,
      titleKey: "SenCards.titleCard2",
      subtitleKey: "SenCards.subtitleCard2",
      textKey: "SenCards.textCard2",
      goKey: "Reservar",
      status: "btn btn-outline-success",
      imgsrcs: [ModArco1, ModArco2, ModArco3, ModArco4, ModArco5],
      descriptionKey: "SenCards.descriptionCard2",
      requirements: {
        gral: "SenCards.requireCard2.gral",
        fisico: "SenCards.requireCard2.fisico",
        previos: "SenCards.requireCard2.previos",
        equipo: "SenCards.requireCard2.equipo",
        medicos: "SenCards.requireCard2.medicos",
      },
      altitudeKey: "SenCards.altitudeCard2",
      costKey: "SenCards.costCard2",
      lengthKey: "SenCards.lengthCard2",
      usd: "$ 180 USD",
      eur: "$ 160 EU",
      id: "arco",
    },
  ];

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {senCardsData.map((card, index) => (
          <div key={index} className={`col-lg-4 col-md-6 col-sm-12 pt-2 ${index >= 3 ? "pt-4" : ""}`} id={card.id}>
            <SenCard
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

export default SenCards;
