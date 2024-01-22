package nl.itvitae.ocaapp.tag;

import java.net.URI;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@Transactional
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/tags")
public class TagController {

  private final TagService tagService;

  @GetMapping("/")
  public Iterable<Tag> findAll() {
    return tagService.getAllTags();
  }

  @PostMapping("/isValid")
  public TagValidationResponse validateTag(@RequestBody Tag tag) {
    return tagService.validateTag(tag);
  }

  @GetMapping("/findByName/{name}")
  public Iterable<Tag> findByName(@PathVariable() String name) {
    return tagService.findByName(name);
  }

  @PostMapping("/add")
  public ResponseEntity<Tag> addTag(@RequestBody Tag tag, UriComponentsBuilder ucb) {
    if (!tagService.validateTag(tag).isValid()) {
      return ResponseEntity.badRequest().build();
    }

    final Tag newTag = tagService.addTag(tag);
    URI locationOfNewQuiz = ucb
        .path("/api/v1/quiz/{id}")
        .buildAndExpand(newTag.getId())
        .toUri();
    return ResponseEntity.created(locationOfNewQuiz).body(newTag);
  }
}
