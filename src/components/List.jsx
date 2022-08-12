export default function List({ tasks }) {
  return (
    <>
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
