package nl.itvitae.ocaapp.question;

import java.util.List;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class QuestionService {

  private final QuestionRepository questionRepository;

  public Iterable<Question> getAll() {
    return questionRepository.findAll();
  }

  public Question createTestQuestion() {
    final String text = "this is a question, or it it?";
    final List<String> options = List.of("incorrect answer", "invalid answer", "correct answer");
    final String explanation = "this is the answer because i said so";
    final String answer = "correct answer";
    final Question question = new Question(text, options, explanation, answer);
    return questionRepository.save(question);
  }
}
