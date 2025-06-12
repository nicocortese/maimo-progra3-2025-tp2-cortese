import HomeContainer from "@/components/HomeContainer";
import Navbar from "@/components/Navbar"; 
import MoviesGrid from "@/components/MoviesGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> 
      <HomeContainer />
      <MoviesGrid />
    </main>
  );
}
