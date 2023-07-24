import Image from "next/image";
// import styles from './page.module.css'
import adddata from "./firebase/firebaseout";
import Transaction from "./components/inputform";
import Showing from "./components/showdata";
export default function Home() {
  return (
    <div>
      <Transaction />
      <Showing />
    </div>
  );
}
