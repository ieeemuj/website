class GeneralCard {
  constructor(fields) {
    this.title = fields.title[0].text;
    this.description = fields.description[0].text;
    this.image = fields.image.url;
    this.imageAlt = fields.image.alt;
  }

  object() {
    return {
      title: this.title,
      description: this.description,
      image: this.image,
      imageAlt: this.imageAlt,
    };
  }
}

export default GeneralCard;
