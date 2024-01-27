package nl.itvitae.ocaapp.seeder;

public enum TextData {
  TEXT1("What assignments do not result in errors or exceptions?"),
  TEXT2("Which option will make the code print 1?"),
  TEXT3("What is the output of the following code?"),
  TEXT4("What is the output of the following code?"),
  TEXT5("How to create and initialize an object of class ColorPencil?"),
  TEXT6("What is the output of the following code?"),
  TEXT7("What is the output of the following code?"),
  TEXT8("Which statements correctly import the classes Person and Course?"),
  TEXT9("Which statements are correct?"),
  TEXT10("What is the output of the following command?");

  private final String text;

  TextData(String text) {
    this.text = text;
  }

  public static String getText(int id) {
    for (TextData value : values()) {
      if (value.name().contains("" + id)) {
        return value.text;
      }
    }

    return "";
  }
}
