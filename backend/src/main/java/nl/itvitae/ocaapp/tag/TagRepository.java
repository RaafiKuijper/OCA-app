package nl.itvitae.ocaapp.tag;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TagRepository extends JpaRepository<Tag, Long> {

//  @SQL("""
//      SELECT t FROM tag t
//      WHERE POSITION(UPPER(t.name) IN UPPER(:input))>0;
//            """)
//  List<Tag> findSubstringsByName(@Param("input") String input);

  List<Tag> findByNameContainingIgnoreCase(String name);

  Iterable<Tag> findByName(String name);

  void deleteTagByName(String name);
}
