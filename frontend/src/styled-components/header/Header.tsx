import classes from "./Header.module.css";

const Header = (props: { text: string }) => {
  return (
    <>
      <h1 className={classes.Header}>{props.text}</h1>
    </>
  );
};

export default Header;
