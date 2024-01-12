package nl.itvitae.ocaapp.answer;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/answer")
@AllArgsConstructor
@CrossOrigin
public class AnswerController {

  private final AnswerService answerService;

  // Deviation from normal post contract
  @PostMapping("/submit")
  public ResponseEntity<AnswerResult> submitAnswer(@RequestBody AnswerBody body) {
    final AnswerResult result = answerService.submitAnswer(body);
    if (result == null) {
      return ResponseEntity.badRequest().build();
    } else {
      return ResponseEntity.ok(result);
    }
  }
}
