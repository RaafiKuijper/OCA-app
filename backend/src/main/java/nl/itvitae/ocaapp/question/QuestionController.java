package nl.itvitae.ocaapp.question;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import nl.itvitae.ocaapp.tag.Tag;
import nl.itvitae.ocaapp.tag.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/questions")
@AllArgsConstructor
public class QuestionController {

  private final QuestionService questionService;
  private final TagService tagService;

  // Maybe do this with a DTO.
  @GetMapping("")
  public ResponseEntity<Iterable<Question>> getAll() {
    return ResponseEntity.ok(questionService.getAll(new FilterBody(List.of(), false)));
  }

  @GetMapping("/filter")
  public ResponseEntity<Iterable<Question>> getFiltered(@RequestBody FilterBody filter) {
    return ResponseEntity.ok(questionService.getAll(filter));
  }

  @GetMapping("/{id}")
  public ResponseEntity<QuestionResponse> getById(@PathVariable long id) {
    final QuestionResponse questionResponse = questionService.getById(id);
    if (questionResponse == null) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(questionResponse);
    }
  }

  @GetMapping("/count")
  public ResponseEntity<QuestionCount> count(@RequestHeader List<Long> ids) {
    return ResponseEntity.ok(questionService.getCount(new FilterBody(ids, false)));
  }

  @GetMapping("/count/failedOnly")
  public ResponseEntity<QuestionCount> countFailedOnly(@RequestHeader List<Long> ids) {
    return ResponseEntity.ok(questionService.getCount(new FilterBody(ids, true)));
  }

  @GetMapping("/test")
  public ResponseEntity<Question> addTestQuestion() {
    return ResponseEntity.ok(questionService.createTestQuestion());
  }

  @PostMapping("/create")
  public ResponseEntity<Question> createQuestion(@RequestBody Question question,
      UriComponentsBuilder ucb) {
    Question newQuestion = questionService.createQuestion(question);
    URI locationOfNewQuestion = ucb
        .path("/api/v1/questions/{id}")
        .buildAndExpand(newQuestion.getId())
        .toUri();
    return ResponseEntity.created(locationOfNewQuestion).body(newQuestion);
  }

  @GetMapping("/link_tag/{question_id}/{tag_id}")
  public void linkTag(@PathVariable(value = "question_id") Long question_id,
      @PathVariable(value = "tag_id") Long tag_id) {
    Optional<Question> optionalQuestion = questionService.getById(question_id);
    Optional<Tag> optionalTag = tagService.getById(tag_id);
    if (optionalQuestion.isPresent() && optionalTag.isPresent()) {
      final Question question = optionalQuestion.get();
      question.linkTag(optionalTag.get());
      questionService.save(question);
    }
  }
}
