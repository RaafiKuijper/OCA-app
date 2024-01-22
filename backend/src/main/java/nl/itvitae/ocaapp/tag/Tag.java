package nl.itvitae.ocaapp.tag;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nl.itvitae.ocaapp.question.Question;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Tag {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String chapter;
  private String summary;

  @ManyToMany
  @JsonBackReference
  private List<Question> questions;

  public Tag(String name, String chapter, String summary) {
    this.name = name;
    this.chapter = chapter;
    this.summary = summary;
  }
}
