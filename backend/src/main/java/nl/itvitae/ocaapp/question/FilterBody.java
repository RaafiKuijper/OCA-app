package nl.itvitae.ocaapp.question;

import java.util.List;

public record FilterBody(List<Long> ids, boolean failedOnly) {

}
