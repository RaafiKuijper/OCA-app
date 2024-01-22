package nl.itvitae.ocaapp.question;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface QuestionRepository extends JpaRepository<Question, Long> {

}
