package nl.itvitae.ocaapp.question;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public Iterable<Question> getAll(){
        return questionRepository.findAll();
    }

    public Question createTestQuestion() {
        return questionRepository.save(new Question("this is a question, or it it?", "this is the answer because i said so", "correct answer"));
    }
}
