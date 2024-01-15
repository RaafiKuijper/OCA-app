package nl.itvitae.ocaapp.tag;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Tag {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String chapterOrParagraph;
  private String context;

  public Tag(String name, String chapterOrParagraph, String context) {
    this.name = name;
    this.chapterOrParagraph = chapterOrParagraph;
    this.context = context;
  }
}
