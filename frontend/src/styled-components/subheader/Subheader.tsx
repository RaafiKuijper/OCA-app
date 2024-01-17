import classes from "./SubHeader.module.css";

const Subheader = (props: { text: string }) => {
  return (
    <>
      <h2 className={classes.Subheader}>{props.text}</h2>
    </>
  );
};

export default Subheader;
