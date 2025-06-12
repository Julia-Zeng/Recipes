import styles from "./CardMain.module.css";
import { useNavigate } from "react-router-dom";

const CardMain = ({ id, name, cardImg, cookTimeMinutes, difficulty }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={cardImg} alt="Avatar" style={{ width: "200px" }} />
      <div className={styles.container}>
        <h4>
          <b>{name}</b>
        </h4>
        <p>{`Cook Time ${cookTimeMinutes} minutes`}</p>
        <p>{`Difficulty ${difficulty}`}</p>
      </div>
    </div>
  );
};

export default CardMain;