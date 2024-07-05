import ProcessDataCard from "./ProcessDataCard"
import NewComponent from "./newComponent"
import { Card } from "./ui/card"

export default function MainPage() {
    
  return (
   
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <h1 className="text-primary scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-center">Control Valve Sizing Tool</h1>
      <NewComponent/>
    </div>

)
}