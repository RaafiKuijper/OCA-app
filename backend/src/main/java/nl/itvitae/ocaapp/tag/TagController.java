package nl.itvitae.ocaapp.tag;

import lombok.RequiredArgsConstructor;
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

  @PostMapping("/add")
  public Tag addTag(@RequestBody Tag tag) {
    return tagService.addTag(tag);
  }
}
