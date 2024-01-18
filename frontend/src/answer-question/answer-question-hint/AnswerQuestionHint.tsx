const AnswerQuestionHint = (props: { hint: string }) => {
  return (
    <p
      style={{
        textAlign: "center",
        marginTop: "1em",
        fontSize: "1.5em",
        color: "red",
      }}
    >
      {props.hint}
    </p>
  );
};

export default AnswerQuestionHint;
