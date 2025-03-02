import Footer from '@/components/footer/footer';
import React from 'react';

const MentionsLegales: React.FC = () => {
    return (
        <div>
            <h1>Mentions Légales</h1>
            
            <h2>Éditeur du Site</h2>
            <p>Nom : Charles Lambret</p>
            <p>Adresse : 9 Rue Marcel Sembat</p>
            <p>Téléphone : 06 66 87 12 43</p>
            <p>Email : charleslambretpro@gmail.com</p>
            <p>Forme juridique : Micro-entreprise</p>
            <p>Numéro SIRET : 885 180 778 00023</p>
            <p>Directeur de la publication : Charles Lambret</p>
            
            <h2>Hébergeur</h2>
            <p>Nom : Hostinger International Ltd</p>
            <p>Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
            
            <h2>Propriété Intellectuelle</h2>
            <p>
                Tous les contenus présents sur ce site, incluant les textes, images, graphiques, logos, icônes, et logiciels, sont la propriété de Charles Lambret et sont protégés par les lois françaises et internationales sur la propriété intellectuelle. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Charles Lambret.
            </p>
            
            <h2>Limitation de Responsabilité</h2>
            <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé, …).
            </p>
            <p>
                Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, Charles Lambret ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
            </p>
            
            <h2>Liens Hypertextes</h2>
            <p>
                Le site de Charles Lambret peut contenir des liens hypertextes vers d’autres sites. Cependant, Charles Lambret n'a pas la possibilité de vérifier le contenu des sites ainsi visités et n’assumera en conséquence aucune responsabilité de ce fait.
            </p>
            
            <h2>Confidentialité</h2>
            <p>
                Pour plus d'informations sur la manière dont vos données personnelles sont collectées et utilisées, veuillez consulter notre Politique de Confidentialité.
            </p>
            <Footer />
        </div>
    );
};

export default MentionsLegales;