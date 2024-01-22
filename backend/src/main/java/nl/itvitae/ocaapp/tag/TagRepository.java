package nl.itvitae.ocaapp.tag;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {

  Iterable<Tag> findByName(String name);

  void deleteTagByName(String name);
}
