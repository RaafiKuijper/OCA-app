package nl.itvitae.ocaapp.tag;

import java.util.List;
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

  public TagValidationResponse validateTag(Tag tag) {
    // Check for empty properties
    if (tag.getName().isEmpty() || tag.getChapter().isEmpty() || tag.getSummary().isEmpty()) {
      return new TagValidationResponse(false, "Tag name, chapter or summary can not be empty");
    }

    // Check if tag is substring of already existing tag
    if (tagRepository.findByNameLikeIgnoreCase(tag.getName()).size() != 0) {
      return new TagValidationResponse(false, "Similar tag already exists");
    }

    // Check if substring of tag already exist
    // I am not too fond of this code, but I don't know any other solution
    // Tried to create a better solution
    //    if (tagRepository.findSubstringsByName(tag.getName()).size() != 0) {
    //      return new TagValidationResponse(false, "Singular form already exists");
    //    }
    final String name = tag.getName().toLowerCase();
    final List<Tag> tags = tagRepository.findAll();
    final boolean subExists = tags.stream()
        .filter(existingTag -> name.contains(existingTag.getName().toLowerCase()))
        .toList().size() != 0;
    if (subExists) {
      return new TagValidationResponse(false, "Similar tag already exists");
    }

    // Check if chapter is in correct format.
    if (!tag.getChapter().matches("(\\d+.?)+") || tag.getChapter().endsWith(".")) {
      return new TagValidationResponse(false, "Chapter/paragraph must be in format x.y.z...");
    }

    return new TagValidationResponse(true, "");
  }

  public Iterable<Tag> findByName(String name) {
    return tagRepository.findByName(name);
  }

  public Tag addTag(Tag tag) {
    return tagRepository.save(tag);
  }

  public Optional<Tag> getById(Long id) {
    return tagRepository.findById(id);
  }
}
