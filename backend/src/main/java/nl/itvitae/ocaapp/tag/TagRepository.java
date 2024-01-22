package nl.itvitae.ocaapp.tag;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {

  List<Tag> findByNameContainingIgnoreCase(String name);

  Iterable<Tag> findByName(String name);
}
