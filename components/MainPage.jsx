import ProcessDataCard from "./ProcessDataCard"
import ResultCard from "./ResultCard"

export default function MainPage() {
    
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <h1 className="text-primary scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-center">Control Valve Sizing Tool</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
        <ProcessDataCard/>
        <ResultCard/>
        </div>
    </div>

)
}