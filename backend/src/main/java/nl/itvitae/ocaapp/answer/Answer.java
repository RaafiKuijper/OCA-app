package nl.itvitae.ocaapp.answer;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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

  @ManyToMany
  private List<Option> selected;
  @ManyToOne
  private Question question;
  private boolean passed;
  private long quizId;

  public Answer(List<Option> selected, Question question, long quizId) {
    this.selected = selected;
    this.question = question;
    this.passed = question.getCorrect().equals(selected);
    this.quizId = quizId;
  }
}
