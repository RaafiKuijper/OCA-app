package nl.itvitae.ocaapp.option;

import java.util.Optional;
import lombok.AllArgsConstructor;
import nl.itvitae.ocaapp.question.Question;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OptionService {

  private final OptionRepository optionRepository;

  public Iterable<Option> getAll() {
    return optionRepository.findAll();
  }

  public Optional<Option> getById(Long id) {
    return optionRepository.findById(id);
  }

  public Option createOption(Option option) {
    return optionRepository.save(option);
  }
}
