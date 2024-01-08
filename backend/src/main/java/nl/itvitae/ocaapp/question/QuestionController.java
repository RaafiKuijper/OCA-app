package nl.itvitae.ocaapp.question;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/questions")
@AllArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    
    @GetMapping
    public ResponseEntity<Iterable<Question>> getAll() {
        return ResponseEntity.ok(questionService.getAll());
    }

    @GetMapping("/test")
    public ResponseEntity<Question> addTestQuestion() {
        return ResponseEntity.ok(questionService.createTestQuestion());
    }
}
