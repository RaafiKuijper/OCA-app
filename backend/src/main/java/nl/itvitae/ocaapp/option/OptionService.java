package nl.itvitae.ocaapp.option;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OptionService {

  private final OptionRepository optionRepository;

  public Iterable<Option> getAll() {
    return optionRepository.findAll();
  }

  public List<Option> getAllById(List<Long> ids) {
    return optionRepository.findAllById(ids);
  }

  public Optional<Option> getById(Long id) {
    return optionRepository.findById(id);
  }

  public Option createOption(Option option) {
    return optionRepository.save(option);
  }
}
