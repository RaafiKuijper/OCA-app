package nl.itvitae.ocaapp.tag;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

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

  @GetMapping("/findByName/{name}")
  public Iterable<Tag> findByName(@PathVariable() String name) {
    return tagService.findByName(name);
  }

  @PostMapping("/add")
  public Tag addTag(@RequestBody Tag tag) {
    return tagService.addTag(tag);
  }

  @DeleteMapping("/deleteTag/{tag}")
  public ResponseEntity<Void> deleteTag(@PathVariable(name = "tag") String tag) {
    tagService.deleteTagByName(tag);
    return ResponseEntity.noContent().build();
  }
}
