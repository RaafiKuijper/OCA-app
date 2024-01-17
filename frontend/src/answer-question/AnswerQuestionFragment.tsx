const AnswerQuestionFragment = (props: { text: string[] }) => {
  return (
    <section
      style={{
        margin: "1em",
        fontSize: "1.2em",
      }}
    >
      <div>
        {props.text.map((fragment) =>
          fragment
            .split("\\n")
            .map((line: string) => <pre key={line}>{line}</pre>)
        )}
      </div>
    </section>
  );
};

export default AnswerQuestionFragment;
