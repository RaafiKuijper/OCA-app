package nl.itvitae.ocaapp.question;

import java.util.List;
import java.util.Optional;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.option.OptionRepository;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class QuestionService {

  private final QuestionRepository questionRepository;
  private final OptionRepository optionRepository;

  public Iterable<Question> getAll() {
    return questionRepository.findAll();
  }

  public Optional<Question> getById(long id) {
    return questionRepository.findById(id);
  }


  public QuestionCount getCount() {
    return new QuestionCount(questionRepository.count());
  }

  public Question createTestQuestion() {
    final String text = "this is a question, or it it?";
    final List<Option> options = optionRepository.saveAll(
        List.of((new Option("incorrect answer", false)),
            (new Option("invalid answer", false)),
            (new Option("correct answer", true))));
    final String explanation = "this is the answer because i said so";
    final Question question = new Question(text, options, explanation);
    return questionRepository.save(question);
  }
}
