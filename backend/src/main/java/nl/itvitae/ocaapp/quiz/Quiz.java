package nl.itvitae.ocaapp.quiz;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nl.itvitae.ocaapp.question.Question;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Quiz {

  @Id
  @GeneratedValue
  private Long id;

  private List<Question> questions;

  public Quiz(List<Question> questions) {
    this.questions = questions;
  }
}
