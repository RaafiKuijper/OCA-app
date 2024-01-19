package nl.itvitae.ocaapp.question;

import java.util.List;
import nl.itvitae.ocaapp.fragment.Fragment;
import nl.itvitae.ocaapp.option.OptionResponse;
import nl.itvitae.ocaapp.tag.Tag;

public record QuestionResponse(long id, String text, List<OptionResponse> options,
                               String explanation, long correct, List<Fragment> fragments,
                               List<Tag> tags) {

}
