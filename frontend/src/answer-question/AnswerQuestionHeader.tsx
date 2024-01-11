type PropType = {
  text: string;
};

// Zou met destructering moeten werken
const AnswerQuestionHeader = (props: PropType) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  );
};

export default AnswerQuestionHeader;
