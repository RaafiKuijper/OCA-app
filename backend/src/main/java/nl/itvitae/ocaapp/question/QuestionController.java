package nl.itvitae.ocaapp.question;

import java.net.URI;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

  // Maybe do this with a DTO.
  @GetMapping
  public ResponseEntity<Iterable<Question>> getAll() {
    return ResponseEntity.ok(questionService.getAll());
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
        .buildAndExpand(questionService.getAll())
        .toUri();
    return ResponseEntity.created(locationOfNewQuestion).body(newQuestion);
  }
}
