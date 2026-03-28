
function PlatoCard({ nombre, categoria, precio, stock, disponible }) {
     return (
    <div className='bg-white rounded-xl shadow-md p-4 flex flex-col gap-2 border border-gray-150 m-4'>
      <div className='flex justify-between items-start'>
        <h3 className='font-bold text-gray-800 text-lg '>{nombre}</h3>
        <span className='text-green-600 font-semibold text-lg'>S/ {precio}</span>
      </div>
      <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full w-fit'>
        {categoria}
      </span>
      <div className='flex justify-between items-center mt-1'>
        <span className='text-gray-400 text-sm'>Stock: {stock}</span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          disponible
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-500'
        }`}>
          {disponible ? '✅ Disponible' : '❌ Agotado'}
        </span>
      </div>
    </div>
  );
}


export default PlatoCard