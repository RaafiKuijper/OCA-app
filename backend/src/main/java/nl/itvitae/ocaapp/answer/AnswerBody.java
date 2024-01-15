package nl.itvitae.ocaapp.answer;

import java.util.List;

public record AnswerBody(List<Long> selectedIds, int questionId) {

}
