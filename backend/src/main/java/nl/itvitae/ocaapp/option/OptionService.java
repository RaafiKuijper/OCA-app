package nl.itvitae.ocaapp.option;

import java.util.List;
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

}
