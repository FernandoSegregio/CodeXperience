export default function Divider() {
  return (
    <div className='relative h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden'>
      <div className='relative h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden'></div>
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-70"></div>
    </div>
  )
}
