package nl.itvitae.ocaapp.tag;

import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@Transactional
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/tags")
public class TagController {

    private final TagRepository tagRepository;

    @GetMapping
    public Iterable<Tag> findAll() {
        return tagRepository.findAll();
    }
}
