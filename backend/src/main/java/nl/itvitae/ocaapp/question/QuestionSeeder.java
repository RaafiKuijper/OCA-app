package nl.itvitae.ocaapp.question;

import java.util.List;
import lombok.RequiredArgsConstructor;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.option.OptionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class QuestionSeeder implements CommandLineRunner {

  private final QuestionRepository questionRepository;
  private final OptionRepository optionRepository;

  private List<Question> questionList() {
    return List.of(
        new Question("""
            What is the technique of structuring programming data as units
            consisting of properties and behaviour?
            """,
            List.of(
                new Option("Encapsulation", false),
                new Option("Object Orientation", true),
                new Option("Platform independence", false),
                new Option("Polymorphism", false)
            ), """
            Object-oriented programming is the technique of structuring data into objects,
            which may contain data and a set of actions that operate on the data.
            """
        ), new Question("What is a valid constructor for a public class named TennisBall?",
            List.of(
                new Option("public TennisBall static create() { return new TennisBall(); }",
                    false),
                new Option("public TennisBall static newInstance() { return new TennisBall():}",
                    false),
                new Option("public TennisBall() {}", true),
                new Option("public void TennisBall() {}", false)
            ), """
            create() and newInstance() are static methods.
            void TennisBall() has a return type. TennisBall() is correct
            """
        ), new Question("What is a valid main method?",
            List.of(
                new Option("public void main(String[] args)", false),
                new Option("public static void main()", false),
                new Option("private static void start(String[] myData)", false),
                new Option("public static final void main(String[] myData)", true)
            ), """
            Main must be public, static, final and void.
            Main must accept list-like argument.
            """
        ), new Question("What is the filename extension for Java bytecode?",
            List.of(
                new Option(".java", false),
                new Option(".bytecode", false),
                new Option(".class", true),
                new Option(".ddl", false)
            ), """
            .java is a java source file.
            .bytecode is incorrect, bytecode is called .class.
            .ddl has nothing to do with java.
            """
        ), new Question("Which variables hava a scope limited to a method?",
            List.of(
                new Option("Interface variables", false),
                new Option("Class variables", false),
                new Option("Instance variables", false),
                new Option("Local variables", true)
            ), """
            Interface, class and instance variables are available in the entire scope of a class.
            Method variables are local variables at the scope of the method.
            """
        ));
  }

  @Override
  public void run(String... args) {
    if (questionRepository.count() == 0) {
      for (Question question : questionList()) {
        for (Option option : question.getOptions()) {
          optionRepository.save(option);
        }
        questionRepository.save(question);
      }
    }
  }
}
