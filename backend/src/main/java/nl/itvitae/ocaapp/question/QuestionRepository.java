package nl.itvitae.ocaapp.question;

import jakarta.transaction.Transactional;
import java.util.List;
import nl.itvitae.ocaapp.tag.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface QuestionRepository extends JpaRepository<Question, Long> {

  List<Question> findAllQuestionsByTagsIn(List<Tag> tags);
}
