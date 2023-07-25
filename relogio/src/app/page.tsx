import { StudentTable } from "@/components/StudentTable";
import { students } from "@/datas/students";

const Page = () =>{

  return(
    
    <div className="container mx-auto" >
      <h1 className="text-4xl mb-4" >LISTA DE ESTUDANTES</h1>
      <StudentTable students={students} />
    </div>
  );
}

export default Page