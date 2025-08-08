import { useQuery, gql } from '@apollo/client';

const GET_PROFESSORS = gql`
  query GetProfessors {
    professors {
      id
      name
      department
      averageRating
    }
  }
`;

interface Professor {
  id: number;
  name: string;
  department: string;
  averageRating: number;
}

interface ProfessorData {
  professors: Professor[];
}

function ProfessorList() {
  const { loading, error, data } = useQuery<ProfessorData>(GET_PROFESSORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.professors.map((prof) => (
        <li key={prof.id}>
          {prof.name} - {prof.department} (Rating: {prof.averageRating})
        </li>
      ))}
    </ul>
  );
}

export default ProfessorList;