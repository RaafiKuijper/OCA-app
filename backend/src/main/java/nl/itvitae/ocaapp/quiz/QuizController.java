package nl.itvitae.ocaapp.quiz;

import java.net.URI;
import lombok.RequiredArgsConstructor;
import nl.itvitae.ocaapp.question.QuestionResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/quiz")
@RequiredArgsConstructor
@CrossOrigin
public class QuizController {

  private final QuizService quizService;

  @PostMapping("/create")
  public ResponseEntity<Quiz> createQuiz(UriComponentsBuilder ucb) {
    final int questionCount = 5;
    final Quiz newQuiz = quizService.createQuiz(questionCount);
    URI locationOfNewQuiz = ucb
        .path("/api/v1/quiz/{id}")
        .buildAndExpand(newQuiz.getId())
        .toUri();
    return ResponseEntity.created(locationOfNewQuiz).body(newQuiz);
  }

  @GetMapping("/{id}")
  public ResponseEntity<QuizResponse> getQuizById(@PathVariable long id) {
    if (quizService.getQuizById(id) == null) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(quizService.getQuizById(id));
    }
  }

  @GetMapping("/{id}/next")
  public ResponseEntity<QuestionResponse> getNextQuestion(@PathVariable long id) {
    if (quizService.getNextQuestion(id) == null) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(quizService.getNextQuestion(id));
    }
  }
}
