import classes from "./styles.module.scss";

interface IProps {
  color?: "primary" | "secondary" | "info" | "success" | "error";
}

const Ripple: React.FC<IProps> = ({ color = "info" }) => {
  return (
    <span
      className={classes.rippleSpan}
      onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const span = event.currentTarget;
        span.style.left = `${
          event.clientX -
          span.getBoundingClientRect().left -
          span.offsetWidth / 2
        }px`;
        span.style.top = `${
          event.clientY -
          span.getBoundingClientRect().top -
          span.offsetHeight / 2
        }px`;
        if (color) span.classList.add(`${color}-bg`);
        span.classList.add(classes.ripple);
        setTimeout(() => {
          if (color) span.classList.remove(`${color}-bg`);
          span.classList.remove(classes.ripple);
          span.style.left = "0px";
          span.style.top = "0px";
        }, 500);
      }}
    ></span>
  );
};

export default Ripple;
