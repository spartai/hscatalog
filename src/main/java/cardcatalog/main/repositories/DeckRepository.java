package cardcatalog.main.repositories;

import cardcatalog.main.entities.Deck;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface DeckRepository extends CrudRepository<Deck, Long> {
    Optional<Deck> findByName(String name);


    @Query("SELECT id, name FROM decks WHERE userid = ?1")
    List<Deck> findAllByUserid(Long userid); // ??
}
