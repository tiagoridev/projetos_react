import { Student } from "@/types/Student"

type Props = { // TYPA O COMPONENTE STUDENT COM O ARRAY DE STUDANTES CRIADOS ANTERIORMENTE
  students: Student[]
}

export const StudentTable = ( {students}:Props ) => {
  return (
    <div>
      <table className="w-full border border-gray-600 rounded-md overflow-hidden" >
        <thead>
          <tr className='text-center border-b border-gray-600 bg-gray-800' >
            <th className="p-3" >Name</th>
            <th className="p-3" >Status</th>
            <th className="p-3" >Grade 1</th>
            <th className="p-3" >Grade 2</th>
            <th className="p-3" >Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map( item => (
            <tr key = {item.id} className="text-gray-800 bg-gray-400 border-b text-center hover:bg-gray-300 duration-100 cursor-pointer" >
              <td className="flex text-left items-center p-3" >
                <img src={item.avatar} alt={item.name} className="w-20 rounded-full mr-3" />
                <div>
                  <div className="font-bold" >{item.name}</div>
                  <div >{item.email}</div>
                </div>
              </td>
              <td>
                {item.active && <div className="px-2 py-1 inline-block rounded-md bg-green-600 text-white" >ACTIVE</div>}
                {!item.active && <div className="px-2 py-1 inline-block rounded-md bg-red-600 text-white" >INACTIVE</div>}
              </td>
              <td>
                <div>{item.grade1}</div>
              </td>
              <td>
                <div>{item.grade2}</div>
              </td>
              <td className="font-bold" >
                {item.active ? <div>{((item.grade1 + item.grade2) / 2).toFixed(1)}</div> : <div>--</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}