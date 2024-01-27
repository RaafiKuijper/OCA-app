package nl.itvitae.ocaapp.seeder.v1;

import java.util.ArrayList;
import java.util.List;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.question.Question;

public class QuestionData {

  public static List<Question> questionList() {
    List<Question> list = new ArrayList<>();

    list.add(
        new Question("What assignments do not result in errors or exceptions?", List.of(
            new Option("Jumpable var1 = new Jumpable();", false),
            new Option("Animal var2 = new Animal();", true),
            new Option("Lion var3 = new Animal();", false),
            new Option("Jumpable var4 = new Animal();", false),
            new Option("Jumpable var5 = new Lion();", true),
            new Option("Jumpable var6 = (Jumpable)(new Animal());", false)
        ), null,
            null));

    list.add(new Question("Which option will make the code print 1?", List.of(
        new Option("IndexPositionException e", false),
        new Option("NullPointerException e", false),
        new Option("ArrayIndexOutOfBoundsException e", true),
        new Option("ArrayOutOfBoundsException e", false)), null, null));

    list.add(new Question("What is the output of the following code?", List.of(
        new Option("5", false),
        new Option("6", false),
        new Option("10", false),
        new Option("11", true),
        new Option("12", false),
        new Option("Compilation error", false),
        new Option("No output", false),
        new Option("Runtime exception", false)
    ), null, null));

    list.add(new Question("What is the output of the following code?", List.of(
        new Option("100, 10, 98", false),
        new Option("10, 98", true),
        new Option("100", false),
        new Option("10", false)
    ), null, null));

    list.add(
        new Question("Which code can be used to create a ColorPencil object?", List.of(
            new Option("ColorPencil var1 = new ColorPencil();", false),
            new Option("ColorPencil var2 = new ColorPencil(RED);", false),
            new Option("ColorPencil var3 = new ColorPencil(\"RED\");", true),
            new Option("Pencil var4 = new ColorPencil(\"BLUE\");", true)
        ), null, null));

    list.add(new Question("What is the output of the following code?", List.of(
        new Option("45Heart, 0Liver", true),
        new Option("45Liver, 0Heart", false),
        new Option("45Liver, 45Heart", false),
        new Option("45Heart, 45Heart", false),
        new Option("Class fails to compile.", false)
    ), null, null));

    list.add(new Question("What is the output of the following code?", List.of(
        new Option(
            "The while loop will execute indefinitely, printing all even numbers, starting from 2.",
            true),
        new Option(
            "The while loop will execute indefinitely, printing all odd numbers, starting from 1.",
            false),
        new Option(
            "The while loop will execute indefinitely, printing all odd numbers, starting from 3. ",
            false)
    ), null, null));

    list.add(
        new Question("Which options correctly import Person and Course?", List.of(
            new Option("import com.ejava.*; class MyEJava {}", true),
            new Option("import com.ejava; class MyEJava {}", false),
            new Option("import com.ejava.Person; import com.ejava.Course; class MyEJava {}", true),
            new Option("import com.ejava.Person; import com.ejava.*; class MyEJava {}", true)
        ), null, null));

    list.add(
        new Question("What statements are correct about Animal and Forest?", List.of(
            new Option("The class Forest prints Lion.", true),
            new Option(
                "If the code on line 2 is changed as follows, the class Forest will print Lion: private void printKing() {",
                false),
            new Option(
                "If the code on line 2 is changed as follows, the class Forest will print Lion: void printKing() {",
                true),
            new Option(
                "If the code on line 2 is changed as follows, the class Forest will print Lion: default void printKing() {",
                false)
        ), null, null));

    list.add(new Question("What is the output of the given command?", List.of(
        new Option("java:1+2", false),
        new Option("java:3", false),
        new Option("MainMethod:2*3", false),
        new Option("MainMethod:6", false),
        new Option("1+2:2*3", false),
        new Option("3:3", false),
        new Option("6", false),
        new Option("1+2:4-3", true),
        new Option("31", false),
        new Option("4", false)
    ), null, null));

    return list;
  }
}
