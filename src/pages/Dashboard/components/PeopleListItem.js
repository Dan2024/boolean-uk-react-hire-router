import { Link } from "react-router-dom";

function PeopleListItem({ person }) {
  console.log(person);
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <p>
        <Link to={`/view/:${person.login.uuid}`} state={{ person }}>
          View Profile
        </Link>
      </p>

      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

export default PeopleListItem;
