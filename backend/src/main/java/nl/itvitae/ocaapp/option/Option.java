package nl.itvitae.ocaapp.option;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Option {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String text;
  private Boolean isCorrect;

  public Option(String text, Boolean isCorrect) {
    this.text = text;
    this.isCorrect = isCorrect;
  }
}
