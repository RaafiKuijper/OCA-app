package nl.itvitae.ocaapp.tag;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TagService {

  @Autowired
  TagRepository tagRepository;

  public Iterable<Tag> getAllTags() {
    return tagRepository.findAll();
  }

  public Tag addTag(Tag tag) {
    return tagRepository.save(tag);
  }

  public Optional<Tag> getById(Long id) {
    return tagRepository.findById(id);
  }
}
