package nl.itvitae.ocaapp.tag;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class TagSeeder implements CommandLineRunner {

  private final TagRepository tagRepository;

  @Override
  public void run(String... args) {
    if (tagRepository.count() == 0) {
      tagRepository.saveAll(
          List.of(
              new Tag("Access modifiers", "1.4",
                  "There are 4 access modifiers in Java: public, protected, private and default (default is also known as package-protected). These determine how accessible the contents of source code files are."),
              new Tag("Non-Access modifiers", "1.5",
                  "These modifiers change the behaviour of a Java class and its members."),
              new Tag("Methods", "3.3",
                  "A method is a group of statements identified with a name, and are used to define the behaviour of an object."),
              new Tag("Arrays", "4.3", "Objects that store a collection of values."),
              new Tag("If statements", "5.1",
                  "If statements can change the behaviour of code based on boolean expressions"),
              new Tag("Switch statements", "5.2",
                  "Switch statements are used for conditional branching based on the value of an expression."),
              new Tag("Loops", "5.3",
                  "Loops are constructs to repeat certain lines of code. There are for-loops, enhanced for-loops, while- and do-while loops."),
              new Tag("Inheritance", "6",
                  "Through inheritance files can communicate with each other"),
              new Tag("Polymorphism", "6.3",
                  "Polymorphism is a fundamental concept in object-oriented programming that allows objects of different types to be treated as objects of a common type."),
              new Tag("Casting", "6.4",
                  "Casting is the process of converting a variable from one data type to another."),
              new Tag("Exceptions", "7",
                  "Exceptions are a mechanism for handling errors and exceptional conditions that may occur during the execution of a program.")
          ));
    }
  }
}
