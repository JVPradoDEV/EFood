class Item {
  type: string;
  description: string;
  infos: string[];
  image: string;
  title: string;
  rating: number;

  constructor(
    type: string,
    description: string,
    infos: string[],
    image: string,
    title: string,
    rating: number,
  ) {
    this.type = type;
    this.description = description;
    this.infos = infos;
    this.image = image;
    this.title = title;
    this.rating = rating;
  }
}

export default Item;
