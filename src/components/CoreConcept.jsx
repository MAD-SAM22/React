export default function CoreConept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3> {props.title}</h3>
      <p> {props.description}</p>
    </li>
  );
}