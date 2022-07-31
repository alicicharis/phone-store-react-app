import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div>
      <div className={classes.loading}></div>
    </div>
  );
};

export default LoadingSpinner;
