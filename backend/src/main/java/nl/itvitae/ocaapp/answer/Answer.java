package nl.itvitae.ocaapp.answer;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nl.itvitae.ocaapp.option.Option;
import nl.itvitae.ocaapp.question.Question;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer {

  @Id
  @GeneratedValue

  private Long id;

  @OneToMany
  private List<Option> selected;
  @OneToOne
  private Question question;
  private boolean passed;

  public Answer(List<Option> selected, Question question) {
    this.selected = selected;
    this.question = question;
    this.passed = question.getCorrect().equals(selected);
  }
}
