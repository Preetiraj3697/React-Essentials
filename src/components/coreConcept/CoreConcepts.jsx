export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </li>
  );
}
