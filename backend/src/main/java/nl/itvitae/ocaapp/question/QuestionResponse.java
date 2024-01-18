package nl.itvitae.ocaapp.question;

import java.util.List;
import nl.itvitae.ocaapp.fragment.Fragment;
import nl.itvitae.ocaapp.option.OptionResponse;

public record QuestionResponse(long id, String text, List<OptionResponse> options,
                               String explanation, long correct, List<Fragment> fragments) {

}
