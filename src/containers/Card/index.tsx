import star from "../../assets/rating.png";

import {
  CardBody,
  ImgDiv,
  InfoContainer,
  MoreButton,
  Tag,
  TagDiv,
  TitleDiv,
} from "./styles";

type Props = {
  type: string;
  description: string;
  infos: string[];
  image: string;
  title: string;
  rating: number;
};

const Card = ({ image, infos, title, rating, description, type }: Props) => (
  <>
    <CardBody>
      <ImgDiv>
        <img src={image} alt={type} />
        <TagDiv>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </TagDiv>
      </ImgDiv>
      <InfoContainer>
        <TitleDiv>
          <h2>{title}</h2>
          <span>
            <h2>{rating}</h2>
            <img src={star} />
          </span>
        </TitleDiv>
        <p>{description}</p>
        <MoreButton to={`/perfil/${type.toLowerCase()}`} type="button">
          Saiba mais
        </MoreButton>
      </InfoContainer>
    </CardBody>
  </>
);

export default Card;
