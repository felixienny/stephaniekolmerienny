import React from "react";
import stephanie_kolmer_ienny from "./stephanie_kolmer_ienny.jpg";

function Overview(props: { job: string }) {
  return (
    <div className="Overview">
      <h1>{props.job === "avocat" ? "Avocat" : "Médiateur"}</h1>
      {props.job === "avocat" ? (
        <div>
          <p>
            Stéphanie KOLMER-IENNY est également avocate spécialisée en droit de
            la famille et du travail. Dans ce rôle, elle aide les clients à
            résoudre les problèmes juridiques liés à la famille et au travail,
            tels que les divorce, la garde d'enfants, les litiges relatifs à la
            pension alimentaire, les questions de harcèlement au travail, etc.
            Stéphanie est reconnue pour son approche personnalisée et attentive
            à chaque client, ainsi que pour sa compréhension approfondie des
            lois et des politiques en matière de droit de la famille et du
            travail. Elle utilise ses connaissances et son expérience pour aider
            les clients à trouver des solutions qui répondent à leurs besoins
            uniques et qui sont conformes à la loi. En tant qu'avocate,
            Stéphanie se tient au courant des dernières développements dans son
            domaine et s'engage à fournir des conseils juridiques clairs et
            précis à ses clients. Elle s'efforce de les aider à naviguer dans le
            système judiciaire et à défendre leurs droits avec succès. En
            résumé, le métier d'avocate en droit de la famille et du travail
            requiert une connaissance approfondie des lois, une capacité à
            communiquer clairement, une grande capacité d'analyse et une
            capacité à trouver des solutions créatives aux problèmes juridiques
            complexes. Stéphanie KOLMER-IENNY possède toutes ces qualités et
            plus encore, ce qui en fait une avocate compétente et dévouée pour
            ses clients.
          </p>
        </div>
      ) : (
        <div>
          <p>
            Stéphanie KOLMER-IENNY exerce le métier de médiateur, un rôle clé
            dans la résolution de conflits et la communication entre les parties
            en litige. En tant que tiers impartial, Stéphanie a pour mission
            d'aider les personnes à résoudre leurs différends de manière
            constructive et amicale. Elle peut travailler dans divers domaines,
            tels que les relations familiales, les litiges commerciaux, les
            conflits du travail, les disputes entre voisins, etc. Stéphanie
            utilise des techniques de communication et de négociation pour aider
            les parties à comprendre les perspectives de chacun et à trouver des
            solutions qui conviennent à toutes les parties concernées. Pour
            exercer ce métier, Stéphanie a suivi une formation spécialisée en
            médiation et continue de maintenir ses compétences à jour grâce à
            une formation continue. Stéphanie peut travailler en tant
            qu'indépendante ou être employée par des organisations publiques ou
            privées. En résumé, le métier de médiateur requiert une excellente
            communication, une capacité à écouter attentivement, une grande
            capacité de négociation et la capacité de faire preuve
            d'impartialité, des qualités que Stéphanie possède en abondance.
          </p>
        </div>
      )}
    </div>
  );
}

export default Overview;
