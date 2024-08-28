export default function Parallax() {
  return (
    <div className="relative h-[600px]  max-h-96 overflow-hidden bg-fixed bg-center bg-contain bg-no-repeat bg-black w-full bg-[url('@assets/codefull.webp')]">
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  )
}
