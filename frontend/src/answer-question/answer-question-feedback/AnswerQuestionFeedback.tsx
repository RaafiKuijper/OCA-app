const AnswerQuestionFeedback = (props: {
  score: string;
  explanation: string;
}) => {
  return (
    <section
      style={{
        textAlign: "center",
        margin: "1em",
        fontWeight: "bold",
        fontSize: "1.2em",
      }}
    >
      <p
        style={{
          color: props.score === "Passed" ? "green" : "red",
        }}
      >
        {props.score}
      </p>
      {props.explanation.split("\n").map((explanation) => (
        <p>{explanation}</p>
      ))}
    </section>
  );
};

export default AnswerQuestionFeedback;
