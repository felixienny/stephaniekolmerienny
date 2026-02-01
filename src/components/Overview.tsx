import React from "react";

function Overview(props: { job: "droit" | "mediation" }) {
  return (
    <div className="Overview p-4">
      <h1>{props.job === "droit" ? "Avocat" : "Médiatrice"}</h1>
      {props.job === "droit" ? (
        <div>
            <p>Maître Stéphanie KOLMER-IENNY est avocat depuis 1992.</p>
            <p>Dans le cadre d’une activité généraliste, elle développe notamment ses compétences en droit de la famille, des personnes et de leur patrimoine (divorce, séparation, garde d’enfants séparations, fixation de pension alimentaire, successions), ainsi que dans le contentieux civil et commercial des contrats et de la responsabilité.</p>
            <p>A ce titre, elle intervient devant de nombreuses juridictions : Juge aux affaires familiales, Juge de l’exécution, Juge des Contentieux de la Protection, Tribunal de Commerce, Conseil de Prud’hommes.</p>
            <p>Maître KOLMER-IENNY garantit la défense des intérêts des particuliers et des entreprises. Elle les représente et les assiste devant les Tribunaux mais elle les conseille également en amont des contentieux afin d’anticiper ou d’éviter les procédures judiciaires.</p>
            <p>Elle est attentive aux besoins et attente de chaque client et privilégie une approche personnalisée de ses dossiers. Elle déploie sa compétence, son humanité et son efficacité à leur service.</p>
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
