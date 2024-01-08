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
}
