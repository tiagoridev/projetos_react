type Props = {
  rate: number;
}

export const EmotionRating = ({ rate}: Props) => {
  if( rate > 5 ) rate = 5; // limita a nota em max de 5
  if( rate < 0 ) rate = 0; // limita a nota em min de 0

  const rateInt = Math.floor(rate); // Arredonda nota para baixo

  const face = '😄'.repeat(rateInt) + '😶'.repeat(5 - rateInt); // exibi a diferença total de faces

  return(

    <div className="flex items-center" >
      <div className="bg-gray-700 p-2 rounded"  >{rate.toFixed(1)}</div>
      <div>{face}</div>
    </div>
    
  )
}