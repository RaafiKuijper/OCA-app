package nl.itvitae.ocaapp.seeder;

import java.util.List;
import lombok.AllArgsConstructor;
import nl.itvitae.ocaapp.fragment.FragmentRepository;
import nl.itvitae.ocaapp.option.OptionRepository;
import nl.itvitae.ocaapp.question.Question;
import nl.itvitae.ocaapp.question.QuestionRepository;
import nl.itvitae.ocaapp.tag.TagRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class Seeder implements CommandLineRunner {

  private final TagRepository tagRepository;
  private final QuestionRepository questionRepository;
  private final OptionRepository optionRepository;
  private final FragmentRepository fragmentRepository;
  private static final int QUESTIONS = 10;

  @Override
  public void run(String... args) {
    if (tagRepository.count() == 0) {
      seedTags();
    }

    if (optionRepository.count() == 0) {
      seedOptions();
    }

    if (fragmentRepository.count() == 0) {
      seedFragments();
    }

    if (questionRepository.count() == 0) {
      seedQuestions();
    }
  }

  private void seedQuestions() {
    for (int i = 1; i <= QUESTIONS; i++) {
      final String text = TextData.getText(i);
      final String explanation = ExplanationData.getExplanation(i);
      final Question question = new Question(text, List.of(), explanation, List.of());
      questionRepository.save(question);
    }
  }

  private void seedFragments() {
  }

  private void seedOptions() {
  }

  private void seedTags() {
  }
}
