package cardcatalog.main.repositories;

import cardcatalog.main.entities.Deck;
import cardcatalog.main.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface DeckRepository extends CrudRepository<Deck, Long> {

    //@Query(value = "SELECT * FROM decks WHERE id = ?1", nativeQuery = true)
    Optional<Deck> findById(Long id);

    List<Deck> findAllByUser (User user);


}
