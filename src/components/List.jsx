export default function List({ tasks }) {
  return (
    <>
      <h3 className="list-title">Here's what you have to do:</h3>

      <ul className="list">
        {tasks.map(({ task }) => {
          return (
            <li key={task} className="list-item">
              {task}
            </li>
          );
        })}
      </ul>
    </>
  );
}
