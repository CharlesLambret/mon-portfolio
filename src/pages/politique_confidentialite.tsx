import Footer from '@/components/footer/footer';
import React from 'react';

const PolitiqueConfidentialite: React.FC = () => {
    return (
        <>
        <div>
            <h1>Politique de Confidentialité</h1>
            <h2>1. Introduction</h2>
            <p>
                Charles Lambret, résidant au 9 Rue Marcel Sembat, s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <h2>2. Collecte des Données Personnelles</h2>
            <p>
                Nous collectons uniquement les données personnelles suivantes via le formulaire de contact :
            </p>
            <ul>
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Message</li>
            </ul>
            <h2>3. Utilisation des Données</h2>
            <p>
                Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul>
                <li>Répondre à vos demandes de contact ou de collaboration envoyées via le formulaire de contact.</li>
            </ul>
            <h2>4. Base Légale</h2>
            <p>
                Le traitement de vos données repose sur votre consentement explicite lorsque vous soumettez le formulaire de contact.
            </p>
            <h2>5. Partage des Données</h2>
            <p>
                Vos données personnelles ne sont pas vendues ni partagées avec des tiers, sauf :
            </p>
            <ul>
                <li>Pour se conformer à des obligations légales ou réglementaires.</li>
            </ul>
            <h2>6. Durée de Conservation</h2>
            <p>
                Les données personnelles collectées via le formulaire de contact sont conservées pendant une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées et traitées. Elles seront supprimées après 3 ans sans interaction.
            </p>
            <h2>7. Vos Droits</h2>
            <p>
                Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
                <li>Accès : Demander l'accès à vos données personnelles.</li>
                <li>Rectification : Demander la correction de données inexactes.</li>
                <li>Effacement : Demander la suppression de vos données.</li>
                <li>Portabilité : Demander le transfert de vos données à un autre responsable de traitement.</li>
                <li>Opposition : Vous opposer au traitement de vos données pour des raisons légitimes.</li>
            </ul>
            <h2>8. Sécurité des Données</h2>
            <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation.
            </p>
            <h2>9. Contact</h2>
            <p>
                Pour toute question ou demande concernant cette politique de confidentialité, veuillez contacter Charles Lambret à l'adresse charleslambrettpro.
            </p>
            <h2>10. Modifications</h2>
            <p>
                Cette politique de confidentialité peut être mise à jour. Les modifications seront publiées sur cette page avec la date de la dernière mise à jour.
            </p>
            <Footer />
        </div>
        </>
        
    );
};

export default PolitiqueConfidentialite;