package nl.itvitae.ocaapp.question;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import nl.itvitae.ocaapp.fragment.Fragment;
import nl.itvitae.ocaapp.fragment.FragmentRepository;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.option.OptionRepository;
import nl.itvitae.ocaapp.option.OptionResponse;
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

  public Optional<Question> getQuestionById(long id) {
    return questionRepository.findById(id);
  }

  public QuestionCount getCount() {
    return new QuestionCount(questionRepository.count());
  }

  public List<Question> getRandomQuestions(int questionAmount) {
    List<Question> questions = new ArrayList<>(questionRepository.findAll());
    Collections.shuffle(questions);
    return questions.subList(0, questionAmount);
  }

  public QuestionResponse getById(long id) {
    if (questionRepository.findById(id).isEmpty()) {
      return null;
    }

    final Question question = questionRepository.findById(id).get();
    final long qid = question.getId();
    final String text = question.getText();

    final List<OptionResponse> options = question.getOptions().stream().map(option -> {
      final long oid = option.getId();
      final String oText = option.getText();
      return new OptionResponse(oid, oText);
    }).toList();

    final String explanation = question.getExplanation();
    final long correct = question.getOptions().stream()
        .filter(Option::getIsCorrect)
        .count();

    return new QuestionResponse(qid, text, options, explanation, correct);
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

