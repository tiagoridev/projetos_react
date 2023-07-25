

const Page = () =>{ 
  
  
    const getHour = new Date()
    let hora = getHour.toLocaleTimeString() 
    // FALTA INCLUIR CONTAGEM AUTOMÁTICA 
   

  return(
      <div className="bg-blue-500  h-screen flex flex-col items-center justify-center">
      <p className="text-8xl">{hora}</p>
      <p className="text-5xl font-bold">
        { hora >= '00:00' && hora < '12:00' && "Bom dia" }
        { hora >= '12:00' && hora < '18:00' && "Boa tarde" }
        { hora >= '18:00' && hora < '23:59' && "Boa Noite" }
      </p>
      
    </div>
  )
}

export default Page