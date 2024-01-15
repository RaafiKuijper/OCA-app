package nl.itvitae.ocaapp.question;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;
import nl.itvitae.ocaapp.option.Option;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

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

  @GetMapping("/{id}")
  public ResponseEntity<Question> getById(@PathVariable long id) {
    final Optional<Question> optionalQuestion = questionService.getById(id);
    return optionalQuestion.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @GetMapping("/test")
  public ResponseEntity<Question> addTestQuestion() {
    return ResponseEntity.ok(questionService.createTestQuestion());
  }
}
