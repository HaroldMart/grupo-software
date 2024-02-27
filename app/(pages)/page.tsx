import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/buttons";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Button/>
    </div>
  );
}
