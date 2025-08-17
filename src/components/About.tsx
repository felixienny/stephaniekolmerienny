import React from "react";

function About() {
  return (
    <div className="About container text-justify p-4">
      <div className="grid row">
        <div className="col-lg">
          <img
            src="/stephanie_kolmer_ienny.jpg"
            alt="Stephanie Kolmer Ienny"
            className="img-fluid rounded mx-auto d-block"
          />
        </div>
        <div className="col-lg pt-2">
          <h2>Stéphanie KOLMER-IENNY</h2>
          <p>
            Maître Stéphanie KOLMER-IENNY est avocat inscrit au Barreau de
            Reims. Ses domaines de compétences principaux sont en Droit du
            travail et social et Droit de la famille, des personnes et de leur
            patrimoine. Maître KOLMER-IENNY intervient à la fois comme conseil
            en amont des conflits, et comme avocat chargé d'assurer la défense
            de vos intérêts devant les tribunaux, que ce soit en défense, ou
            pour engager une procédure contre l'adversaire.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
