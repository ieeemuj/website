class SEO {
  constructor(body) {
    if (body) {
      body.forEach((card) => {
        if (card.type === 'social_card') {
          const fields = card.primary;
          this.title = fields.page_title;
          this.description = fields.description;
          this.image = fields.image;
          this.twitterHandle = fields.twitter_handle;
          this.twitterCardType = fields.twitter_card_type;
        }
      });
    }
  }

  object() {
    return {
      title: this.title,
      description: this.description,
      image: this.image,
      twitterHandle: this.twitterHandle,
      twitterCardType: this.twitterCardType,
    };
  }
}

export default SEO;
