import ListOfCharacters from "./ListOfCharacters";
import styles from "./ListOfCharacters.module.css";
import ExtraInfo from "./ExtraInfo";

export default function PostsPage({ params }) {
  return (
    <main>
      <ExtraInfo />
      <ListOfCharacters />
    </main>
  );
}
