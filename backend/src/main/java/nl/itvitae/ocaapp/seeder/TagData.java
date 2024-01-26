package nl.itvitae.ocaapp.seeder;

import nl.itvitae.ocaapp.tag.Tag;

public enum TagData {
  POLYMORPHISM("7.2", "Develop code that demonstrates the use of polymorphism; including \n"
      + "overriding and object type versus reference type"),
  CASTING("7.3", "Determine when casting is necessary"),
  EXCEPTION_CLASSES("8.5", """
      Recognize common exception classes (such as NullPointerException,
      ArithmeticException, ArrayIndexOutOfBoundsException,
      ClassCastException)"""),
  TRY_CATCH("8.2", " Create a try-catch block and determine how exceptions alter normal \n"
      + "program flow"),
  SWITCH("3.4", "Use a switch statement"),
  SUPER_THIS("7.4", "Use super and this to access objects and constructors"),
  FIELDS("2.3", "Know how to read or write to object fields"),
  OPERATORS("3.1", "Use Java operators; including parentheses to override operator \n"
      + "precedence"),
  IMPORT("1.4", "Import other Java packages to make them accessible in your code"),
  MODIFIERS("6.4", "Apply access modifiers"),
  MAIN("1.3", "Create executable Java applications with a main method; run a Java \n"
      + "program from the command line; including console output.");

  private final Tag tag;

  TagData(String chapter, String summary) {
    this.tag = new Tag(this.name(), chapter, summary);
  }

  public Tag tag() {
    return tag;
  }
}
