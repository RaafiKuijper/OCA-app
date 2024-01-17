package nl.itvitae.ocaapp.question;

import java.util.List;
import lombok.RequiredArgsConstructor;
import nl.itvitae.ocaapp.fragment.Fragment;
import nl.itvitae.ocaapp.fragment.FragmentRepository;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.option.OptionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class QuestionSeeder implements CommandLineRunner {

  private final QuestionRepository questionRepository;
  private final OptionRepository optionRepository;
  private final FragmentRepository fragmentRepository;

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
        ), new Question("What assignment do not result in errors or exceptions?",
            List.of(
                new Option("Jumpable var1 = new Jumpable();", false),
                new Option("Animal var2 = new Animal();", true),
                new Option("Lion var3 = new Animal();", false),
                new Option("Jumpable var4 = new Animal();", false),
                new Option("Jumpable var5 = new Lion();", true),
                new Option("Jumpable var6 = (Jumpable)(new Animal());", false)

            ), """
                Option (a) is incorrect. An interface can’t be instantiated.
                Option (c) is incorrect. A reference variable of a derived class can’t be used to
               refer to an object of its base class.
                Option (d) is incorrect. A reference variable of type Jumpable can’t be used to
               refer to an object of the class Animal because Animal doesn’t implement the interface
               Jumpable.
                Option (f) is incorrect. Although this line of code will compile successfully, it will
                throw a ClassCastException at runtime. You can explicitly cast any object to an interface,
                even if it does not implement it to make the code compile. But if the object’s class
                does not implement the interface, the code will throw a ClassCastException at runtime.
            """,
            List.of(new Fragment("""
                interface Jumpable {}
                class Animal {}
                class Lion extends Animal implements Jumpable {}
                """))));
  }

  @Override
  public void run(String... args) {
    if (questionRepository.count() == 0) {
      for (Question question : questionList()) {
        for (Option option : question.getOptions()) {
          optionRepository.save(option);
        }
        for (Fragment fragment : question.getFragments()) {
          fragmentRepository.save(fragment);
        }
        questionRepository.save(question);
      }
    }
  }
}
