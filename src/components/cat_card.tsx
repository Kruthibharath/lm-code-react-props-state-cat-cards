import Cat from "../data/cat";

/*interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}*/

export const CatCard: React.FC<Cat> = (props) => (
  <div className="card">
    <h3 className="card__text card__header">{props.name}</h3>
    <p className="card__text">{props.species}</p>
    <p className="card__text">{props.favFoods}</p>
    <p className="card__text">{props.birthYear}</p>
  </div>
);
