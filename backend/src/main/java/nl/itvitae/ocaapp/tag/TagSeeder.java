package nl.itvitae.ocaapp.tag;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class TagSeeder implements CommandLineRunner {

  private final TagRepository tagRepository;

  @Override
  public void run(String... args) throws Exception {
    if (tagRepository.count() == 0) {
      tagRepository.saveAll(
          List.of(new Tag("Loops", "5.1", "Loopy"), new Tag("Inheritance", "6", "childy parenty")));
    }
  }
}
