interface CatImageProps {
  //id?: string;
  image: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}
export const CatImage: React.FC<CatImageProps> = ({
  //id,
  image,
  altText,
  licenceType,
  licenceUrl,
  attributionName,
  attributionUrl,
}) => (
  <>
    <img className="card__image" src={image} alt={altText} />
    <p className="card__text__small">
      Image licenced under <a href={licenceUrl}>{licenceType}</a>
      {attributionName && (
        <>
          &nbsp;by <a href={attributionUrl}>{attributionName}</a>
        </>
      )}
    </p>
  </>
);
