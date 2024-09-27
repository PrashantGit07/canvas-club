import Image from "next/image";
import Link from "next/link";
import HomePage from "./HomePage/page";
import MainContent from "./MainContent/page";
import ExhibitionDetails from "./Exhibition-Details/page";


export default function Home() {
  return (
    <>

      <MainContent />
      <ExhibitionDetails />
    </>
  );
}
