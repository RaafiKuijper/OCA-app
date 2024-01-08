package nl.itvitae.ocaapp.tag;

import jakarta.persistence.Entity;
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
    private Long id;
    private String tagName;

    public Tag(String tagName) {
        this.tagName = tagName;
    }
}
