const AnswerQuestionFeedback = (props: { score: string }) => {
  return (
    <p
      style={{
        textAlign: "center",
        margin: "1em",
        color: props.score === "Passed" ? "green" : "red",
        fontWeight: "bold",
        fontSize: "1.2em",
      }}
    >
      {props.score}
    </p>
  );
};

export default AnswerQuestionFeedback;
