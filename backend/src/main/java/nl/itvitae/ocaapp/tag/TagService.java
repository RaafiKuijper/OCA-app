package nl.itvitae.ocaapp.tag;

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

  public TagValidationResponse validateTag(Tag tag) {
    if (tagRepository.findByNameContainingIgnoreCase(tag.getName()).size() != 0) {
      return new TagValidationResponse(false, "similar tag already exists");
    }

    return new TagValidationResponse(true, "");
  }

  public Iterable<Tag> findByName(String name) {
    return tagRepository.findByName(name);
  }

  public Tag addTag(Tag tag) {
    return tagRepository.save(tag);
  }
}
