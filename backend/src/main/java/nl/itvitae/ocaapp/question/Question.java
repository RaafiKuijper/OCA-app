package nl.itvitae.ocaapp.question;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nl.itvitae.ocaapp.fragment.Fragment;
import nl.itvitae.ocaapp.option.Option;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String text;
  // should later be changed to ManyToMany to avoid duplicate data
  @OneToMany
  private List<Option> options;
  private String explanation;

  @OneToMany
  private List<Fragment> fragments;
  // private List<Tag> tags;

  public List<Option> getCorrect() {
    return options.stream().filter(Option::getIsCorrect).toList();
  }

  public Question(String text, List<Option> options, String explanation, List<Fragment> fragments) {
    this.text = text;
    this.options = options;
    this.explanation = explanation;
    this.fragments = fragments;
  }
}
