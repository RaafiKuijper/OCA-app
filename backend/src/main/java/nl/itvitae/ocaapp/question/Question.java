package nl.itvitae.ocaapp.question;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonIgnore
  private Long id;

  private String text;
  private List<String> options;
  private String explanation;
  private String answer;
  // private List<Fragment> fragments
  // private List<Tag> tags;

  public Question(String text, List<String> options, String explanation, String answer) {
    this.text = text;
    this.options = options;
    this.explanation = explanation;
    this.answer = answer;
  }
}
