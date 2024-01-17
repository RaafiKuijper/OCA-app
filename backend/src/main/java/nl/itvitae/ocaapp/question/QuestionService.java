package nl.itvitae.ocaapp.question;

import java.util.List;
import java.util.Optional;
import nl.itvitae.ocaapp.fragment.Fragment;
import nl.itvitae.ocaapp.fragment.FragmentRepository;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.option.OptionRepository;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class QuestionService {

  private final QuestionRepository questionRepository;
  private final OptionRepository optionRepository;
  private final FragmentRepository fragmentRepository;

  public Iterable<Question> getAll() {
    return questionRepository.findAll();
  }

  public Optional<Question> getById(long id) {
    return questionRepository.findById(id);
  }

  public Question createTestQuestion() {
    final String text = "this is a question, or is it?";
    final List<Option> options = optionRepository.saveAll(
        List.of((new Option("incorrect answer", false)),
            (new Option("invalid answer", false)),
            (new Option("correct answer", true))));
    final String explanation = "this is the answer because i said so";
    final List<Fragment> fragments = fragmentRepository.saveAll(
        List.of(new Fragment("""
                public class Main{
                    public static void main(String[] args) {
                        System.out.println("hello world");
                    }
                }"""),
            new Fragment("""
                public class Main{
                    public static void main(String[] args) {
                        System.out.println("goodbye world");
                    }
                }""")
        )
    );
    final Question question = new Question(text, options, explanation, fragments);
    return questionRepository.save(question);
  }

  public Optional<Question> getById(Long id) {
    return questionRepository.findById(id);
  }

  public Question createQuestion(Question question) {
    for (Option option :
        question.getOptions()) {
      optionRepository.save(option);
    }

    for (Fragment fragment :
        question.getFragments()) {
      fragmentRepository.save(fragment);
    }
    return questionRepository.save(question);
  }
}

