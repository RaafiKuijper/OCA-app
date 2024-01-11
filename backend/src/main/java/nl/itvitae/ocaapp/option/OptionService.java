package nl.itvitae.ocaapp.option;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OptionService {

  private final OptionRepository optionRepository;

  public Iterable<Option> getAll() {
    return optionRepository.findAll();
  }

}
