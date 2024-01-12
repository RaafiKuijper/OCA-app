package nl.itvitae.ocaapp.answer;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.option.OptionService;
import nl.itvitae.ocaapp.question.Question;
import nl.itvitae.ocaapp.question.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class AnswerService {

  private final QuestionService questionService;
  private final OptionService optionService;

  public AnswerResult submitAnswer(AnswerBody body) {
    final Optional<Question> optionalQuestion = questionService.getById(body.questionId());
    if (optionalQuestion.isEmpty()) {
      return null;
    }
    final Question question = optionalQuestion.get();

    final List<Option> selected = optionService.getAllById(body.selectedIds());
    if (selected.size() != body.selectedIds().size()) {
      return null;
    }

    final Answer answer = new Answer(selected, question);

    return new AnswerResult(answer.isPassed());
  }
}
