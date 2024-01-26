package nl.itvitae.ocaapp.seeder;

import java.util.Arrays;
import java.util.List;
import lombok.RequiredArgsConstructor;
import nl.itvitae.ocaapp.question.Question;
import nl.itvitae.ocaapp.question.QuestionRepository;
import nl.itvitae.ocaapp.tag.Tag;
import nl.itvitae.ocaapp.tag.TagRepository;
import org.springframework.boot.CommandLineRunner;

@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {

  private final QuestionRepository questionRepository;
  private final TagRepository tagRepository;

  @Override
  public void run(String... args) {
    if (tagRepository.count() == 0) {
      final List<Tag> tags = Arrays.stream(TagData.values()).map(TagData::tag).toList();
      for (Tag tag : tags) {
        tagRepository.save(tag);
      }
    }

    if (questionRepository.count() == 0) {
      final List<Question> questions = QuestionData.questionList();
      for (Question question : questions) {
        questionRepository.save(question);
      }
    }
  }
}
