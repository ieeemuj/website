class TwitterCard {
  constructor(fields) {
    this.title = fields.title[0].text;
    this.description = fields.description[0].text;
    this.image = fields.image.url;
    this.imageAlt = fields.image.alt;
    this.cardType = fields.card_type === 'Standard Summary Card' ? 'summary' : 'summary_large_image';
    this.twitterHandle = fields.twitter_handle;
  }

  object() {
    return {
      title: this.title,
      description: this.description,
      image: this.image,
      imageAlt: this.imageAlt,
      cardType: this.cardType,
      twitterHandle: this.twitterHandle,
    };
  }
}

export default TwitterCard;
