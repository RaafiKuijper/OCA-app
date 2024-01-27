package nl.itvitae.ocaapp.seeder;

public enum ExplanationData {
  EXPLANATION1("""
      Explanation: Option (a) is incorrect. An interface can’t be instantiated.
       Option (c) is incorrect. A reference variable of a derived class can’t be used to
      refer to an object of its base class.
       Option (d) is incorrect. A reference variable of type Jumpable can’t be used to
      refer to an object of the class Animal because Animal doesn’t implement the interface
      Jumpable.
       Option (f) is incorrect. Although this line of code will compile successfully, it will
      throw a ClassCastException at runtime. You can explicitly cast any object to an interface,
      even if it doesn’t implement it to make the code compile. But if the object’s class
      doesn’t implement the interface, the code will throw a ClassCastException at runtime.
      """),
  EXPLANATION2("""
      Explanation: Options (a) and (d) are incorrect because the Java API doesn’t define
      any exception classes with these names.
      Here’s a list of the array values that are initialized by the code in this question:
      names[0][0] = "Andre"
      names[0][1] = "Mike"
      names[1] = null
      names[2][0] = "Pedro"
      Because the array position [2][1] isn’t defined, any attempt to access it will throw an
      ArrayIndexOutOfBoundsException.
       An attempt to access any position of the second array—that is, names[1][0]—will
      throw a NullPointerException because names[1] is set to null.
      """),
  EXPLANATION3("""
      Explanation: Because the variable name isn’t assigned a value, you can’t call an
      instance method (length()) using it. The following line of code will throw a NullPointerException:
      name.length();
      When an exception is thrown, the control is transferred to the exception handler,
      skipping the execution of the remaining lines of code in the try block. So the code
      (a++) doesn’t execute at the comment marked with line2.
       The code defines an exception handler for both NullPointerException and
      RuntimeException. When an exception is thrown, more than one exception handler
      won’t execute. In this case, the exception handler for NullPointerException will execute
      because it’s more specific and it’s defined earlier than RuntimeException. The
      exception handler for NullPointerException includes the following code:
      ++a;
      return;
      The preceding code increments the value of the variable a by 1; and before it exits the
      method main, due to the call to the statement return, it executes the finally block,
      outputting the value 11. A finally block executes even if the catch block includes a
      return statement.
      """),
  EXPLANATION4("""
      Explanation: The default case executes only if no matching values are found. In this
      case, a matching value of 10 is found and the case label prints 10. Because a break
      statement doesn’t terminate this case label, the code execution continues and executes the remaining statements within the switch block,
      until a break statement terminates it or it ends.
      """),
  EXPLANATION5("""
      Explanation: Option (a) is incorrect because new ColorPencil() tries to invoke the
      no-argument constructor of the class ColorPencil, which isn’t defined in the class
      ColorPencil.
      Option (b) is incorrect because new ColorPencil(RED) tries to pass a variable RED,
      which isn’t defined in the code.
      """),
  EXPLANATION6("""
      Explanation: The constructor of the class Surgeon assigns the values "Liver" and
      "Heart" to the variable specialization of objects s1 and s2. The variable age is
      protected in the class Doctor. Also, the class Surgeon extends the class Doctor.
      Hence, the variable age is accessible to reference variables s1 and s2. The code
      assigns a value of 45 to the member variable age of reference variable s1. The variable
      age of reference variable s2 is initialized to the default value of an int, which is 0.
      Hence, the code prints the values mentioned in option (a).
      """),
  EXPLANATION7("""
      Explanation: The while loop will execute indefinitely because the condition a == a++
      will always evaluate to true. The postfix unary operator will increment the value of the
      variable a after it’s used in the comparison expression. a++ within the loop body will
      increment the value of a by 1. Hence, the value of a increments by 2 in a single loop.
      """),
  EXPLANATION8("""
      Explanation: Option (a) is correct. The statement import com.ejava.*; imports all
      the public members of the package com.ejava in the class MyEJava.
       Option (b) is incorrect. Because com.ejava is a package, to import all the classes
      defined in this package, the package name should be followed by .*:
      import com.ejava.*;
      Option (c) is correct. It uses two separate import statements to import each of the
      classes Person and Course individually, which is correct.
      Option (d) is also correct. The first import statement imports only the class Person
      in MyClass. But the second import statement imports both the Person and Course
      classes from the package com.ejava. You can import the same class more than once in
      a Java class with no issues. This code is correct.
       In Java, the import statement makes the imported class visible to the Java compiler,
      allowing it to be referred to by the class that’s importing it. In Java, the import statement
      does not embed the imported class in the target class.
      """),
  EXPLANATION9("""
      Explanation: Option (a) is correct. The code will compile successfully and print Lion.
       Option (b) is incorrect. The code won’t compile if the access modifier of the
      method printKing is changed to private. private members of a class can’t be
      accessed outside the class.
       Option (c) is correct. The classes Animal and Forest are defined in the same
      package, so changing the access modifier of the method printKing to default access
      will still make it accessible in the class Forest. The class will compile successfully
      and print Lion.
       Option (d) is incorrect. “default” isn’t a valid access modifier or keyword in Java. In
      Java, the default accessibility is marked by the absence of any explicit access modifier.
      This code will fail to compile
      """),
  EXPLANATION10("""
      Explanation: This question tests you on multiple points.
      1 The arguments that are passed on to the main method—The keyword java and the
      name of the class (MainMethod) aren’t passed as arguments to the main method.
      The arguments following the class name are passed to the main method. In this
      case, four method arguments are passed to the main method, as follows:
      args[0]: 1+2
      args[1]: 2*3
      args[2]: 4-3
      args[3]: 5+1
      2 The type of the arguments that are passed to the main method—The main method
      accepts arguments of type String. All the numeric expressions—1+2, 2*3, 5+1,
      and 4-3—are passed as literal String values. These won’t be evaluated when
      you try to print their values. Hence, args[0] won’t be printed as 3. It will be
      printed as 1+2.
      3 + operations with String array elements—Because the array passed to the main
      method contains all the String values, using the + operand with its individual
      values will concatenate its values. It won’t add the values, if they are numeric
      expressions. Hence, "1+2"+"4-3" won’t evaluate to 31 or 4
      """);

  private final String explanation;

  ExplanationData(String explanation) {
    this.explanation = explanation;
  }

  public static String getExplanation(int id) {
    for (ExplanationData value : values()) {
      if (value.name().contains("" + id)) {
        return value.explanation;
      }
    }

    return "";
  }
}
