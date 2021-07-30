import GeneralCard from './GeneralCard';
import TwitterCard from './TwitterCard';

class SEO {
  constructor(body) {
    body.forEach((card) => {
      if (card.type === 'general_card') {
        this.generalCard = new GeneralCard(card.primary);
      } else if (card.type === 'twitter_card') {
        this.twitterCard = new TwitterCard(card.primary);
      }
    });
  }

  object() {
    return {
      generalCard: this.generalCard.object(),
      twitterCard: this.twitterCard.object(),
    };
  }
}

export default SEO;
