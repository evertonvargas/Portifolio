import styles from "./styles.module.scss"

interface CardProps{
  name: string;
  urlImg: string;
  link: string;
}

export function Card({name, urlImg, link}: CardProps){
  return(
    <a href={link} className={styles.container} style={{backgroundImage: `url("${urlImg}")`}}>
      <span><p>{name}</p></span>
    </a>
  );
}