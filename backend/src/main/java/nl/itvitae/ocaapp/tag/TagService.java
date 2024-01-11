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
    System.out.println("Currently in service: getAllTags");
    return tagRepository.findAll();
  }

  public Tag addTag(Tag tag) {
    System.out.println("Currently in service: addTags");
    return tagRepository.save(tag);
  }
}
