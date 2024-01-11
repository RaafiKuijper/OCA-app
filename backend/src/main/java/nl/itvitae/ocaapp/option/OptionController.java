package nl.itvitae.ocaapp.option;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/options")
@AllArgsConstructor
public class OptionController {

  private final OptionService optionService;

  @GetMapping
  public ResponseEntity<Iterable<Option>> getAll() {
    return ResponseEntity.ok(optionService.getAll());
  }
}
