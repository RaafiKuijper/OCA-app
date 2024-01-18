package nl.itvitae.ocaapp.quiz;

import java.util.List;

public record QuizResponse(long id, List<QuizQuestion> questions) {

}
