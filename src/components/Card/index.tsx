import styles from "./styles.module.scss"

interface CardProps{
  name: string;
  urlImg: string;
}

export function Card({name, urlImg}: CardProps){
  return(
    <a className={styles.container} style={{backgroundImage: `url("${urlImg}")`}}>
      <span><p>{name}</p></span>
    </a>
  );
}