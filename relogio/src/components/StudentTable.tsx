import { Student } from "@/types/Student"

type Props = { // TYPA O COMPONENTE STUDENT COM O ARRAY DE STUDANTES CRIADOS ANTERIORMENTE
  students: Student[]
}

export const StudentTable = ( {students}:Props ) => {
  return (
    <div>
      <table className="w-full border border-gray-600 rounded-md overflow-hidden" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Grade 1</th>
            <th>Grade 2</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}