package nl.itvitae.ocaapp.option;

import java.net.URI;
import java.util.Optional;
import lombok.AllArgsConstructor;
import nl.itvitae.ocaapp.question.Question;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

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

  @GetMapping("/{id}")
  public ResponseEntity<Optional<Option>> getById(@PathVariable Long id) {
    return ResponseEntity.ok(optionService.getById(id));
  }

  @PostMapping("/create")
  public ResponseEntity<Option> createOption(@RequestBody Option option,
      UriComponentsBuilder ucb) {
    Option newOption = optionService.createOption(option);
    URI locationOfNewOption = ucb
        .path("/api/v1/options/{id}")
        .buildAndExpand(newOption.getId())
        .toUri();
    return ResponseEntity.created(locationOfNewOption).body(newOption);
  }
}
