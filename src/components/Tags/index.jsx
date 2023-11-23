import "./index.scss";

function Tags({ tags, id }) {
  return (
    <ul className="tags">
      {tags.map((tag) => {
        return <li key={id + tag}>{tag}</li>;
      })}
    </ul>
  );
}
export default Tags;
