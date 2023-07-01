import styles from '../styles/button.module.scss';

const Button = ({ buttonText, href }) => {
  const text = Array(10).fill(buttonText).join(' ');

  return (
    <a href={href}  >
      <button>
        <div className={styles.scroll}>
          <div className={styles.mscroll}>
            <span>{text}</span>
          </div>
        </div>
      </button>
    </a>
  );
};

export default Button;