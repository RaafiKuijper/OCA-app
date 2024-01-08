package nl.itvitae.ocaapp.question;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;
    
    private String name;
    private String explanation;
    private String correctAnswer;

    public Question(String name, String explanation, String correctAnswer) {
        this.name = name;
        this.explanation = explanation;
        this.correctAnswer = correctAnswer;
    }
}
