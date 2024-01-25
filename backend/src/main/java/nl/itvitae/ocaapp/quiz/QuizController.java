package nl.itvitae.ocaapp.quiz;

import java.net.URI;
import lombok.RequiredArgsConstructor;
import nl.itvitae.ocaapp.answer.AnswerBody;
import nl.itvitae.ocaapp.answer.AnswerResult;
import nl.itvitae.ocaapp.question.FilterBody;
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
@RequestMapping("/api/v1/quiz")
@RequiredArgsConstructor
@CrossOrigin
public class QuizController {

  private final QuizService quizService;

  @PostMapping("/create/{size}")
  public ResponseEntity<Quiz> createQuiz(@RequestBody FilterBody filter, @PathVariable int size,
      UriComponentsBuilder ucb) {
    final Quiz newQuiz = quizService.createQuiz(size, filter);
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
  public ResponseEntity<NextResponse> getNextQuestionId(@PathVariable long id) {
    if (quizService.getNextQuestion(id) == null) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(new NextResponse(quizService.getNextQuestion(id)));
    }
  }

  @PostMapping("/{id}/answer")
  public ResponseEntity<AnswerResult> submitAnswer(@PathVariable long id,
      @RequestBody AnswerBody body) {
    final AnswerResult result = quizService.submitAnswer(id, body);
    if (result == null) {
      return ResponseEntity.badRequest().build();
    } else {
      return ResponseEntity.ok(result);
    }
  }
}
